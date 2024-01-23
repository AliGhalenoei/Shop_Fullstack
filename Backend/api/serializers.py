from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from accounts.models import User

from content.models import Product, Category, Comment

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['phone'] = user.phone
        token['username'] = user.username
        token['password'] = user.password
        # ...

        return token
    
class UserRegisterSerializer(serializers.Serializer):
    phone = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField()
    password2 = serializers.CharField()

    def validate_phone(self , value):
        if User.objects.filter(phone = value):
            raise serializers.ValidationError('Phone is alredy....')
        return value
    
    def validate_username(self , value):
        if User.objects.filter(username = value):
            raise serializers.ValidationError('Username is alredy....')
        return value
    
    def validate(self,value):
        if value['password'] and value['password2'] and value['password'] != value['password2']:
            raise serializers.ValidationError('passwords is not mach')
        return value
    

class ContactSerializer(serializers.Serializer):

    SUBJECT = (
        ('Support','Support'),
        ('Payment','Payment'),
        ('Offers','Offers'),
        ('Question','Question'),
    )

    email = serializers.EmailField()
    phone = serializers.CharField()
    subject = serializers.ChoiceField(choices=SUBJECT)
    message = serializers.CharField()

    def validate_phone(self , value):
        if len(value) != 11 :
            raise serializers.ValidationError('Phone invalid...')
        return value
    
# Serializers App Content ====>

# Product Serializers...
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(read_only = True , many = True)
    class Meta:
        model = Product
        fields = ('__all__')

class RandomProductSerializers(serializers.ModelSerializer):
    category = serializers.StringRelatedField(read_only = True , many = True)
    class Meta:
        model = Product
        fields = ('__all__')

# Comment Serializers...
class CommentsSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only = True) 
    class Meta:
        model = Comment
        fields = ('__all__')

class CreateCommentSerializer(serializers.Serializer):
    message = serializers.CharField()

class UpdateCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('message',)







        
