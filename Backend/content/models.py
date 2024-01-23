from django.db import models

from accounts.models import User
# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)
    sub = models.ForeignKey('self' , on_delete=models.CASCADE, related_name='sub_category', null=True,blank=True)
    is_sub=models.BooleanField(default=False)
    image = models.ImageField(upload_to='categorys/',null=True,blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
    

class Product(models.Model):
    category = models.ManyToManyField(Category , related_name='categorys')
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)
    image = models.ImageField(upload_to='images/')
    price = models.IntegerField()
    content = models.TextField()
    is_avalable=models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
    
class Comment(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE , related_name='user')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name='comment')
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.user} Commented : {self.product}'