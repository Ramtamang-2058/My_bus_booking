from django.shortcuts import render
from .models import Route
from .serializers import RouteSerializer
from rest_framework import viewsets

# Create your views here.
class RouteViewSet(viewsets.ModelViewSet):
    serializer_class = RouteSerializer
    queryset = Route.objects.all()
