from datetime import timedelta

from django.contrib.auth import get_user_model
from django.utils import timezone
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from companies.models import Company
from tokens.models import Token
from wallet.models.accounts import Account
from wallet.models.company_accounts import CompanyAccount
from wallet.permissions import IsCompanyAdmin
from wallet.serializers.company_accounts import CompanyAccountSerializer

User = get_user_model()


class CreditCompanyAccountView(GenericAPIView):
    queryset = CompanyAccount.objects.all()
    serializer_class = CompanyAccountSerializer
    lookup_field = 'id'
    permission_classes = [IsAdminUser & IsAuthenticated]

    def post(self, request, *args, **kwargs):
        company = Company.objects.get(id=self.kwargs.get('id'))
        credit_amount = request.data['credit']
        credit = CompanyAccount(company=company, credit=credit_amount)
        credit.save()
        for token in range(credit_amount):
            Token(companyToken=credit).save()
        return Response(status=200)


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
            transactions = CompanyAccount.objects.filter(company=company, debit=0)
            date = timezone.now().date() - timedelta(days=365)
            tokens = Token.objects.filter(companyToken__in=transactions, created__gte=date, status='valid',
                                          employeeToken__isnull=True).order_by('created')

            credit = Account(owner=owner, company=company, credit=credit_amount)
            credit.save()
            debit = CompanyAccount(company=company, debit=credit_amount)
            debit.save()

            for token in tokens[:credit_amount]:
                token.employeeToken = credit
                token.save()

            return Response(status=200, data=f'You have credited {credit_amount} tokens to {owner}')


class ListCompanyAccountView(ListAPIView):
    queryset = CompanyAccount.objects.all()
    serializer_class = CompanyAccountSerializer
    permission_classes = []
