from django.core.management.base import BaseCommand
from utils.parser.pizza_parser import pizza_parser


class Command(BaseCommand):
    help = "Запускает парсер для пиццы"

    def handle(self, *args, **kwargs):
        try:
            self.stdout.write(self.style.NOTICE("Запуск парсера пиццы..."))
            pizza_parser.main()
            self.stdout.write(self.style.SUCCESS("Парсинг успешно выполнен"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Ошибка при выполнении парсера: {e}"))
