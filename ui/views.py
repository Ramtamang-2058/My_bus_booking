from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from backend.tokens import account_activation_token
from django.core.mail import EmailMessage

def password_reset_request(request):
    if request.method == "POST":
        password_reset_form = PasswordResetForm(request.POST)
        if password_reset_form.is_valid():
            data = password_reset_form.cleaned_data['email']
            associated_users = User.objects.filter(Q(email=data))
            if associated_users.exists():
                for user in associated_users:
                    subject = "Password Reset Requested"
                    email_template_name = "main/password/password_reset_email.txt"
                    c = {
                    'domain':'http://127.0.0.1:8000',
                    'site_name': 'Hamro Bus',
                    "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                    "user": user,
                    'token': account_activation_token.make_token(user),
                    'userid': User.objects.get(username=user).pk
                    }
                    email = render_to_string('password_reset_email.html', c)
                    to_email = password_reset_form.cleaned_data.get('email')
                    email = EmailMessage(subject, email, 'dibas@dibassigdel.com.np',to=[to_email])
                    email.send()
                    return redirect ("/password_reset/done/")
    password_reset_form = PasswordResetForm()
    return render(request=request, template_name="../templates/password/password_reset.html", context={"password_reset_form":password_reset_form})