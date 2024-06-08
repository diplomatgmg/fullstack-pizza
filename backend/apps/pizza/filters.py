from django_filters import rest_framework as filters
from .models import Pizza


class PizzaFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name", lookup_expr="icontains")

    category = filters.CharFilter(
        field_name="categories__name", lookup_expr="icontains"
    )

    class Meta:
        model = Pizza
        fields = ["category"]
