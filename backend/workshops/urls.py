from django.urls import path

from workshops.views import ListWorkshopView, ReserveWorkshopView, ListUserRegisteredWorkshopsView, \
    ListUserAttendedWorkshopsView, ListWorkshopByIDView, CreateWorkshopView, DeleteWorkshopByIDView

urlpatterns = [
    path('', ListWorkshopView.as_view()),
    path('<int:workshop_id>/', ListWorkshopByIDView.as_view()),
    path('reserve/<int:workshop_id>/', ReserveWorkshopView.as_view()),
    path('user/registered/', ListUserRegisteredWorkshopsView.as_view()),
    path('user/attended/', ListUserAttendedWorkshopsView.as_view()),
    path('create/', CreateWorkshopView.as_view()),
    path('delete/<int:workshop_id>/', DeleteWorkshopByIDView.as_view()),
]
