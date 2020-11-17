import os
from email.mime.image import MIMEImage

from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template

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

        msg_plain = get_template('registration_email.txt')
        msg_html = get_template('registration_email.html')

        context = ({
            'first_name': new_user.first_name,
            'last_name': new_user.last_name,
            'code': registration.code
        })

        email = EmailMultiAlternatives(
            'Validation code MQ learning',
            msg_plain.render(context),
            'joost.motion@gmail.com',
            [f'{new_user.email}']
        )
        email.attach_alternative(msg_html.render(context), "text/html")
        email.mixed_subtype = 'related'

        for f in ['mq-logo.jpg']:
            fp = open(os.path.join(os.path.dirname('/backend/templates/'), f), 'rb')
            email_img = MIMEImage(fp.read())
            fp.close()
            email_img.add_header('Content-ID', '<{}>'.format(f))
            email.attach(email_img)

        email.send(fail_silently=False)

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

        msg_plain = get_template('validation_email.txt')
        msg_html = get_template('validation_email.html')

        context = ({
            'first_name': user.first_name,
            'last_name': user.last_name,
            'code': pw_reset.code
        })

        email = EmailMultiAlternatives(
            'Validation code MQ learning',
            msg_plain.render(context),
            'joost.motion@gmail.com',
            [f'{user.email}']
        )
        email.attach_alternative(msg_html.render(context), "text/html")
        email.mixed_subtype = 'related'

        for f in ['mq-logo.jpg']:
            fp = open(os.path.join(os.path.dirname('/backend/templates/'), f), 'rb')
            email_img = MIMEImage(fp.read())
            fp.close()
            email_img.add_header('Content-ID', '<{}>'.format(f))
            email.attach(email_img)

        email.send(fail_silently=False)

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
