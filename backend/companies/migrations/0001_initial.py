# Generated by Django 3.1.2 on 2020-11-18 17:18

import companies.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('about', models.CharField(blank=True, max_length=255)),
                ('logo', models.ImageField(blank=True, upload_to=companies.models.user_directory_path)),
                ('phone', models.CharField(blank=True, max_length=15)),
                ('website', models.CharField(blank=True, max_length=50)),
                ('address', models.CharField(blank=True, max_length=100)),
                ('zip_code', models.CharField(blank=True, max_length=8)),
                ('city', models.CharField(blank=True, max_length=50)),
                ('country', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]
