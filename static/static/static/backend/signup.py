from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.context import RequestContext
from django.contrib.auth.forms import UserCreationForm
from .signupform import SignupForm
from django.contrib import messages

#signup view
def signup_view(request):
    # if request.user.is_authenticated:
    #     return redirect('login')
        #to be replaced with home page later
    # else:
        form = SignupForm()
        if request.method== 'POST':
            form = SignupForm(request.POST)
            if form.is_valid():
                form.save()
                username = form.cleaned_data.get('username')
                messages.success(request, f"Account Successfully Created: {username}")
                return redirect('login')
            
        context = {'form':form}
        
        return render(request,'signup.html',context)