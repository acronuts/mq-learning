from django.db import models
from django.db.models import Sum, F


def user_directory_path(instance, filename):
    return f'{instance.name}/{filename}'


class Company(models.Model):
    name = models.CharField(max_length=100, unique=True)
    about = models.CharField(max_length=255, blank=True)
    logo = models.ImageField(upload_to=user_directory_path, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    website = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=100, blank=True)
    zip_code = models.CharField(max_length=8, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f'ID {self.pk}: {self.name}'

    @property
    def available_credit(self):
        return self.fk_company_companyaccount.all().aggregate(total_available=Sum(F('credit') - F('debit')))
