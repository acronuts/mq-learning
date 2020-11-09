from rest_framework import filters
from rest_framework.generics import ListAPIView, CreateAPIView

from companies.models import Company
from companies.serializers import CompanySerializer
from rest_framework.permissions import IsAuthenticated

from companies.permissions import IsCompanyAdmin


class ListCompanyView(ListAPIView):
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CreateCompanyView(CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsCompanyAdmin & IsAuthenticated]
