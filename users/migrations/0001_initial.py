# Generated by Django 2.2.2 on 2019-07-19 09:44

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(max_length=64, unique=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=64, unique=True)),
                ('otp', models.CharField(blank=True, max_length=4, null=True)),
                ('verified', models.BooleanField(default=False)),
                ('contact', models.CharField(max_length=10)),
                ('bquiz_score', models.IntegerField(default=0)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='static/uploads/avatar')),
                ('user_type', models.CharField(choices=[('GST', 'Guest'), ('VLT', 'Voluteer'), ('EXE', 'Executive'), ('MNG', 'Manager'), ('HCO', 'Head Co-ordinator'), ('OCO', 'Overall Co-ordinator'), ('CAB', 'Campus Ambassador')], default='GST', max_length=3)),
                ('linkedin', models.URLField(blank=True, max_length=64, null=True)),
                ('facebook', models.URLField(blank=True, max_length=64, null=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('modified_at', models.DateTimeField(auto_now_add=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name_plural': 'ECellUsers',
                'verbose_name': 'ECellUser',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='CampusAmbassadorProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('college', models.CharField(max_length=128)),
                ('fb_score', models.PositiveIntegerField(default=0)),
                ('tw_score', models.PositiveIntegerField(default=0)),
                ('li_score', models.PositiveIntegerField(default=0)),
                ('wp_score', models.PositiveIntegerField(default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='campus_ambassador_profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
