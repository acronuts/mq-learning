# Generated by Django 3.1.2 on 2020-11-17 08:36

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wallet', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token_id', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created', models.DateField(auto_now_add=True)),
                ('status', models.CharField(choices=[('valid', 'Valid'), ('used', 'Used')], default='valid', max_length=5)),
                ('companyToken', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='fk_companyAccount_token', to='wallet.companyaccount')),
                ('employeeToken', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='fk_account_token', to='wallet.account')),
            ],
        ),
    ]
