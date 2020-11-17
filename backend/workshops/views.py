import os
from datetime import datetime, timedelta
from email.mime.image import MIMEImage

import pytz
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from rest_framework import filters
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from tokens.models import Token
from workshops.models import Workshop
from workshops.serializers import WorkshopSerializer

from wallet.models.accounts import Account

present = datetime.now()
present = pytz.utc.localize(present)


class ListWorkshopView(ListAPIView):
    search_fields = ['title', 'description', 'location', 'date_start']
    filter_backends = (filters.SearchFilter,)
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer

    def get_queryset(self):
        workshop = Workshop.objects.filter(date_start__gte=present).order_by('date_start')
        return workshop


class ListWorkshopByIDView(RetrieveAPIView):
    queryset = Workshop.objects.all().order_by('date_start')
    serializer_class = WorkshopSerializer
    lookup_url_kwarg = 'workshop_id'
    permission_classes = []


class ReserveWorkshopView(GenericAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    lookup_url_kwarg = 'workshop_id'
    permission_classes = []

    def post(self, request, *args, **kwargs):
        workshop = self.get_object()
        user = request.user
        if workshop in user.m2m_workshops.all():
            if workshop.date_start < present + timedelta(days=3):
                return Response(status=403, data="Sorry, you're not allowed to unregister anymore")
            else:
                user.m2m_workshops.remove(workshop)
                transactions = Account.objects.filter(owner=user)
                tokens = Token.objects.filter(employeeToken__in=transactions, status='used').order_by('created')
                balance = Account(owner=user, credit=workshop.cost, company=user.company)
                balance.save()
                for token in tokens[:workshop.cost]:
                    token.status = 'valid'
                    token.save()
                return Response(status=200,
                                data=f'You have successfully unregistered. {workshop.cost} credits have been credited back to your account')
        else:
            if user.available_credit['total_available'] - workshop.cost < 0:
                return Response(status=403,
                                data="Sorry, you don't have enough credit. Please contact your administrator")
            elif workshop.max_seats - workshop.attendees.count() <= 0:
                return Response(status=403, data="Sorry, this workshop has no available spaces anymore")
            elif workshop.date_start < present:
                return Response(status=403, data="You can't register for past events")
            else:
                user.m2m_workshops.add(workshop)
                transactions = Account.objects.filter(owner=user)
                tokens = Token.objects.filter(employeeToken__in=transactions, status='valid').order_by('created')
                balance = Account(owner=user, debit=workshop.cost, company=user.company)
                balance.save()
                for token in tokens[:workshop.cost]:
                    token.status = 'used'
                    token.save()

                msg_plain = get_template('reserve_email.txt')
                msg_html = get_template('reserve_email.html')

                context = ({
                    'first_name': user.first_name,
                    'title': workshop.title,
                    'location': workshop.location,
                    'link': workshop.link,
                    'start_date': workshop.date_start,  # to append :%B %d, %Y, %H:%M
                    'end_date': workshop.date_end,  # to append :%H:%M
                })

                email = EmailMultiAlternatives(
                    f'Registration for {workshop.title}',
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

        return Response(status=200, data=f'Thank for registering for workshop: {workshop.title}')


class ListUserRegisteredWorkshopsView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    permission_classes = []

    def get_queryset(self):
        return Workshop.objects.filter(attendees=self.request.user, date_start__gte=present).order_by('date_start')


class ListUserAttendedWorkshopsView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    permission_classes = []

    def get_queryset(self):
        return Workshop.objects.filter(attendees=self.request.user, date_start__lt=present).order_by('date_start')


class CreateWorkshopView(CreateAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    permission_classes = [IsAdminUser]


class DeleteWorkshopByIDView(DestroyAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    lookup_url_kwarg = 'workshop_id'
    permission_classes = [IsAdminUser]
