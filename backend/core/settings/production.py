from .base import *


SECRET_KEY = os.getenv("SECRET_KEY")
DEBUG = False

ALLOWED_HOSTS = [
    "fullstack-pizza.up.railway.app",
]

CORS_ALLOWED_ORIGINS = [
    "https://fullstack-pizza.vercel.app",
]

CSRF_TRUSTED_ORIGINS = [
    "https://fullstack-pizza.vercel.app",
]

# whitenoise должен находиться после django.middleware.security.SecurityMiddleware
MIDDLEWARE.insert(1, "whitenoise.middleware.WhiteNoiseMiddleware")

SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_SECONDS = 3600

SESSION_COOKIE_SECURE = True

CSRF_COOKIE_DOMAIN = "fullstack-pizza.up.railway.app"
CSRF_COOKIE_SECURE = True

USE_X_FORWARDED_HOST = True
SECURE_PROXY_SSL_HEADER = ("X-FORWARDED-PROTO", "https")

SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_PRELOAD = True
SECURE_SSL_REDIRECT = True
