import time

from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer, CustomTokenObtainPairSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, *args, **kwargs):
        time.sleep(1)  # Имитирует задержку БД
        return super().post(*args, **kwargs)


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserSerializer

    def post(self, *args, **kwargs):
        time.sleep(1)  # Имитирует задержку БД
        return super().post(*args, **kwargs)


class HealthCheckAPIView(APIView):
    def get(self, request):
        return Response({"status": "ok"})
