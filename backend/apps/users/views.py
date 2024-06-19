from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserSerializer


class HealthCheckAPIView(APIView):
    def get(self, request):
        return Response({"status": "ok"})
