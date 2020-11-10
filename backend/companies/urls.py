from django.urls import path

from companies.views import ListCompanyView, CreateCompanyView, GetPatchDeleteCompanyView

urlpatterns = [
    path('', ListCompanyView.as_view()),
    path('new/', CreateCompanyView.as_view()),
    path('update/', GetPatchDeleteCompanyView.as_view()),
]
