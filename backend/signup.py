from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.context import RequestContext
from django.contrib.auth.forms import UserCreationForm

from backend.models import EmailVerify
from .signupform import SignupForm
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage


#signup view
def signup_view(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = SignupForm()
        if request.method== 'POST':
            form = SignupForm(request.POST)
            if form.is_valid():
                user = form.save(commit=False)
                user.is_active = False
                user.save()
                userid = User.objects.get(username=user).pk
                username = form.cleaned_data.get('username')
                messages.success(request, f"Account Successfully Created: {username}")
                current_site = get_current_site(request)
                mail_subject = 'Activate your Hamro Bus account.'
                token = account_activation_token.make_token(user)
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                message = render_to_string('acc_active_email.html', {
                    'user': user,
                    'userid': userid,
                    'domain': current_site.domain,
                    'uid':uid,
                    'token':token,
                })
                to_email = form.cleaned_data.get('email')
                email = EmailMessage(
                            mail_subject, message, 'dibas@dibassigdel.com.np',to=[to_email]
                )
                email.send()
                EmailVerify.objects.create(username=user,userid=uid,token=token)
                return HttpResponse('Please confirm your email address to complete the registration')
                # return redirect('login')
            
        context = {'form':form}
        
        return render(request,'signup.html',context)

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        # return redirect('login')
        
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')