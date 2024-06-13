from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if not change and obj.password:
            obj.set_password(obj.password)
        super().save_model(request, obj, form, change)
