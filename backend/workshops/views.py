from datetime import datetime, timedelta
import pytz
from django.core.mail import send_mail
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

                # send_mail(
                #     f'Registration for {workshop.title}',
                #     f'Hello {user.first_name}, \n\nThank you for registering to our event!\n\n'
                #     'We’re looking forward to seeing you there.\n\n'
                #     'Here are the details: \n'
                #     f'{workshop.title}\n'
                #     f'{workshop.date_start:%B %d, %Y, %H:%M} - {workshop.date_end:%H:%M}\n'
                #     f'{workshop.location}\n\n'
                #     f'For more information go to: {workshop.link}\n\n'
                #     'Kind regards\n'
                #     'MQ Learning',
                #     'joost.motion@gmail.com',
                #     [f'{user.email}'],
                #     fail_silently=False,
                # )

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
