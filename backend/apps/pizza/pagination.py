import math
from rest_framework import pagination
from rest_framework.response import Response


class PizzaPagination(pagination.PageNumberPagination):
    page_size = 4

    def get_paginated_response(self, data):
        total_pages = math.ceil(self.page.paginator.count / self.page_size)

        return Response({"total_pages": total_pages, "results": data})
