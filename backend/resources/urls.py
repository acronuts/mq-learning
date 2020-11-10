from django.urls import path

from resources.views import ListCreateResourcesView

urlpatterns = [
    path('', ListCreateResourcesView.as_view()),
]
