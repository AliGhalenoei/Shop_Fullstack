from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import *
from .forms import *
# Register your models here.

class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    fieldsets = (
        ('Account',{'fields':('phone' , 'username' , 'password')}),
        ('Status',{'fields':('is_active' , 'is_admin')}),
    )

    add_fieldsets = (
        ('Register User', {'fields':('phone' , 'username' , 'password' , 'password2')}),
    )

    list_display = ('phone', 'username' , 'is_admin')
    list_filter = ('phone' , 'username')
    search_fields = ('phone' , 'username')
    filter_horizontal = ()
    ordering = ('-phone',)

admin.site.unregister(Group)
admin.site.register(User , UserAdmin)
