from django.urls import path

from workshops.views import ListWorkshopView, ReserveWorkshopView, ListUserRegisteredWorkshopsView, \
    ListUserAttendedWorkshopsView, ListWorkshopByIDView

urlpatterns = [
    path('', ListWorkshopView.as_view()),
    path('<int:workshop_id>/', ListWorkshopByIDView.as_view()),
    path('reserve/<int:workshop_id>/', ReserveWorkshopView.as_view()),
    path('user/registered/<int:id>/', ListUserRegisteredWorkshopsView.as_view()),
    path('user/attended/<int:id>/', ListUserAttendedWorkshopsView.as_view()),
]
