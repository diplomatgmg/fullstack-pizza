from django.urls import path

from .views import PizzaListAPIView

urlpatterns = [
    path("pizza/", PizzaListAPIView.as_view(), name="pizza-list"),
]
