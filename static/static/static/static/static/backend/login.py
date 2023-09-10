from django.contrib.auth.signals import user_login_failed
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.context import RequestContext
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie


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
                return redirect('signup')
            else:
                messages.info(request,"Username OR Password is incorrect!")
                return render(request,'login.html')
        context={}
        return render(request,'login.html',context)


# @ogin_required(login_url='login')
def logout_view(request):
    logout(request)
    return redirect('login')