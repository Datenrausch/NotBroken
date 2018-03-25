# Generated by Django 2.0.2 on 2018-03-25 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('honoradar', '0003_auto_20180325_1930'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datacollection',
            name='Comment',
            field=models.CharField(default='Kein Kommentar', max_length=600, null=True),
        ),
        migrations.AlterField(
            model_name='datacollection',
            name='Experience',
            field=models.CharField(choices=[('keineAngabe', 'keineAngabe'), ('1 Jahr', '1 Jahr'), ('3 Jahre', '3 Jahre'), (' 5 Jahre', ' 5 Jahre')], default='keineAngabe', max_length=10, null=True),
        ),
    ]
