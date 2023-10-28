"""
root views for the @ pattern to use shorter URL in share option on app. side.
"""

from django.shortcuts import redirect

def redirect_to_app(request, username):
    return redirect(f'https://app.impactcount.com/users/{username}')