from django.contrib.auth import get_user_model
from rest_framework import serializers

from companies.models import Company


User = get_user_model()


class UserCompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'avatar', 'address', 'city', 'country',
                  'is_staff', 'isAdmin', 'company', 'available_credit', ]
        depth = 1


class CompanySerializer(serializers.ModelSerializer):
    fk_user_company = UserCompanySerializer(read_only=True, many=True)
    num_of_employees = serializers.SerializerMethodField()

    def get_num_of_employees(self, company):
        return company.fk_user_company.count()

    class Meta:
        model = Company
        fields = ['id', 'name', 'logo', 'phone', 'website', 'address', 'zip_code', 'city', 'country', 'fk_user_company',
                  'available_credit', 'num_of_employees', 'about']
