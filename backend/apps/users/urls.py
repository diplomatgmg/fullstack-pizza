from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path
from .views import UserCreateAPIView, HealthCheckAPIView

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token-obtain-pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("register/", UserCreateAPIView.as_view(), name="user-register"),
    path("health-check/", HealthCheckAPIView.as_view(), name="health-check"),
]
