from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=32, unique=True)

    def __str__(self):
        return self.name

    def clean(self):
        self.name = self.name.lower()


class Category(models.Model):
    name = models.CharField(max_length=32, unique=True)

    def __str__(self):
        return self.name

    def clean(self):
        self.name = self.name.lower()


class Pizza(models.Model):
    name = models.CharField(max_length=32, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    ingredients = models.ManyToManyField(Ingredient, blank=True)
    categories = models.ManyToManyField(Category, blank=True)
    image = models.FileField(upload_to="pizza/")

    def __str__(self):
        return self.name
