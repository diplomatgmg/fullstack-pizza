from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    UserCreateAPIView,
    HealthCheckAPIView,
    CustomTokenObtainPairView,
)

urlpatterns = [
    path("token/", CustomTokenObtainPairView.as_view(), name="token-obtain-pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("register/", UserCreateAPIView.as_view(), name="user-register"),
    path("health-check/", HealthCheckAPIView.as_view(), name="health-check"),
]
