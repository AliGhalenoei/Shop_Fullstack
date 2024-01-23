from django.shortcuts import render

from .models import User
# Create your views here.


class UsernameBackend:
    def authenticate(self , request , phone , password):
        try:
            user = User.objects.get(username = phone)
            user.check_password(password)
            if user:
                return user
            return None
        except User.DoesNotExist:
            return None
    
    def get_user(self , pk):
        try:
            return User.objects.get(id = pk)
        except User.DoesNotExist:
            return None