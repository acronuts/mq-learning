from django.contrib.auth import get_user_model
from rest_framework import serializers

from workshops.models import Workshop


User = get_user_model()


class WorkshopUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name']


class WorkshopSerializer(serializers.ModelSerializer):
    attendees = WorkshopUserSerializer(read_only=True, many=True)
    number_of_attendees = serializers.SerializerMethodField()

    def get_number_of_attendees(self, workshop):
        return workshop.attendees.count()

    class Meta:
        model = Workshop
        fields = ['id', 'title', 'category', 'subtitle', 'description', 'banner', 'location', 'created', 'date_start',
                  'date_end', 'cost', 'max_seats', 'attendees', 'number_of_attendees']
