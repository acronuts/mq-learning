from django.urls import path

from users.views import ListUsersView, GetPatchDeleteUsersView, ListUsersByCompanyView, ListColleaguesView

urlpatterns = [
    path('', ListUsersView.as_view()),
    path('me/', GetPatchDeleteUsersView.as_view()),
    path('company/<int:id>/', ListUsersByCompanyView.as_view()),
    path('colleagues/', ListColleaguesView.as_view())
]
