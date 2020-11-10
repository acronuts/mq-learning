from django.contrib.auth import get_user_model
from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from users.permissions import IsCompanyAdmin
from users.serializers import UserSerializer

User = get_user_model()


class ListUsersView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetPatchDeleteUsersView(RetrieveUpdateDestroyAPIView):
    queryset = UserSerializer
    serializer_class = UserSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user


class ListUsersByCompanyView(ListAPIView):
    search_fields = ['first_name', 'last_name', 'email']
    filter_backends = (filters.SearchFilter,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
    permission_classes = [IsCompanyAdmin & IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(company=self.kwargs['id'])


class ListColleaguesView(ListAPIView):
    search_fields = ['first_name', 'last_name', 'email', 'city']
    filter_backends = (filters.SearchFilter,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get_queryset(self):
        return User.objects.filter(company=self.request.user.company)
