from django.core.management.base import BaseCommand, CommandError
import requests
import shutil

from startups.models import *
from mentors.models import *
from sponsors.models import *
from events.models import *
from team.models import *
from speakers.models import *


import pickle


SPONS_TYPE = {
    'Associate Sponsors': 'ATS',
    'Platinum Sponsors': 'PLS',
    'Gold Sponsors': 'GDS',
    'Title Sponsors': 'TLS',
    'Partner Sponsors': 'PRS',
}

MEMBER_TYPE = {
    'Dir' :'DIR',
    'HCD' :'HCD',
    'Fclty' :'FCT',
    'MNG' :'MNG',
    'HC' :'HCO',
    'OC' :'OCO',
    'EXEC' :'EXC',
}


class Command(BaseCommand):
    def handle(self, *args, **options):
        appname = 'mentors'
        URL = "https://ecell.nitrr.ac.in/{}/list/".format(appname)
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://ecell.nitrr.ac.in/static/uploads/{}/'.format(
            appname)

        Mentor.objects.all().delete()
        for obj in data['mentors']:
            print(obj['name'])

            # img files
            image_location = ''
            if obj['profile_pic']:
                image_name = obj['profile_pic'].split('/').pop()
                image_location = 'static/uploads/{}/'.format(
                    appname)+image_name
                req = requests.get(obj['profile_pic'], stream=True)
                with open(image_location, 'wb') as out_file:
                    shutil.copyfileobj(req.raw, out_file)
                del req

            temp = Mentor()

            temp.name = obj['name'] 
            temp.contact = obj['contact'] 
            temp.email = obj['email'] 
            temp.detail = obj['detail'] 
            temp.description = obj['description'] 
            temp.year = obj['year'] 
            temp.profile_pic = image_location
            temp.flag = True

            temp.save()
