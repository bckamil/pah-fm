# Generated by Django 2.1.2 on 2019-07-10 18:33

from django.db import migrations
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        ('fleet_management', '0007_auto_20190306_1901'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='country',
            field=django_countries.fields.CountryField(default='UA', max_length=2),
            preserve_default=False,
        ),
    ]