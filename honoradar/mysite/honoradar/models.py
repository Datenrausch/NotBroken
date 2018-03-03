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
    FREEOREMPLOYED = Choices("fest","pauschal","frei")
    freeoremployed = models.CharField(choices=FREEOREMPLOYED, default=FREEOREMPLOYED.frei, max_length=10)

    def __str__(self):
        return self.mediumname

class DataCollection(models.Model):

    Medium = models.ForeignKey(Medium, on_delete=models.CASCADE)
    Happiness=models.IntegerField(default=0)
    SalaryPerMonthEmpMix=models.IntegerField(default=0)
    FeeFree=models.IntegerField(default=0)

    #Have to change into buttons
    JobPosition=models.CharField(default="None",max_length=200)
    EXPERIENCE = Choices("keineAngabe","1 Jahr","3 Jahre"," 5 Jahre")
    Experience = models.CharField(choices=EXPERIENCE, default=EXPERIENCE.keineAngabe, max_length=10)

    HoursPerWeekEmp=models.IntegerField(default=0)
    HoursSpentFree=models.IntegerField(default=0)

    HoursPerDayMix=models.IntegerField(default=0)
    DaysPerMonthMix=models.IntegerField(default=0)
    Genre=models.CharField(default="None",max_length=200)
    MinPerAudioFree=models.IntegerField(default=0)
    MinPerVideoFree=models.IntegerField(default=0)
    CharPerArticleFree=models.IntegerField(default=0)

    Comment=models.CharField(default="Kein Kommentar",max_length=600)



    def __str__(self):
        template = '{0.SalaryPerMonthEmpMix} {0.Happiness} {0.HoursPerWeekEmp}{0.Genre}'
        return template.format(self)
