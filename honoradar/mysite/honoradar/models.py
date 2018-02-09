from django.db import models
from django.utils import timezone
import datetime


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
        was_published_recently.admin_order_field = 'pub_date'
        was_published_recently.boolean = True
        was_published_recently.short_description = 'Published recently?'
    list_filter = ['pub_date']
    search_fields = ['question_text']

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text

class form(models.Model):
    pass


class Medium(models.Model):
    form = models.ForeignKey(form, on_delete=models.CASCADE)
    medium_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    list_filter = ['pub_date']
    search_fields = ['medium_text']
    pass

class Salary(models.Model):
    form = models.ForeignKey(form, on_delete=models.CASCADE)
    salary_number=models.IntegerField()

class Rating(models.Model):
    form = models.ForeignKey(form, on_delete=models.CASCADE)
    salary_number=models.IntegerField()
