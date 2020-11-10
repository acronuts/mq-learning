from rest_framework import serializers

from resources.models import Video, Audio, Image


class VideoForm(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audio
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
