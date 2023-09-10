from django.db import models
from backend.locationlist import LocationChoices

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
    departureDate = models.DateField()
    price = models.IntegerField()
    vehicleID = models.CharField(max_length=50)
   
    def __str__(self):
        return self.name