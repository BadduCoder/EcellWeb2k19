# Generated by Django 2.2.2 on 2019-07-19 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mentor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, unique=True)),
                ('contact', models.TextField(blank=True, max_length=13, null=True)),
                ('email', models.CharField(max_length=256)),
                ('detail', models.TextField()),
                ('description', models.TextField(blank=True, null=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='static/uploads/mentors')),
                ('flag', models.BooleanField(default=False)),
                ('year', models.IntegerField(default=2019)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
