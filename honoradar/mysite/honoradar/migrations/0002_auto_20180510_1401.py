# Generated by Django 2.0.2 on 2018-05-10 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('honoradar', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datacollection',
            name='fairness',
            field=models.CharField(choices=[('keineAngabe', 'keineAngabe'), ('Ja', 'Ja')], default='', max_length=20, null=True),
        ),
    ]