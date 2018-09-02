from django.db import models
from django.utils import timezone
import datetime
from model_utils import Choices




class Medium(models.Model):
    FAIRNESS = Choices("keineAngabe","Ja","Hoelle","Himmel", "HoelleJa", "HimmelJa")
    fairness = models.CharField(choices=FAIRNESS, default="", max_length=20, null=True,blank=True)
    SUSPICIOUSMEDIUM = Choices("Ok","Weird")
    Suspiciousmedium = models.CharField(choices=SUSPICIOUSMEDIUM, default=SUSPICIOUSMEDIUM.Ok, max_length=20, null=True,blank=True)

    mediumname = models.CharField(max_length=200)
    FREEOREMPLOYED = Choices("fest","pauschal","frei")
    freeoremployed = models.CharField(choices=FREEOREMPLOYED, default=FREEOREMPLOYED.frei, max_length=10)
    UpDate = models.DateTimeField(default=datetime.datetime.now, blank=True)

    def __str__(self):
        return self.mediumname

class DataCollection(models.Model):
    Date = models.DateTimeField(default=datetime.datetime.now, blank=True)
    Medium = models.ForeignKey(Medium, on_delete=models.CASCADE)
    Happiness=models.FloatField(default=0)
    SalaryPerMonthEmpMix=models.FloatField(default=0)
    FeeFree=models.FloatField(default=0)
    SalaryPerHour=models.FloatField(default=0)
    SalaryPerMonth=models.FloatField(default=0)
    SUSPICIOUSENTRY = Choices("Ok","Weird")
    Suspiciousentry = models.CharField(choices=SUSPICIOUSENTRY, default=SUSPICIOUSENTRY.Ok, max_length=20, null=True,blank=True)



    #Have to change into buttons
    JobPosition=models.CharField(default="None",max_length=200,blank=True)
    EXPERIENCE = Choices("keineAngabe","1 Jahr","3 Jahre"," 5 Jahre")
    Experience = models.CharField(choices=EXPERIENCE, default=EXPERIENCE.keineAngabe, max_length=20, null=True,blank=True)

    HoursPerWeekEmp=models.FloatField(default=0)
    HoursSpentFree=models.FloatField(default=0)

    HoursPerDayMix=models.FloatField(default=0)
    DaysPerMonthMix=models.FloatField(default=0)
    Genre=models.CharField(default="None",max_length=200,  null=True,blank=True)

    VATF = Choices("keineAngabe","text","audio"," video")
    VideoAudioTextFree = models.CharField(choices=VATF, default=VATF.keineAngabe, max_length=200, null=True,blank=True)
    ANALOGDIGITAL = Choices("keineAngabe","Analog","Digital","Analog & Digital")
    AnalogDigitalFree = models.CharField(choices=ANALOGDIGITAL, default=ANALOGDIGITAL.keineAngabe, max_length=200, null=True,blank=True)


    MinPerAudioFree=models.FloatField(default=0)
    MinPerVideoFree=models.FloatField(default=0)
    CharPerArticleFree=models.FloatField(default=0)

    Comment=models.TextField(default="Kein Kommentar",max_length=600, null=True,blank=True)

    Gegendarstellung=models.TextField(default=None,max_length=600, null=True,blank=True)


    def __str__(self):
        template = '{0.SalaryPerMonthEmpMix} {0.Happiness} {0.HoursPerWeekEmp}{0.Genre}'
        return template.format(self)
