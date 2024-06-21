import time

from rest_framework import generics

from .filters import PizzaFilter
from .models import Pizza, Category
from .pagination import PizzaPagination
from .serializers import PizzaSerializer, CategorySerializer


class PizzaListAPIView(generics.ListAPIView):
    queryset = Pizza.objects.all().prefetch_related("ingredients")
    serializer_class = PizzaSerializer
    pagination_class = PizzaPagination
    filterset_class = PizzaFilter

    ordering_fields = ["name", "price"]

    def list(self, *args, **kwargs):
        time.sleep(1)  # Имитирует задержку БД
        return super().list(*args, **kwargs)


class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, *args, **kwargs):
        time.sleep(0.5)  # Имитирует задержку БД
        return super().list(*args, **kwargs)
