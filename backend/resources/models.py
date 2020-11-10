from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.name}/{filename}'


class Video(models.Model):
    name = models.CharField(max_length=50)
    video_file = models.FileField(upload_to=user_directory_path, null=True, blank=True)

    def __str__(self):
        return f'{self.name}'


class Audio(models.Model):
    name = models.CharField(max_length=50)
    audio_file = models.FileField(upload_to=user_directory_path, null=True, blank=True)

    def __str__(self):
        return f'{self.name}'


class Image(models.Model):
    name = models.CharField(max_length=50)
    image_file = models.ImageField(upload_to=user_directory_path, null=True, blank=True)

    def __str__(self):
        return f'{self.name}'

