from backend.views import RouteViewSet
from rest_framework.routers import DefaultRouter
from backend import views
from django.urls import path, re_path, include
from backend.home import homeView
from backend.login import login_view, logout_view
from backend.signup import signup_view, activate
from django.contrib.auth.decorators import login_required
from backend.password import change_password
from django.contrib.auth import views as auth_views
from ui.views import password_reset_request

app_name = "ui"
urlpatterns = [
    path('login/', login_view),
    path('accounts/login/', login_view),
    path('logout/', logout_view),
    path('accounts/logout/', logout_view),

    # path('accounts/',include('django.contrib.auth.urls')),
    path("password/change/", auth_views.PasswordChangeView.as_view(template_name='../templates/password/password_change_view.html'), name="change_password"),
    path("accounts/password/change/done/", auth_views.PasswordChangeDoneView.as_view(template_name='../templates/password/password_change_done.html'), name="password_change_done"),
    path("password_reset/", password_reset_request, name="password_reset"),
    # path('password_reset/',auth_views.PasswordResetView.as_view(template_name='../templates/password/password_reset.html'),name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='../templates/password/password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="../templates/password/password_reset_confirm.html"), name='password_reset_confirm'),
    path('accounts/reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='../templates/password/password_reset_complete.html'), name='password_reset_complete'), 
    # path('/', login_required((homeView),login_url='login')),
    path('/',homeView),
    # match the root
    re_path(r'^$', homeView),
    # match all other pages
    # re_path(r'^(?:.*)/?$', login_required((homeView),login_url='login')),
    re_path(r'^(?:.*)/?$', homeView),


]
