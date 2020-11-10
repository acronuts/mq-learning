from datetime import timedelta

from rest_framework import serializers

from wallet.models.company_accounts import CompanyAccount


class CompanyAccountSerializer(serializers.ModelSerializer):
    expiration_date = serializers.SerializerMethodField()

    def get_expiration_date(self, CompanyAccount):
        return CompanyAccount.created.date() + timedelta(days=365)

    class Meta:
        model = CompanyAccount
        fields = ['id', 'credit', 'debit', 'created', 'company', 'expiration_date']
