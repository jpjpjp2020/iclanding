from django.urls import path
from . import views

app_name = 'landingpage'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('privacy/', views.privacy_view, name='privacy'),
    path('sitemap/', views.sitemap_view, name='sitemap'),
]