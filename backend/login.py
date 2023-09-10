from django.contrib.auth.signals import user_login_failed
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.context import RequestContext
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from .signupform import LoggedUserForm
from .models import LoggedUser
from backend.home import homeView

#login view
@ensure_csrf_cookie
def login_view(request):
    # if request.user.is_authenticated:
        # return redirect('login')#to be replaced with home page
    # else:
         
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request,username=username, password=password)
            
            if user is not None:
                login(request,user)
                logged = LoggedUser.objects.get(userid=1) 
                logged.username = request.user.username
                logged.id = request.user.id
                if(request.user.is_superuser):
                    logged.isadmin = False
                else:
                    logged.isadmin = True
                logged.loggedin = False
                logged.save()              
                return redirect('home')
            else:
                messages.info(request,"Username OR Password is incorrect!")
                return render(request,'login.html')
        context={}
        return render(request,'login.html',context)


# @ogin_required(login_url='login')
def logout_view(request):
    logged = LoggedUser.objects.get(userid=1)
    logged.username = "" 
    logged.isadmin = True
    logged.loggedin = True
    logged.id = 0
    logged.save()     
    logout(request)        
    return redirect('home')