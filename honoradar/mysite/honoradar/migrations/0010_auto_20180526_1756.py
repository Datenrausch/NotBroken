# Generated by Django 2.0.2 on 2018-05-26 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('honoradar', '0009_auto_20180526_1746'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datacollection',
            name='CharPerArticleFree',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='DaysPerMonthMix',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='FeeFree',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='Happiness',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='HoursPerDayMix',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='HoursPerWeekEmp',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='HoursSpentFree',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='MinPerAudioFree',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='MinPerVideoFree',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='SalaryPerHour',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='SalaryPerMonth',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='SalaryPerMonthEmpMix',
            field=models.FloatField(default=0),
        ),
    ]
