from django.contrib.auth import get_user_model

from rest_framework import serializers

from companies.serializers import CompanySerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'avatar', 'date_joined', 'isAdmin', 'company',
                  'address', 'zip_code', 'city', 'country', 'available_credit']
