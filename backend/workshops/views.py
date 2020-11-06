from datetime import datetime
import pytz
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView
from rest_framework.response import Response

from workshops.models import Workshop
from workshops.serializers import WorkshopSerializer

from wallet.models.accounts import Account

present = datetime.now()
present = pytz.utc.localize(present)


class ListWorkshopView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer


class ListWorkshopByIDView(RetrieveAPIView):
    queryset = Workshop.objects.all()
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
            if workshop.date_start < present:
                return Response(status=403, data="You can't unregister from past events")
            else:
                user.m2m_workshops.remove(workshop)
                balance = Account(owner=user, credit=workshop.cost)
                balance.save()
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
                balance = Account(owner=user, debit=workshop.cost)
                balance.save()
        return Response(status=200, data=f'Thank for registering for workshop: {workshop.title}')


class ListUserRegisteredWorkshopsView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    lookup_field = 'id'
    permission_classes = []

    def get_queryset(self):
        return Workshop.objects.filter(attendees=self.kwargs['id'], date_start__gte=present)


class ListUserAttendedWorkshopsView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    lookup_field = 'id'
    permission_classes = []

    def get_queryset(self):
        return Workshop.objects.filter(attendees=self.kwargs['id'], date_start__lt=present)
