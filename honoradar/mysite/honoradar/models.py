from django.db import models
from django.utils import timezone
import datetime
from model_utils import Choices


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


class Medium(models.Model):
    mediumname = models.CharField(max_length=200)
    FESTFREI = Choices("fest","pauschal","frei")
    festfrei = models.CharField(choices=FESTFREI, default=FESTFREI.frei, max_length=10)

    def __str__(self):
        return self.mediumname

class DataCollection(models.Model):

    medium = models.ForeignKey(Medium, on_delete=models.CASCADE)
    rating_number=models.IntegerField(default=0)
    salary_number=models.IntegerField(default=0)


    position=models.CharField(default="None",max_length=200)

    ProductType=models.CharField(default="None",max_length=200)

    arbeitszeit=models.IntegerField(default=0)
    stundenProTag=models.IntegerField(default=0)
    tageProMonat=models.IntegerField(default=0)
    Zeitaufwand=models.IntegerField(default=0)
    MinutenProAudio=models.IntegerField(default=0)
    MinutenProVideo=models.IntegerField(default=0)
    ZeichenProArtikel=models.IntegerField(default=0)


    LohnProAuftrag=models.IntegerField(default=0)

    def __str__(self):
        template = '{0.salary_number} {0.rating_number} {0.arbeitszeit} {0.position} {0.ProductType}'
        return template.format(self)
