from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView

import random

from .serializers import *
from .tasks import send_email_task

from content.models import Product , Category
from content.cart import Cart
# Create your views here.

# JWT Token...
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserRegisterAPIView(APIView):
    serializer_class = UserRegisterSerializer

    def post(self , request):
        srz_data = self.serializer_class(data=request.data)
        if srz_data.is_valid():
            vd = srz_data.validated_data
            User.objects.create_user(
                phone=vd['phone'],
                username=vd['username'],
                password=vd['password'],
            )
            return Response(data=srz_data.data , status=status.HTTP_201_CREATED)
        return Response(srz_data.errors , status=status.HTTP_400_BAD_REQUEST)
    
# Contact...
class ContactAPIView(APIView):
    serializer_class = ContactSerializer

    def post(self , request):
        srz_data = self.serializer_class(data=request.data)
        if srz_data.is_valid():
            vd = srz_data.validated_data
            send_email_task.delay(
                vd['email'],
                vd['phone'],
                vd['subject'],
                vd['message']
            )
            return Response(data=srz_data.data , status=status.HTTP_200_OK)
        return Response(srz_data.errors , status=status.HTTP_400_BAD_REQUEST)
    
# Api App Content ===>

class CategorysAPIView(APIView):
    serializer_class = CategorySerializer

    def get(self , request):
        categorys = Category.objects.all()
        srz_data = self.serializer_class(instance = categorys , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)

# Products Api...
class ProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        products = Product.objects.all()
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class TrendProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        products = Product.objects.order_by('-id')[:10]
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class ConsoleProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        get_category = Category.objects.get(title = 'Consoles')
        products = Product.objects.filter(category = get_category)[:10]
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class LaptopProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        get_category = Category.objects.get(title = 'Laptops')
        products = Product.objects.filter(category = get_category)
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class PcsProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        get_category = Category.objects.get(title = 'Pcs')
        products = Product.objects.filter(category = get_category)
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class MobailProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        get_category = Category.objects.get(title = 'Mobails')
        products = Product.objects.filter(category = get_category)
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class CameraProductsAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request):
        get_category = Category.objects.get(title = 'Cameras')
        products = Product.objects.filter(category = get_category)
        srz_data = self.serializer_class(instance = products , many = True)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
class RandomProductAPIView(APIView):
    serializer_class = RandomProductSerializers

    def get(self , request):
        products = Product.objects.all()
        random_products = random.sample(list(products), k=10)
        srz_data = self.serializer_class(instance=random_products , many = True)
        return Response(data=srz_data.data , status = status.HTTP_200_OK)
    
class RetriveProductAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self , request , pk):
        product = Product.objects.get(id = pk)
        srz_data = self.serializer_class(instance=product)
        return Response(data=srz_data.data , status=status.HTTP_200_OK)
    
# Comment Apis...
class CommentsAPIView(APIView):
    serializer_class = CommentsSerializer

    def get(self , request , pk):
        comments = Comment.objects.filter(product = pk)
        srz_data = self.serializer_class(instance=comments , many =True)
        return Response(data=srz_data.data ,status = status.HTTP_200_OK)

class CreateCommentAPIView(APIView):
    serializer_class = CreateCommentSerializer

    def post(self , request , pk):
        product = Product.objects.get(id = pk)
        #get_user = request.user
        srz_data = self.serializer_class(data=request.data)
        if srz_data.is_valid():
            vd = srz_data.validated_data
            Comment.objects.create(
                user = request.user,
                product = product,
                message = vd['message']
            )
            return Response(data = srz_data.data , status = status.HTTP_201_CREATED)
        return Response(srz_data.errors ,status = status.HTTP_400_BAD_REQUEST)
    
class UpdateCommentAPIView(APIView):
    serializer_class = UpdateCommentSerializer

    def put(self, request , pk):
        comment = Comment.objects.get(id = pk)
        srz_data = self.serializer_class(instance=comment , data = request.data)
        if srz_data.is_valid():
            vd = srz_data.validated_data
            srz_data.save()
            return Response(data = srz_data.data , status = status.HTTP_200_OK)
        return Response(srz_data.errors ,status = status.HTTP_400_BAD_REQUEST)

class DeleteCommentAPIView(APIView):
    def delete(self , request , pk):
        get_comment = Comment.objects.get(id = pk)
        get_comment.delete()
        return Response({'Message':'CommentDeleted'} , status=status.HTTP_200_OK)   


    


