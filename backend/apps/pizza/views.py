from rest_framework import generics

from .models import Pizza
from .serializers import PizzaSerializer


class PizzaListAPIView(generics.ListAPIView):
    queryset = Pizza.objects.all().prefetch_related("ingredients")
    serializer_class = PizzaSerializer
