from backend.views import RouteViewSet
from rest_framework.routers import DefaultRouter
from backend import views
from django.urls import path, re_path
from backend.home import homeView
from backend.login import login_view, logout_view
from backend.signup import signup_view
from django.contrib.auth.decorators import login_required

app_name = "ui"
urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    # path('/', login_required((homeView),login_url='login')),
    path('/',homeView),
    # match the root
    re_path(r'^$', homeView),
    # match all other pages
    # re_path(r'^(?:.*)/?$', login_required((homeView),login_url='login')),
    re_path(r'^(?:.*)/?$', homeView)

]
