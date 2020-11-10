from rest_framework.generics import ListCreateAPIView

from resources.models import Resource
from resources.permissions import IsAdminUserOrReadOnly
from resources.serializers import ResourceSerializer


class ListCreateResourcesView(ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [IsAdminUserOrReadOnly]
