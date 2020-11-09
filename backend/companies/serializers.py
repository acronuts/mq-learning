from django.contrib.auth import get_user_model
from rest_framework import serializers

from companies.models import Company


User = get_user_model()


class UserCompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    fk_user_company = UserCompanySerializer(read_only=True, many=True)
    num_of_employees = serializers.SerializerMethodField()

    def get_num_of_employees(self, company):
        return company.fk_user_company.count()

    class Meta:
        model = Company
        fields = ['id', 'name', 'phone', 'website', 'address', 'zip_code', 'city', 'country', 'fk_user_company',
                  'available_credit', 'num_of_employees']
