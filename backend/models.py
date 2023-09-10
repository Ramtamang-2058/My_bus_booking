import email
from django.db import models
from backend.locationlist import LocationChoices
from django.contrib.auth import get_user_model
import datetime
from django.core.validators import MinValueValidator

VEHICLE_CHOICES = [
    ('car', 'Car'),
    ('van', 'Van'),
    ('bus', 'Bus'),
]
# Create your models here.
class Route(models.Model):
    name = models.CharField(max_length=100)
    departureLocation = models.CharField(max_length=50,choices=LocationChoices,default="Kathmandu")
    destinationLocation = models.CharField(max_length=50,choices=LocationChoices,default="Pokhara")
    departureTime = models.TimeField(default='00:00:00')
    arrivalTime = models.TimeField(default='00:00:00')
    departureDate = models.DateField(validators=[MinValueValidator(datetime.date.today)],default=datetime.date.today)
    price = models.IntegerField()
    vehicleID = models.CharField(max_length=50)
    seat1 = models.BooleanField(default=False)
    seat2 = models.BooleanField(default=False)
    seat3 = models.BooleanField(default=False)
    seat4 = models.BooleanField(default=False)
    seat5 = models.BooleanField(default=False)
    seat6 = models.BooleanField(default=False)
    seat7 = models.BooleanField(default=False)
    seat8 = models.BooleanField(default=False)
    seat9 = models.BooleanField(default=False)
    seat10 = models.BooleanField(default=False)
    seat11 = models.BooleanField(default=False)
    seat12 = models.BooleanField(default=False)
    seat13 = models.BooleanField(default=False)
    seat14 = models.BooleanField(default=False)
    seat15 = models.BooleanField(default=False)
    seat16 = models.BooleanField(default=False)
    seat17 = models.BooleanField(default=False)
    seat18 = models.BooleanField(default=False)
    seat19 = models.BooleanField(default=False)
    seat20 = models.BooleanField(default=False)
    seat21 = models.BooleanField(default=False)
    seat22 = models.BooleanField(default=False)
    seat23 = models.BooleanField(default=False)
    seat24 = models.BooleanField(default=False)
    seat25 = models.BooleanField(default=False)
    seat26 = models.BooleanField(default=False)
    seat27 = models.BooleanField(default=False)
    seat28 = models.BooleanField(default=False)
    seat29 = models.BooleanField(default=False)
    seat30 = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class LoggedUser(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    isadmin = models.BooleanField(default=True)
    loggedin = models.BooleanField(default=True)
    id = models.IntegerField(0)
    
    def __str__(self):
        return self.username

class NewsLetter(models.Model):
    email = models.EmailField()
    subscribed_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.email

class Ticket(models.Model):
    username = models.CharField(max_length=50,default="dibas")
    routeId = models.IntegerField()
    bookedSeat1 = models.CharField(max_length=10,default="")
    bookedSeat2 = models.CharField(max_length=10,default="")
    payment = models.BooleanField(default=False)
    amount = models.IntegerField(default=0)
    departureLocation = models.CharField(max_length=50,choices=LocationChoices,default="Kathmandu")
    destinationLocation = models.CharField(max_length=50,choices=LocationChoices,default="Pokhara")
    departureTime = models.TimeField(default='00:00:00')
    arrivalTime = models.TimeField(default='00:00:00')
    departureDate = models.DateField()
    vehicleID = models.CharField(max_length=50)
    booked_date = models.DateTimeField(auto_now_add=True)

    
    

    def __str__(self):
        return self.username

class SystemInfo(models.Model):
    about = models.TextField()
    weblink = models.CharField(max_length=100)
    email = models.EmailField(default="")
    phone = models.CharField(max_length=20,default="")
    address = models.CharField(max_length=100,default="")
    paymentapi = models.CharField(max_length=100,default="")
    
    def __str__(self):
        return self.about

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    status = models.CharField(max_length=10,default="unread")
    contacted_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class EmailVerify(models.Model):
    username = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True,blank=True)
    userid = models.CharField(max_length=50)
    token = models.CharField(max_length=50)

    def __str__(self):
        return self.username.username

class FAQ(models.Model):
    question = models.CharField(max_length=100)
    answer = models.TextField()

    def __str__(self):
        return self.question