# Generated by Django 4.0 on 2022-01-25 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='route',
            name='departure',
        ),
        migrations.RemoveField(
            model_name='route',
            name='destination',
        ),
        migrations.RemoveField(
            model_name='route',
            name='vehicle',
        ),
        migrations.AddField(
            model_name='route',
            name='arrivalTime',
            field=models.TimeField(default='00:00:00'),
        ),
        migrations.AddField(
            model_name='route',
            name='departureLocation',
            field=models.CharField(choices=[('achham', 'Achham'), ('arghakhanchi', 'Arghakhanchi'), ('baglung', 'Baglung'), ('baitadi', 'Baitadi'), ('bajhang', 'Bajhang'), ('bajura', 'Bajura'), ('banke', 'Banke'), ('bara', 'Bara'), ('bardiya', 'Bardiya'), ('bhaktapur', 'Bhaktapur'), ('bhojpur', 'Bhojpur'), ('chitwan', 'Chitwan'), ('dadeldhura', 'Dadeldhura'), ('dailekh', 'Dailekh'), ('dang deukhuri', 'Dang deukhuri'), ('darchula', 'Darchula'), ('dhading', 'Dhading'), ('dhankuta', 'Dhankuta'), ('dhanusa', 'Dhanusa'), ('dholkha', 'Dholkha'), ('dolpa', 'Dolpa'), ('doti', 'Doti'), ('gorkha', 'Gorkha'), ('gulmi', 'Gulmi'), ('humla', 'Humla'), ('ilam', 'Ilam'), ('jajarkot', 'Jajarkot'), ('jhapa', 'Jhapa'), ('jumla', 'Jumla'), ('kailali', 'Kailali'), ('kalikot', 'Kalikot'), ('kanchanpur', 'Kanchanpur'), ('kapilvastu', 'Kapilvastu'), ('kaski', 'Kaski'), ('kathmandu', 'Kathmandu'), ('kavrepalanchok', 'Kavrepalanchok'), ('khotang', 'Khotang'), ('lalitpur', 'Lalitpur'), ('lamjung', 'Lamjung'), ('mahottari', 'Mahottari'), ('makwanpur', 'Makwanpur'), ('manang', 'Manang'), ('morang', 'Morang'), ('mugu', 'Mugu'), ('mustang', 'Mustang'), ('myagdi', 'Myagdi'), ('nawalparasi', 'Nawalparasi'), ('nuwakot', 'Nuwakot'), ('okhaldhunga', 'Okhaldhunga'), ('palpa', 'Palpa'), ('panchthar', 'Panchthar'), ('parbat', 'Parbat'), ('parsa', 'Parsa'), ('pyuthan', 'Pyuthan'), ('ramechhap', 'Ramechhap'), ('rasuwa', 'Rasuwa'), ('rautahat', 'Rautahat'), ('rolpa', 'Rolpa'), ('rukum', 'Rukum'), ('rupandehi', 'Rupandehi'), ('salyan', 'Salyan'), ('sankhuwasabha', 'Sankhuwasabha'), ('saptari', 'Saptari'), ('sarlahi', 'Sarlahi'), ('sindhuli', 'Sindhuli'), ('sindhupalchok', 'Sindhupalchok'), ('siraha', 'Siraha'), ('solukhumbu', 'Solukhumbu'), ('sunsari', 'Sunsari'), ('surkhet', 'Surkhet'), ('syangja', 'Syangja'), ('tanahu', 'Tanahu'), ('taplejung', 'Taplejung'), ('terhathum', 'Terhathum'), ('udayapur', 'Udayapur')], default='Kathmandu', max_length=50),
        ),
        migrations.AddField(
            model_name='route',
            name='departureTime',
            field=models.TimeField(default='00:00:00'),
        ),
        migrations.AddField(
            model_name='route',
            name='destinationLocation',
            field=models.CharField(choices=[('achham', 'Achham'), ('arghakhanchi', 'Arghakhanchi'), ('baglung', 'Baglung'), ('baitadi', 'Baitadi'), ('bajhang', 'Bajhang'), ('bajura', 'Bajura'), ('banke', 'Banke'), ('bara', 'Bara'), ('bardiya', 'Bardiya'), ('bhaktapur', 'Bhaktapur'), ('bhojpur', 'Bhojpur'), ('chitwan', 'Chitwan'), ('dadeldhura', 'Dadeldhura'), ('dailekh', 'Dailekh'), ('dang deukhuri', 'Dang deukhuri'), ('darchula', 'Darchula'), ('dhading', 'Dhading'), ('dhankuta', 'Dhankuta'), ('dhanusa', 'Dhanusa'), ('dholkha', 'Dholkha'), ('dolpa', 'Dolpa'), ('doti', 'Doti'), ('gorkha', 'Gorkha'), ('gulmi', 'Gulmi'), ('humla', 'Humla'), ('ilam', 'Ilam'), ('jajarkot', 'Jajarkot'), ('jhapa', 'Jhapa'), ('jumla', 'Jumla'), ('kailali', 'Kailali'), ('kalikot', 'Kalikot'), ('kanchanpur', 'Kanchanpur'), ('kapilvastu', 'Kapilvastu'), ('kaski', 'Kaski'), ('kathmandu', 'Kathmandu'), ('kavrepalanchok', 'Kavrepalanchok'), ('khotang', 'Khotang'), ('lalitpur', 'Lalitpur'), ('lamjung', 'Lamjung'), ('mahottari', 'Mahottari'), ('makwanpur', 'Makwanpur'), ('manang', 'Manang'), ('morang', 'Morang'), ('mugu', 'Mugu'), ('mustang', 'Mustang'), ('myagdi', 'Myagdi'), ('nawalparasi', 'Nawalparasi'), ('nuwakot', 'Nuwakot'), ('okhaldhunga', 'Okhaldhunga'), ('palpa', 'Palpa'), ('panchthar', 'Panchthar'), ('parbat', 'Parbat'), ('parsa', 'Parsa'), ('pyuthan', 'Pyuthan'), ('ramechhap', 'Ramechhap'), ('rasuwa', 'Rasuwa'), ('rautahat', 'Rautahat'), ('rolpa', 'Rolpa'), ('rukum', 'Rukum'), ('rupandehi', 'Rupandehi'), ('salyan', 'Salyan'), ('sankhuwasabha', 'Sankhuwasabha'), ('saptari', 'Saptari'), ('sarlahi', 'Sarlahi'), ('sindhuli', 'Sindhuli'), ('sindhupalchok', 'Sindhupalchok'), ('siraha', 'Siraha'), ('solukhumbu', 'Solukhumbu'), ('sunsari', 'Sunsari'), ('surkhet', 'Surkhet'), ('syangja', 'Syangja'), ('tanahu', 'Tanahu'), ('taplejung', 'Taplejung'), ('terhathum', 'Terhathum'), ('udayapur', 'Udayapur')], default='Pokhara', max_length=50),
        ),
        migrations.AddField(
            model_name='route',
            name='vehicleType',
            field=models.CharField(choices=[('car', 'Car'), ('van', 'Van'), ('bus', 'Bus')], default='Bus', max_length=5),
        ),
    ]
