from django.db import models
from django.utils import timezone
import datetime
from model_utils import Choices




class Medium(models.Model):
    mediumname = models.CharField(max_length=200)
    FREEOREMPLOYED = Choices("fest","pauschal","frei")
    freeoremployed = models.CharField(choices=FREEOREMPLOYED, default=FREEOREMPLOYED.frei, max_length=10)
    UpDate = models.DateTimeField(default=datetime.datetime.now, blank=True)

    def __str__(self):
        return self.mediumname

class DataCollection(models.Model):
    Date = models.DateTimeField(default=datetime.datetime.now, blank=True)
    Medium = models.ForeignKey(Medium, on_delete=models.CASCADE)
    Happiness=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    SalaryPerMonthEmpMix=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    FeeFree=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    SalaryPerHour=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    SalaryPerMonth=models.DecimalField(default=0, max_digits=10, decimal_places=3)


    #Have to change into buttons
    JobPosition=models.CharField(default="None",max_length=200,blank=True)
    EXPERIENCE = Choices("keineAngabe","1 Jahr","3 Jahre"," 5 Jahre")
    Experience = models.CharField(choices=EXPERIENCE, default=EXPERIENCE.keineAngabe, max_length=20, null=True,blank=True)

    HoursPerWeekEmp=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    HoursSpentFree=models.DecimalField(default=0, max_digits=10, decimal_places=3)

    HoursPerDayMix=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    DaysPerMonthMix=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    Genre=models.CharField(default="None",max_length=200,  null=True,blank=True)

    VATF = Choices("keineAngabe","text","audio"," video")
    VideoAudioTextFree = models.CharField(choices=VATF, default=VATF.keineAngabe, max_length=200, null=True,blank=True)
    ANALOGDIGITAL = Choices("keineAngabe","Analog","Digital","Analog & Digital")
    AnalogDigitalFree = models.CharField(choices=ANALOGDIGITAL, default=ANALOGDIGITAL.keineAngabe, max_length=200, null=True,blank=True)


    MinPerAudioFree=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    MinPerVideoFree=models.DecimalField(default=0, max_digits=10, decimal_places=3)
    CharPerArticleFree=models.DecimalField(default=0, max_digits=10, decimal_places=3)

    Comment=models.TextField(default="Kein Kommentar",max_length=600, null=True,blank=True)
    FAIRNESS = Choices("keineAngabe","Ja")
    fairness = models.CharField(choices=FAIRNESS, default="", max_length=20, null=True,blank=True)



    def __str__(self):
        template = '{0.SalaryPerMonthEmpMix} {0.Happiness} {0.HoursPerWeekEmp}{0.Genre}'
        return template.format(self)
