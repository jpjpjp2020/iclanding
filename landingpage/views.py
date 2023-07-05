from django.shortcuts import render


def home_view(request):
    return render(request, 'landingpage/home.html')


def privacy_view(request):
    return render(request, 'landingpage/privacy.html')