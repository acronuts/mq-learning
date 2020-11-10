from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from wallet.models.accounts import Account
from wallet.models.company_accounts import CompanyAccount
from wallet.permissions import IsCompanyAdmin
from wallet.serializers.company_accounts import CompanyAccountSerializer

User = get_user_model()


class CreditUserAccountView(GenericAPIView):
    queryset = CompanyAccount.objects.all()
    serializer_class = CompanyAccountSerializer
    lookup_field = 'user_id'
    permission_classes = [IsCompanyAdmin & IsAuthenticated]

    def post(self, request, *args, **kwargs):
        owner = User.objects.get(id=self.kwargs.get('user_id'))
        company = self.request.user.company
        credit_amount = request.data['credit']
        if owner.company.id != company.id:
            return Response(status=403, data="This employee is not part of your company")
        elif company.available_credit['total_available'] - credit_amount < 0:
            return Response(status=403, data="Sorry, you don't have enough credit")
        else:
            credit = Account(owner=owner, company=company, credit=credit_amount)
            credit.save()
            debit = CompanyAccount(company=company, debit=credit_amount)
            debit.save()
            return Response(status=200, data=f'You have credited {credit_amount} credits to {owner}')


class ListCompanyAccountView(ListAPIView):
    queryset = CompanyAccount.objects.all()
    serializer_class = CompanyAccountSerializer
    permission_classes = []
