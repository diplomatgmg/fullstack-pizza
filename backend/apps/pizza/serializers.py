from rest_framework import serializers

from .models import Ingredient, Pizza, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = "__all__"


class PizzaSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)

    class Meta:
        model = Pizza
        fields = "__all__"
