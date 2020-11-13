import random

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    code = models.CharField(max_length=5, default=code_generator)
    code_used = models.BooleanField(default=False)
    user = models.OneToOneField(to=User, related_name='user_reg', on_delete=models.CASCADE)

    def __str__(self):
        return f'Registration for {self.user.email}'


class PasswordReset(models.Model):
    code = models.CharField(max_length=5, default=code_generator)
    code_used = models.BooleanField(default=False)
    email = models.EmailField()

    def __str__(self):
        return f'Password reset for {self.email}'
