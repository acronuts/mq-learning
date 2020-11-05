from rest_framework.generics import ListAPIView, CreateAPIView

from companies.models import Company
from companies.serializers import CompanySerializer
from rest_framework.permissions import IsAuthenticated

from companies.permissions import IsAdminUser


class ListCompanyView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CreateCompanyView(CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAdminUser & IsAuthenticated]
