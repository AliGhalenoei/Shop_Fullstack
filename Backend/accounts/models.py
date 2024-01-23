from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from django.core.exceptions import ValidationError
from django.core.validators import validate_integer

from .managers import UserManager
# Create your models here.


def valid_phone(value):
    if len(value) != 11:
        raise ValidationError('Number Phone invalid')
    return value

class User(AbstractBaseUser):
    phone = models.CharField(max_length=11 , unique=True , validators=[valid_phone , validate_integer])
    username = models.CharField(max_length=50 , unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = ('username',)

    objects = UserManager()

    def str(self) -> str:
        return self.username

    def get_by_natural_key(self, phone):
        return self.get(phone=phone)

    def has_perm(self , perm , obj = None):
        return True
    
    def has_module_perms(self , app_label):
        return True
    
    @property
    def is_staff(self):
        return self.is_admin