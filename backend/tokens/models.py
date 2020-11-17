import uuid
from datetime import timedelta

from django.db import models
from django.utils import timezone

from wallet.models.accounts import Account
from wallet.models.company_accounts import CompanyAccount


class Token(models.Model):
    token_status = [
        ('valid', 'Valid'),
        ('used', 'Used'),
    ]
    token_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created = models.DateField(auto_now_add=True)
    companyToken = models.ForeignKey(
        to=CompanyAccount,
        related_name='fk_companyAccount_token',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )
    employeeToken = models.ForeignKey(
        to=Account,
        related_name='fk_account_token',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )
    status = models.CharField(max_length=5, choices=token_status, default='valid')

    def __str__(self):
        return f'{self.token_id}'

    @property
    def expired(self):
        return self.created + timedelta(days=365) < timezone.now().date()
