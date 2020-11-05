from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
from companies.models import Company
from django.db.models import Sum, F


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True)
    zip_code = models.CharField(max_length=8, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    isAdmin = models.BooleanField(default=False)
    company = models.ForeignKey(to=Company, related_name='fk_user_company', verbose_name='employees',
                                on_delete=models.CASCADE, null=True, blank=True)
    account_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    def __str__(self):
        return f'ID {self.pk}: {self.email}'

    @property
    def available_credit(self):
        return self.fk_user_account.all().aggregate(total_available=Sum(F('credit')-F('debit')))
