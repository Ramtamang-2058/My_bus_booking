from django.shortcuts import render
from django.http import HttpResponse
from django.template.context import RequestContext

# Create your views here.

def homeView(request):
    return render(request, 'home.html')