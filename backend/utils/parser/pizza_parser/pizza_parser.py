import re
from pathlib import Path

import requests
from apps.pizza.models import Pizza, Ingredient, Category
from bs4 import BeautifulSoup
from core.settings import BASE_DIR
from slugify import slugify

PARSER_DIR = Path(__file__).resolve().parent
MEDIA_PIZZA_DIR = BASE_DIR / "media" / "pizza"

BANNED_NAMES = (
    "Пицца из половинок",
    "Соберите свою пиццу",
)


class PizzaParser:
    def __init__(self, parser_dir: Path, media_dir: Path, banned_names: tuple):
        self.parser_dir = parser_dir
        self.media_dir = media_dir
        self.banned_names = banned_names

    def download_image(self, url: str, image_ext: str, image_name: str) -> str:
        image_path = self.media_dir / f"{image_name}.{image_ext}"
        data = requests.get(url).content

        with open(image_path, "wb") as handler:
            handler.write(data)

        return f"pizza/{image_name}.{image_ext}"

    @staticmethod
    def clear_text(text: str) -> str:
        return re.sub(r"\s+", " ", text).strip()

    @staticmethod
    def create_ingredient(name: str) -> Ingredient:
        ingredient, _ = Ingredient.objects.get_or_create(name=name)
        return ingredient

    @staticmethod
    def create_category() -> Category:
        category, _ = Category.objects.get_or_create(name="все")
        return category

    def parse_pizza(self, pizza_article) -> None:
        pizza_main = pizza_article.find("main")

        name_raw = pizza_main.find("a", class_="sc-77undf-0")
        name = self.clear_text(name_raw.get_text())

        if name in self.banned_names:
            return

        image_raw = pizza_main.find("picture").find_all("source")[1]
        image_url = self.clear_text(image_raw.get("srcset")).split(" ")[0]
        image_ext = image_url.split(".")[-1]
        image_path = self.download_image(image_url, image_ext, slugify(name, True))

        pizza_main.find("picture").decompose()
        pizza_main.find("div").decompose()

        ingredients = self.clear_text(pizza_main.get_text()).lower().split(", ")

        price_raw = pizza_article.find("div", class_="product-control-price")
        price = self.clear_text(price_raw.get_text()).split()[1]

        pizza, _ = Pizza.objects.get_or_create(name=name, price=price, image=image_path)

        for ingredient_name in ingredients:
            if len(ingredient_name) > 32:
                continue

            ingredient = self.create_ingredient(ingredient_name)
            category = self.create_category()

            pizza.ingredients.add(ingredient)
            pizza.categories.add(category)

    def start(self):
        with open(self.parser_dir / "fixture", "r", encoding="utf-8") as f:
            content = f.read()
            soup = BeautifulSoup(content, "html.parser")

            pizza_div = soup.find_all("article", class_="eJrNNZ")

            for pizza_article in pizza_div:
                self.parse_pizza(pizza_article)


def main():
    parser = PizzaParser(PARSER_DIR, MEDIA_PIZZA_DIR, BANNED_NAMES)
    parser.start()


if __name__ == "__main__":
    main()
