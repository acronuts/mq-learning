from django.urls import path

from wallet.views import CreditUserAccountView, ListCompanyAccountView, CreditCompanyAccountView

urlpatterns = [
    path('', ListCompanyAccountView.as_view()),
    path('user/<int:user_id>/', CreditUserAccountView.as_view()),
    path('company/<int:id>/', CreditCompanyAccountView.as_view())
]
