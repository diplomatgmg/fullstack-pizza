from .base import *

SECRET_KEY = "supersecretkey"
DEBUG = True

ALLOWED_HOSTS = ["*"]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

INSTALLED_APPS += [
    "debug_toolbar",
]


DEBUG_TOOLBAR_CONFIG = {
    "SHOW_TOOLBAR_CALLBACK": lambda _: True,
}


MIDDLEWARE += [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]
