FROM python:3.12-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /project/backend

COPY requirements.txt ./
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000
