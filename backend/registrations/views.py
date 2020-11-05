from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import RegistrationProfile

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

        # sending email to be added

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
