# Generated by Django 2.2.2 on 2019-07-21 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_customuser_applied'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='ca_fb_score',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='ca_li_score',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='ca_score',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='ca_tw_score',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='ca_wp_score',
            field=models.IntegerField(default=0),
        ),
    ]
