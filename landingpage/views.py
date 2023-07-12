from django.shortcuts import render


def home_view(request):
    return render(request, 'landingpage/home.html')


def privacy_view(request):
    return render(request, 'docs/privacy.html')


def sitemap_view(request):
    return render(request, 'landingpage/sitemap.xml', content_type='application/xml')
