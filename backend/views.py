from django.shortcuts import render
from .models import Route, LoggedUser, Ticket, NewsLetter, SystemInfo, Contact , EmailVerify, FAQ
from .serializers import RouteSerializer, UserSerializer, LoggedUserSerializer, EmailVerifySerializer, FAQSerializer
from .serializers import TicketSerializer, NewsLetterSerializer, ContactSerializer, SystemInfoSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

# Create your views here.
class RouteViewSet(viewsets.ModelViewSet):
    serializer_class = RouteSerializer
    queryset = Route.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class LoggedUserViewSet(viewsets.ModelViewSet):
    serializer_class = LoggedUserSerializer
    queryset = LoggedUser.objects.all()

class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()

class NewsLetterViewSet(viewsets.ModelViewSet):
    serializer_class = NewsLetterSerializer
    queryset = NewsLetter.objects.all()

class SystemInfoViewSet(viewsets.ModelViewSet):
    serializer_class = SystemInfoSerializer
    queryset = SystemInfo.objects.all()

class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

class EmailVerifyViewSet(viewsets.ModelViewSet):
    serializer_class = EmailVerifySerializer
    queryset = EmailVerify.objects.all()

class FAQViewSet(viewsets.ModelViewSet):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()