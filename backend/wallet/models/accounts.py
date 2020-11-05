from django.conf import settings
# from django.contrib.auth import get_user_model
from django.db import models

from companies.models import Company

User = settings.AUTH_USER_MODEL


class Account(models.Model):
    credit = models.IntegerField(blank=True, default=0)
    debit = models.IntegerField(blank=True, default=0)
    created = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(to=User, related_name='fk_user_account', on_delete=models.CASCADE)
    company = models.ForeignKey(to=Company, related_name='fk_company_account', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'{self.owner} from {self.company} has a credit of {self.credit} and a debit of {self.debit}'
