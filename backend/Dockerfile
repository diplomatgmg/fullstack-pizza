FROM python:3.12-slim as base

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /project/backend


COPY requirements/base.txt ./
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r base.txt
COPY . .



# Local
FROM base as local

ENV DJANGO_SETTINGS_MODULE=core.settings.local

RUN pip install --no-cache-dir -r requirements/local.txt



# Production
FROM base as production

ENV DJANGO_SETTINGS_MODULE=core.settings.production

RUN pip install --no-cache-dir -r requirements/production.txt
