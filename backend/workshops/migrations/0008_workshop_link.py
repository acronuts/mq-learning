# Generated by Django 3.1.2 on 2020-11-13 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshops', '0007_workshop_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='workshop',
            name='link',
            field=models.URLField(blank=True),
        ),
    ]
