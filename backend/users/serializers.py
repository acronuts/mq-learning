from django.contrib.auth import get_user_model

from rest_framework import serializers

from companies.serializers import CompanySerializer
from workshops.serializers import WorkshopSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    m2m_workshops = WorkshopSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'avatar', 'date_joined', 'isAdmin', 'company',
                  'is_staff', 'address', 'zip_code', 'city', 'country', 'available_credit', 'm2m_workshops']
