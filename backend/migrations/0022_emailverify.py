# Generated by Django 3.2.11 on 2022-04-06 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0021_ticket_booked_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailVerify',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('userid', models.CharField(max_length=50)),
                ('token', models.CharField(max_length=50)),
            ],
        ),
    ]
