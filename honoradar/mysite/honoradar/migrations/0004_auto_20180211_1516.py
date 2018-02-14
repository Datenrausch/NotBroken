# Generated by Django 2.0 on 2018-02-11 15:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('honoradar', '0003_auto_20180211_1018'),
    ]

    operations = [
        migrations.CreateModel(
            name='DataCollection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('salary_number', models.IntegerField(default=0)),
                ('rating_number', models.IntegerField(default=0)),
                ('medium', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='honoradar.Medium')),
            ],
        ),
        migrations.RemoveField(
            model_name='rating',
            name='medium',
        ),
        migrations.RemoveField(
            model_name='salary',
            name='medium',
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
        migrations.DeleteModel(
            name='Salary',
        ),
    ]