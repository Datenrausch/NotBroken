# Generated by Django 2.0 on 2018-02-11 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('honoradar', '0004_auto_20180211_1516'),
    ]

    operations = [
        migrations.AddField(
            model_name='datacollection',
            name='jobstatus',
            field=models.CharField(choices=[('fest', 'fest'), ('pauschal', 'pauschal'), ('frei', 'frei')], default='frei', max_length=10),
        ),
    ]
