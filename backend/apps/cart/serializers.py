from rest_framework import serializers
from .models import Cart, CartItem
from ..pizza.serializers import PizzaSerializer


class CartItemSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()

    class Meta:
        model = CartItem
        fields = ("id", "pizza", "quantity")


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ("items",)
