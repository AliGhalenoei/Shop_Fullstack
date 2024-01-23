from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .import views

urlpatterns = [
    # Paths App accounts...
    path('token/', views.MyTokenObtainPairView.as_view(), name='token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # User Register...
    path('register/',views.UserRegisterAPIView.as_view()),
    # Contact...
    path('contact/',views.ContactAPIView.as_view()),
    # Paths App content...
    path('categorys/',views.CategorysAPIView.as_view()),
    # Filter Product Paths...
    path('products/',views.ProductsAPIView.as_view()),
    path('products/trend/',views.TrendProductsAPIView.as_view()),
    path('products/consoles/',views.ConsoleProductsAPIView.as_view()),
    path('products/laptops/',views.LaptopProductsAPIView.as_view()),
    path('products/pcs/',views.PcsProductsAPIView.as_view()),
    path('products/mobails/',views.MobailProductsAPIView.as_view()),
    path('products/cameras/',views.CameraProductsAPIView.as_view()),
    path('random/products/',views.RandomProductAPIView.as_view()),
    path('product/<int:pk>/',views.RetriveProductAPIView.as_view()),
    # Comment Paths...
    path('comments/<int:pk>/',views.CommentsAPIView.as_view()),
    path('comment/<int:pk>/',views.CreateCommentAPIView.as_view()),
    path('comment/update/<int:pk>/',views.UpdateCommentAPIView.as_view()),
    path('comment/delete/<int:pk>/',views.DeleteCommentAPIView.as_view()),
]
