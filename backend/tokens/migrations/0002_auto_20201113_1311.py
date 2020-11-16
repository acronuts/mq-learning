# Generated by Django 3.1.2 on 2020-11-13 13:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tokens', '0001_initial'),
        ('wallet', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='token',
            name='companyToken',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='fk_companyAccount_token', to='wallet.companyaccount'),
        ),
        migrations.AddField(
            model_name='token',
            name='employeeToken',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='fk_account_token', to='wallet.account'),
        ),
    ]
