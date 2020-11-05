from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.title}/{filename}'


class Workshop(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    banner = models.ImageField(upload_to=user_directory_path, blank=True)
    location = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now=True)
    date_start = models.DateTimeField()
    date_end = models.DateTimeField()
    cost = models.IntegerField()
    max_seats = models.IntegerField(default=20)
    attendees = models.ManyToManyField(to=User, related_name='m2m_workshops')

    def __str__(self):
        return f'{self.title}'
