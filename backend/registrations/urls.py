from django.urls import path

from registrations.views import RegistrationView, ValidationView, PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('', RegistrationView.as_view()),
    path('validate/', ValidationView.as_view()),
    path('password/reset/', PasswordResetView.as_view()),
    path('password/validate/', PasswordResetValidationView.as_view())
]
