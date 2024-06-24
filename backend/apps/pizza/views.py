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


class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all().order_by("name")
    serializer_class = CategorySerializer
