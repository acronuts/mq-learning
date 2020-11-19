# Generated by Django 3.1.2 on 2020-11-18 17:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token_id', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created', models.DateField(auto_now_add=True)),
                ('status', models.CharField(choices=[('valid', 'Valid'), ('used', 'Used')], default='valid', max_length=5)),
            ],
        ),
    ]
