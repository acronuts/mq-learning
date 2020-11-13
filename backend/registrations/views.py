from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail

from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import RegistrationProfile, PasswordReset

from users.serializers import UserSerializer

from companies.models import Company

User = get_user_model()


class RegistrationView(GenericAPIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        email = request.data['email']
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        company = None
        request = Company.objects.filter(name__icontains=request.data['company'])
        if request:
            company = request[0]
        new_user = User(email=email, username=email, first_name=first_name, last_name=last_name, company=company,
                        is_active=False)
        new_user.save()
        registration = RegistrationProfile(user=new_user)
        registration.save()

        # send_mail(
        #     'Validation code MQ learning',
        #     f'Hello {new_user.first_name} {new_user.last_name},\n\n'
        #     f'Please use the following code to validate your email address: {registration.code}.\n\n'
        #     f'Thank you for joining MQ Learning',
        #     'joost.motion@gmail.com',
        #     [f'{new_user.email}'],
        #     fail_silently=False,
        # )

        return Response(status=200)


class ValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']
        try:
            check_validation = RegistrationProfile.objects.get(code=code, user__email=email, code_used=False)
            check_validation.user.set_password(request.data['password'])
            check_validation.code_used = True
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)
        except ObjectDoesNotExist:
            return Response(status=404, data=f'This code {code} is not valid with {email}')


class PasswordResetView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        email = request.data['email']
        user = User.objects.get(email=email)
        pw_reset = PasswordReset(email=email)
        pw_reset.save()

        # send_mail(
        #     'Password reset MQ learning',
        #     f'Hello {user.first_name} {user.last_name},\n\n'
        #     f'Please use the following code to revalidate your email address again: {pw_reset.code}.\n\n'
        #     'Thank you for joining MQ Learning',
        #     'joost.motion@gmail.com',
        #     [f'{user.email}'],
        #     fail_silently=False,
        # )

        return Response(status=200)


class PasswordResetValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']
        try:
            check_validation = PasswordReset.objects.get(code=code, email=email, code_used=False)
            user = User.objects.get(email=email)
            user.set_password(request.data['password'])
            check_validation.code_used = True
            check_validation.save()
            user.save()
            return Response(status=200, data={'validation': 'Validated'})
        except ObjectDoesNotExist:
            return Response(status=404, data=f'This code {code} is not valid with {email}')
