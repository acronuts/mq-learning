from django.urls import path

from wallet.views import CreditUserAccountView

urlpatterns = [
    path('user/<int:user_id>/', CreditUserAccountView.as_view())
]
