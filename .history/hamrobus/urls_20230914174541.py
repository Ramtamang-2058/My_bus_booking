"""hamrobus URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from turtle import home
from django.contrib import admin
from django.urls import path, include, re_path
from backend.login import login_view, logout_view
from backend.routeview import routeView
from backend.signup import signup_view , activate
from backend import views
from backend.home import homeView
from django.conf.urls import url
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = "HamroBus Admin"
admin.site.site_title = "HamroBus Admin Portal"
admin.site.index_title = "Welcome to HamroBus Portal"


urlpatterns = [
    path('admin/', include('reservationApp.urls')),
        path('admin/', include('reservationApp.urls')),

    # path('', login_required((homeView),login_url='login')),
    path('', homeView),
    path('home', homeView,name='home'),
    path('login/', login_view, name="login"),
    # path('route/',routeView, name="route"),
    path('signup/', signup_view, name="signup"),
    path('accounts/signup/', signup_view),
    path('backend/', include('backend.urls')),
    path('',include('ui.urls')),
    url('^accounts/', include('django.contrib.auth.urls')),
    # path('activate/<uidb64>/<token>/', activate, name='activate'),
#     accounts/logout/ [name='logout']
# accounts/password_change/ [name='password_change']
# accounts/password_change/done/ [name='password_change_done']
# accounts/password_reset/ [name='password_reset']
# accounts/password_reset/done/ [name='password_reset_done']
# accounts/reset/<uidb64>/<token>/ [name='password_reset_confirm']
# accounts/reset/done/ [name='password_reset_complete']
   
]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
