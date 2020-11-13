from django.contrib import admin

from registrations.models import RegistrationProfile, PasswordReset

admin.site.register(RegistrationProfile)
admin.site.register(PasswordReset)
