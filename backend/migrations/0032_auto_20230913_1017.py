# Generated by Django 3.2 on 2023-09-13 10:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0031_alter_route_departuredate'),
    ]

    operations = [
        migrations.AddField(
            model_name='route',
            name='code',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='route',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='route',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='route',
            name='status',
            field=models.CharField(choices=[('1', 'Active'), ('2', 'Cancelled')], default=1, max_length=2),
        ),
    ]