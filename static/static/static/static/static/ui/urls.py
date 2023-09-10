from backend.views import RouteViewSet
from rest_framework.routers import DefaultRouter
from backend import views
from django.urls import path, re_path
from backend.home import homeView

app_name = "ui"
urlpatterns = [
    # match the root
    re_path(r'^$', homeView),
    # match all other pages
    re_path(r'^(?:.*)/?$', homeView),
]