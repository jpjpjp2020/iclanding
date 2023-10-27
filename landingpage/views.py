from django.shortcuts import render


def home_view(request):
    return render(request, 'landingpage/home.html')


def privacy_view(request):
    return render(request, 'docs/privacy.html')

def terms_view(request):
    return render(request, 'docs/terms.html')

def cookies_view(request):
    return render(request, 'docs/cookies.html')

def sitemap_view(request):
    return render(request, 'landingpage/sitemap.xml', content_type='application/xml')
