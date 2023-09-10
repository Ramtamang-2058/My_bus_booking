from rest_framework import serializers
from backend.models import Route, LoggedUser, Ticket, NewsLetter, SystemInfo, Contact, EmailVerify, FAQ
from django.contrib.auth.models import User
class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','first_name','last_name','is_active']
        extra_kwargs = {'password': {'write_only': True}}
   
class LoggedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoggedUser
        fields = ['userid','username','isadmin','loggedin','id']

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

class NewsLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = '__all__'

class SystemInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemInfo
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class EmailVerifySerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailVerify
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'