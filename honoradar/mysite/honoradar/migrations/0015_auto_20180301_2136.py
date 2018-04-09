# Generated by Django 2.0.2 on 2018-03-01 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('honoradar', '0014_auto_20180219_2112'),
    ]

    operations = [
        migrations.AddField(
            model_name='datacollection',
            name='Comment',
            field=models.CharField(default='None', max_length=600),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='Experience',
            field=models.CharField(choices=[('keineAngabe', 'keineAngabe'), ('1 Jahr', '1 Jahr'), ('3 Jahre', '3 Jahre'), (' 5 Jahre', ' 5 Jahre')], default='keineAngabe', max_length=10),
        ),
    ]
