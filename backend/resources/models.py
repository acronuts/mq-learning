from django.db import models


class Resource(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    link = models.URLField()

    def __str__(self):
        return f'{self.name}'

