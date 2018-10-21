from django.shortcuts import get_object_or_404, render, redirect
from django.template import loader
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic
from django.core.exceptions import ValidationError
from django.contrib import messages
from django.template.defaultfilters import slugify
import datetime
from .models import *
from django.db.models import *
from django.http import JsonResponse
import math
import json
import io
from random import shuffle


def StdAvgFunction(entries, column):
    #print(column)
    #Taking all entries of a certrain column and filtering out the zeroes
    ids = list(entries.values_list(column, flat=True))
    ids=list(filter((float(0)).__ne__, ids))
    #We sort them according to their value and define the length of this list
    ids=sorted(ids)
    n = len(ids)
    median=0
    lowerboundary=0
    upperboundary=0
    #Now we calculate a median for the two or three middliest values
    #and set the lower and upperboundaries to the median, if we only have more than 2 values
    #but less than 5
    if n>2:
        if n % 2 == 0:
            median=((ids[int(n/2-1)] + ids[int(n/2)])/2.0)
        else:
            median=((ids[int(n/2-1)] + ids[int(n/2)]+ ids[int(n/2+1)])/3.0)
        lowerboundary=median
        upperboundary=median
    #if we have more than five, we take the upper three and the lower three values to calculate
    # a lower and upper boundary
    if n>5:
        lowerboundary=((ids[int(0)] + ids[int(1)]+ ids[int(2)])/3.0)
        upperboundary=((ids[int(n-1)] + ids[int(n-2)]+ ids[int(n-3)])/3.0)

    if n>30:
        percentile=n//10
        lowerboundary=0
        upperboundary=0
        for i in range(percentile+1):
            lowerboundary+=ids[int(i)]
            upperboundary+=ids[int(n-(i+1))]

        lowerboundary=lowerboundary/percentile

        upperboundary=upperboundary/percentile

    #This is an older part that calculates averages and standard deviation
    count = entries.aggregate(Count(column))
    columncount = str(column) + "__count"
    count = (count[columncount])

    #If it is more than one, we show at least an average
    if count > 1:
        avg = entries.aggregate(Avg(column))
        columnavg = str(column) + "__avg"
        #here we caluclate the average
        avg = (avg[columnavg])
        #and then the std
        count = 0
        sqdiff = 0
        for entry in entries:
            diff = (getattr(entry, column) - avg)
            sqdiff += math.pow(diff, 2)
            count += 1
        variance = sqdiff / count
        std = round(math.sqrt(variance), 2)
        result = {}
        avg = round(avg, 2)
        #finally push this all into one dictionary
        result["avg"] = avg
        result["std"] = std
        result["median"] = median
        result["upper"] = upperboundary
        result["lower"] = lowerboundary

        result["status"] = "Success"
        result["id"] = str(column)

        if (float(result["avg"]) == 0) and (float(result["std"]) == 0):
            result["status"] = "Failed"
    else:
        result["status"] = "Failed"

    return(result)

#this is the function when we want to combine two columns
def StdAvgTwoColumnsFunction(entries, column1, column2, operator):
    #first we count all the entries of the first and the second column
    count1 = entries.aggregate(Count(column1))
    columncount1 = str(column1) + "__count"
    count1 = (count1[columncount1])
    count2 = entries.aggregate(Count(column2))
    columncount2 = str(column2) + "__count"
    count2 = (count2[columncount2])
    combinelist=[]
    value=0
    n=0
    #we either divide or multiply value from column1 with value from column2 of each row
    #and create a list of these combined values
    for entry in entries:
        column1val = float(getattr(entry, str(column1)))
        column2val = float(getattr(entry, str(column2)))

        if (column1val != 0) and (column2val != 0):
            if operator == "/":
                value = (column1val / column2val)
            if operator == "*":
                value = (column1val*column2val)
            n += 1

            combinelist.append(value)

    #then we calculate the media and the upper /lowerboundary from this list of combined values
    median=0
    lowerboundary=0
    upperboundary=0
    if n>3:
        ids=sorted(combinelist)
        n = len(ids)

        if n % 2 == 0:
            #print("even values")

            median=((ids[int(n/2-2)] + ids[int(n/2-1)] + ids[int(n/2)]+ ids[int(n/2+1)])/4.0)
        else:
            #print("uneven values")

            median=((ids[int(n/2-1)] + ids[int(n/2)]+ ids[int(n/2+1)])/3.0)


        lowerboundary=median
        upperboundary=median
    if n>5:
        lowerboundary=((ids[int(0)] + ids[int(1)]+ ids[int(2)])/3.0)
        upperboundary=((ids[int(n-1)] + ids[int(n-2)]+ ids[int(n-3)])/3.0)

#this is the old average and std calculation function
    if (count1 > 1)and (count2 > 1):
        productsum = 0
        count = 0
        for entry in entries:
            column1val = float(getattr(entry, str(column1)))
            column2val = float(getattr(entry, str(column2)))
            if (column1val != 0) and (column2val != 0):
                if operator == "/":
                    productsum += (column1val / column2val)
                if operator == "*":
                    productsum += (column1val*column2val)
                count += 1
            else:
                result = {}
                result["status"] = "Failed"

        if count !=0:

            avgtwocolumns = productsum / count
            count = 0
            stdsumSQ = 0
            for entry in entries:
                column1val = getattr(entry, str(column1))
                column2val = getattr(entry, str(column2))
                if operator == "/":
                    if (column1val != 0)and (column2val != 0):
                        stdsumSQ += math.pow(((column1val / column2val)-avgtwocolumns),2)
                        count+=1
                    else:
                        product = 0
                if operator == "*":
                    stdsumSQ += math.pow(((column1val*column2val)-avgtwocolumns),2)
                    count+=1

            variance = stdsumSQ / count
            std = round(math.sqrt(variance), 2)
            #and again we create a results dictionary
            result = {}
            avgtwocolumns = round(avgtwocolumns, 2)
            result["avg"] = avgtwocolumns
            result["std"] = std
            result["median"] = median
            result["upper"] = upperboundary
            result["lower"] = lowerboundary

            result["status"] = "Success"
            if (float(result["avg"]) == 0) and (float(result["std"]) == 0):
                result = {}
                result["status"] = "Failed"


        else:
            result = {}
            result["status"] = "Failed"




    else:
        result = {}
        result["status"] = "Failed"

    return(result)

def createjson(request):
    if request.is_ajax():
        with io.open('honoradar/static/honoradar/mediumsname.json', "r") as json_file:
            oldjsondata = json.load(json_file)
            all_db_entries=Medium.objects.values("mediumname").distinct()
            for entry in all_db_entries:
                 mediumname=(entry["mediumname"])
                 newentry={"name":mediumname,"code":mediumname.title()}
                 oldjsondata.append(newentry)
                 print(mediumname)
            seen = set()
            new_l = []
            for d in oldjsondata:
                t = tuple(d.items())
                if t not in seen:
                     seen.add(t)
                     new_l.append(d)
            result={}
            result["data"]=new_l
            result["status"] = "Success"
            return JsonResponse(result)



# this entire view handles the process of sending data, checking it and saving it in the backend
def senddata(request):
    # this variable checks if all compulsory fields are filled and hence, a new instance should be created in the backend

    if request.is_ajax():

        if request.method == 'POST':
            #print(request.POST)
            sanitycheck = 0

            #we get the three categories that all entries have in common regardless of
            #freelance, pauschalist or employed
            MediumName = (request.POST.get('MediumName'))
            #print(MediumName)
            MediumName=MediumName.strip()
            FreeOrEmployed = (request.POST.get('FreeOrEmployed'))
            Comment = (request.POST.get('Comment'))
            AGB = (request.POST.get('AGB'))
            Happiness = (request.POST.get('Happiness'))
            Suspiciousentry="Ok"




            # if the mediumname or the AGB is not given, we set the sanitycheck to 1
            # and create a warning message that will pop-up



            # CHECKING WHETHER THERE ARE ALREADY ENTIRES WITH THIS MEDIUM
            try:
                mediumobj = Medium.objects.get(
                    Q(mediumname=MediumName),
                    Q(freeoremployed=FreeOrEmployed)
                )
                #MyModel.objects.filter(pk=some_value).update(field1='some value')

                mediumobj.UpDate=(datetime.datetime.now())
                mediumobj.save()
                mediumobj = Medium.objects.get(
                    Q(mediumname=MediumName),
                    Q(freeoremployed=FreeOrEmployed)
                )

                # CHECKING FOR FEST, PAUSCHAL, FREI
                # if the criteria for free or employed is "fest",
                # we get the data relevant for this case
                if FreeOrEmployed == "fest":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness = (request.POST.get("Happiness"))
                    HoursPerWeekEmp = (request.POST.get("HoursPerWeekEmp"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))

                    # check the compulsory three of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Gehalt')

                    if float(HoursPerWeekEmp) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'gearbeiteten Stunden pro Woche')

                    if float(Happiness) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Arbeitsatmosphäre')

                    if AGB == "on":
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'AGB')

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):
                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(HoursPerWeekEmp)*4)
                        SalaryPerMonth=SalaryPerHour*160
                        if ((SalaryPerHour>100) or (SalaryPerHour==0)):
                            Suspiciousentry="Weird"
                        else:
                            Suspiciousentry="Ok"
                        mediumobj.Suspiciousmedium=Suspiciousentry
                        mediumobj.save()
                        mediumobj = Medium.objects.get(
                            Q(mediumname=MediumName),
                            Q(freeoremployed=FreeOrEmployed)
                        )
                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            Happiness=float(Happiness),
                            HoursPerWeekEmp=float(HoursPerWeekEmp),
                            JobPosition=JobPosition,
                            Experience=Experience,
                            Comment=Comment,
                            Date=datetime.datetime.now(),
                            Suspiciousentry=Suspiciousentry
                        )
                    else:
                        pass

                # if the criteria for free or employed is "pauschal",
                # we get the data relevant for this case
                if FreeOrEmployed == "pauschal":
                    SalaryPerMonthEmpMix = (
                        request.POST.get('SalaryPerMonthEmpMix'))
                    DaysPerMonthMix = (request.POST.get("DaysPerMonthMix"))
                    HoursPerDayMix = (request.POST.get("HoursPerDayMix"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    Happiness = (request.POST.get("Happiness"))
                    Comment = (request.POST.get("Comment"))

                    # check the compulsory four of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Gehalt')

                    if float(DaysPerMonthMix) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'gearbeiteten Tagen pro Monat')

                    if float(HoursPerDayMix) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'gearbeiteten Stunden pro Tag')

                    if float(Happiness) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Arbeitsatmosphäre')

                    if AGB == "on":
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'AGB')


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):
                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(DaysPerMonthMix)*float(HoursPerDayMix))
                        SalaryPerMonth=SalaryPerHour*160
                        if ((SalaryPerHour>100) or (SalaryPerHour==0)):
                            Suspiciousentry="Weird"
                        else:
                            Suspiciousentry="Ok"
                        mediumobj.Suspiciousmedium=Suspiciousentry
                        mediumobj.save()
                        mediumobj = Medium.objects.get(
                            Q(mediumname=MediumName),
                            Q(freeoremployed=FreeOrEmployed)
                        )
                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            DaysPerMonthMix=float(DaysPerMonthMix),
                            HoursPerDayMix=float(HoursPerDayMix),
                            JobPosition=JobPosition,
                            Experience=Experience,
                            Happiness=float(Happiness),
                            Comment=Comment,
                            Date=datetime.datetime.now(),
                            Suspiciousentry=Suspiciousentry
                        )
                    else:
                        pass

                if FreeOrEmployed == "frei":

                    FeeFree = (request.POST.get('FeeFree'))
                    VideoAudioTextFree = (request.POST.get("VideoAudioTextFree"))
                    MinPerVideoFree = (request.POST.get("MinPerVideoFree"))
                    MinPerAudioFree = (request.POST.get("MinPerAudioFree"))
                    CharPerArticleFree = (request.POST.get("CharPerArticleFree"))
                    Genre = (request.POST.get("Genre"))
                    AnalogDigitalFree = (request.POST.get("AnalogDigitalFree"))
                    JobPosition = (request.POST.get("JobPosition"))
                    HoursSpentFree = (request.POST.get("HoursSpentFree"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    Happiness = (request.POST.get("Happiness"))
                    Comment = (request.POST.get("Comment"))

                    # check the compulsory four of them and send warning if they are missing
                    if FeeFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Honorar')


                    if VideoAudioTextFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Format des Mediums')


                    if VideoAudioTextFree == "video":
                        if float(MinPerVideoFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Beitragsminuten für den Videobeitrag')

                    if VideoAudioTextFree == "audio":
                        if float(MinPerAudioFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Beitragsminuten für den Audiobeitrag')

                    if VideoAudioTextFree == "text":
                        if float(CharPerArticleFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Anzahl an Zeichen für den Artikel')

                    if float(HoursSpentFree) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Zeitaufwand')

                    if float(Happiness) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Arbeitsatmosphäre')

                    if AGB == "on":
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'AGB')

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):
                        SalaryPerHour=float(FeeFree)/float(HoursSpentFree)
                        SalaryPerMonth=SalaryPerHour*160
                        if ((SalaryPerHour>100) or (SalaryPerHour==0)):
                            Suspiciousentry="Weird"
                        if (CharPerArticleFree is not None):
                            print("Loop")
                            if float(FeeFree)/float(CharPerArticleFree)>0.15:
                                Suspiciousentry="Weird"
                                print("Weird Zeilensatz")
                        else:
                            Suspiciousentry="Ok"
                        mediumobj.Suspiciousmedium=Suspiciousentry
                        mediumobj.save()
                        mediumobj = Medium.objects.get(
                            Q(mediumname=MediumName),
                            Q(freeoremployed=FreeOrEmployed)
                        )
                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            FeeFree=float(FeeFree),
                            VideoAudioTextFree=str(VideoAudioTextFree),
                            MinPerAudioFree=float(MinPerAudioFree),
                            MinPerVideoFree=float(MinPerVideoFree),
                            CharPerArticleFree=float(CharPerArticleFree),
                            Genre=Genre,
                            AnalogDigitalFree=AnalogDigitalFree,
                            JobPosition=JobPosition,
                            HoursSpentFree=float(HoursSpentFree),
                            Experience=Experience,
                            Happiness=float(Happiness),
                            Comment=Comment,
                            Date=datetime.datetime.now(),
                            Suspiciousentry=Suspiciousentry
                        )

            except Medium.DoesNotExist:
                if FreeOrEmployed == "fest":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness = (request.POST.get("Happiness"))
                    HoursPerWeekEmp = (request.POST.get("HoursPerWeekEmp"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))

                    # check the compulsory three of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Gehalt')

                    if float(HoursPerWeekEmp)!=1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'gearbeiteten Stunden pro Woche')


                    if float(Happiness) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Arbeitsatmosphäre')

                    if AGB == "on":
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'AGB')

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):

                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(HoursPerWeekEmp)*4)
                        SalaryPerMonth=SalaryPerHour*160
                        if ((SalaryPerHour>100) or (SalaryPerHour==0)):
                            Suspiciousentry="Weird"
                        else:
                            Suspiciousentry="Ok"
                        mediumobj = Medium(
                            mediumname=MediumName,
                            freeoremployed=FreeOrEmployed,
                            UpDate=datetime.datetime.now(),
                            Suspiciousmedium=Suspiciousentry)
                        mediumobj.save()
                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            Happiness=float(Happiness),
                            HoursPerWeekEmp=float(HoursPerWeekEmp),
                            JobPosition=JobPosition,
                            Experience=Experience,
                            Comment=Comment,
                            Date=datetime.datetime.now(),
                            Suspiciousentry=Suspiciousentry

                        )

                if FreeOrEmployed == "pauschal":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    DaysPerMonthMix = (request.POST.get("DaysPerMonthMix"))
                    HoursPerDayMix = (request.POST.get("HoursPerDayMix"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    Happiness = (request.POST.get("Happiness"))
                    Comment = (request.POST.get("Comment"))
                    # check the compulsory four of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Gehalt')

                    if float(DaysPerMonthMix) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'gearbeiteten Tagen pro Monat')

                    if float(HoursPerDayMix) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'gearbeiteten Stunden pro Tag')

                    if float(Happiness) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Arbeitsatmosphäre')

                    if AGB == "on":
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'AGB')


                    SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(DaysPerMonthMix)*float(HoursPerDayMix))
                    SalaryPerMonth=SalaryPerHour*160
                    if(sanitycheck == 0):

                        if ((SalaryPerHour>100) or (SalaryPerHour==0)):
                            Suspiciousentry="Weird"
                        else:
                            Suspiciousentry="Ok"
                        mediumobj = Medium(
                            mediumname=MediumName,
                            freeoremployed=FreeOrEmployed,
                            UpDate=datetime.datetime.now(),
                            Suspiciousmedium=Suspiciousentry)
                        mediumobj.save()

                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(DaysPerMonthMix)*float(HoursPerDayMix))
                        SalaryPerMonth=SalaryPerHour*160

                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            DaysPerMonthMix=float(DaysPerMonthMix),
                            HoursPerDayMix=float(HoursPerDayMix),
                            JobPosition=str(JobPosition),
                            Experience=str(Experience),
                            Happiness=float(Happiness),
                            Comment=str(Comment),
                            Date=datetime.datetime.now(),
                            Suspiciousentry=Suspiciousentry

                        )

                if FreeOrEmployed == "frei":
                    FeeFree = (request.POST.get('FeeFree'))
                    VideoAudioTextFree = (request.POST.get("VideoAudioTextFree"))
                    Genre = (request.POST.get("Genre"))
                    AnalogDigitalFree = (request.POST.get("AnalogDigitalFree"))
                    JobPosition = (request.POST.get("JobPosition"))
                    HoursSpentFree = (request.POST.get("HoursSpentFree"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    Happiness = (request.POST.get("Happiness"))
                    Comment = (request.POST.get("Comment"))
                    CharPerArticleFree = (request.POST.get("CharPerArticleFree"))
                    MinPerAudioFree = (request.POST.get("MinPerAudioFree"))
                    MinPerVideoFree = (request.POST.get("MinPerVideoFree"))


                    # check the compulsory four of them and send warning if they are missing
                    if FeeFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Honorar')


                    if VideoAudioTextFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Format des Mediums')


                    if VideoAudioTextFree == "video":
                        if float(MinPerVideoFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Beitragsminuten für den Videobeitrag')

                    if VideoAudioTextFree == "audio":
                        if float(MinPerAudioFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Beitragsminuten für den Audiobeitrag')

                    if VideoAudioTextFree == "text":
                        if float(CharPerArticleFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Anzahl an Zeichen')

                    if float(HoursSpentFree) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Zeitaufwand')

                    if float(Happiness) != 1:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Arbeitsatmosphäre')

                    if AGB == "on":
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'AGB')


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):

                        SalaryPerHour=float(FeeFree)/float(HoursSpentFree)
                        SalaryPerMonth=SalaryPerHour*160
                        if ((SalaryPerHour>100) or (SalaryPerHour==0)):
                            Suspiciousentry="Weird"
                        if (CharPerArticleFree is not None):
                            print("Loop")
                            if float(FeeFree)/float(CharPerArticleFree)>0.15:
                                Suspiciousentry="Weird"
                                print("Weird Zeilensatz")

                        else:
                            Suspiciousentry="Ok"
                        mediumobj = Medium(
                            mediumname=MediumName,
                            freeoremployed=FreeOrEmployed,
                            UpDate=datetime.datetime.now(),
                            Suspiciousmedium=Suspiciousentry)
                        mediumobj.save()
                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            FeeFree=float(FeeFree),
                            VideoAudioTextFree=str(VideoAudioTextFree),
                            MinPerAudioFree=float(MinPerAudioFree),
                            MinPerVideoFree=float(MinPerVideoFree),
                            CharPerArticleFree=float(CharPerArticleFree),
                            Genre=Genre,
                            AnalogDigitalFree=AnalogDigitalFree,
                            JobPosition=JobPosition,
                            HoursSpentFree=float(HoursSpentFree),
                            Experience=Experience,
                            Happiness=float(Happiness),
                            Comment=Comment,
                            Date=datetime.datetime.now(),
                            Suspiciousentry=Suspiciousentry

                        )
        testdict = {}
        counter = 0

        #we prepare the dictionary of messages to be displayed
        for i in list(messages.get_messages(request)):
            bla = str(i)
            testdict["message" + str(counter)] = bla
            counter += 1

        return JsonResponse(testdict)
    else:
        print("Something went wrong")

#this is used to get the data from the backend
def getdata(request):
    #we check if the request is ajax
    if request.is_ajax():
        #and retrieve the mediumname from the request
        MediumName = (request.GET.get('mediumget'))
        MediumName = MediumName.strip()
        #then we open the json with all media names and change the mediumname
        #with the coded mediumname of the json, if it exists to use the same coded
        #even if user input differs
        MediumNoDataAtAll={}
        with io.open('honoradar/static/honoradar/mediumsname.json', "r") as json_file:
            oldjsondata = json.load(json_file)
            MediumNoDataAtAll={"nodata":"Vertippt?"}
            for p in oldjsondata:
                if p['name']==MediumName:
                    mediumcode=p['code']
                    MediumName=mediumcode
                    MediumNoDataAtAll={"nodata":"Es gibt keine Daten"}





        Mediumdict={'mediumname': MediumName}
        MediumFestContext={}
        MediumPauschalContext={}
        MediumFreiContext={}

        #we check how many entries for the medium exist in the DB and whether it was flagged as fair
        DoesMediumExist=DataCollection.objects.filter(Medium__mediumname=MediumName)
        mediumoverallcount=DoesMediumExist.count()
        FairnessCheck=Medium.objects.filter(mediumname=MediumName)
        FairnessCount=FairnessCheck.filter(fairness='Ja').count()
        HimmelCount=FairnessCheck.filter(fairness='Himmel').count()
        HoelleCount=FairnessCheck.filter(fairness='Hoelle').count()

        mediumoverallcount_dict={"mediumoverallcount":mediumoverallcount,"FairnessCount":FairnessCount, "HimmelCount":HimmelCount,"HoelleCount":HoelleCount}
        #we then update our mediumdict with this information
        Mediumdict.update(mediumoverallcount_dict)

        #if we have no entries for this medium, we add MediumNoDataAtAll to the dictionary
        if (DoesMediumExist.count())==0:
            Mediumdict.update(MediumNoDataAtAll)



        #retrieves all entries for this medium and fest VS all entries for mediums with category fest
        MediumFest=DataCollection.objects.filter(Medium__mediumname=MediumName, Medium__freeoremployed="fest")
        AllFest=DataCollection.objects.filter(Medium__freeoremployed="fest")
        mediumfestcount=MediumFest.count()

        #if we have more than two entries for this medium in this category we use the StdAvgFunctions
        #to get the results for these categories and then push it to the dictionaries
        if ((MediumFest.count()) > 2):

            MediumFestSalaryPerHour = StdAvgFunction(MediumFest, 'SalaryPerHour')
            MediumFestSalaryPerMonth= StdAvgFunction(MediumFest, 'SalaryPerMonth')
            MediumFestHoursPerWeekEmp = StdAvgFunction(MediumFest, 'HoursPerWeekEmp')
            MediumFestHappiness = StdAvgFunction(MediumFest, 'Happiness')

            AllFestSalaryPerHour = StdAvgFunction(AllFest, 'SalaryPerHour')
            AllFestSalaryPerMonth= StdAvgFunction(AllFest, 'SalaryPerMonth')
            AllFestHoursPerWeekEmp = StdAvgFunction(AllFest, 'HoursPerWeekEmp')
            AllFestHappiness = StdAvgFunction(AllFest, 'Happiness')

            MediumFestContext = {
                    "mediumfestcount":mediumfestcount,
                       "MediumFestSalaryPerHour": MediumFestSalaryPerHour,
                       "MediumFestSalaryPerMonth":MediumFestSalaryPerMonth,
                       "MediumFestHoursPerWeekEmp": MediumFestHoursPerWeekEmp,
                       "MediumFestHappiness": MediumFestHappiness,

                       "AllFestSalaryPerHour":AllFestSalaryPerHour,
                       "AllFestSalaryPerMonth":AllFestSalaryPerMonth,
                       "AllFestHoursPerWeekEmp":AllFestHoursPerWeekEmp,
                       "AllFestHappiness":AllFestHappiness,
                       }
            Mediumdict.update(MediumFestContext)


        #similar procedure for pauschal
        MediumPauschal=DataCollection.objects.filter(Medium__mediumname=MediumName, Medium__freeoremployed="pauschal")
        AllPauschal=DataCollection.objects.filter(Medium__freeoremployed="pauschal")
        mediumpauschalcount=MediumPauschal.count()

        if ((MediumPauschal.count()) > 2):
            MediumPauschalSalaryPerHour = StdAvgFunction(MediumPauschal, 'SalaryPerHour')
            MediumPauschalSalaryPerMonth = StdAvgFunction(MediumPauschal, 'SalaryPerMonth')
            MediumPauschalDaysPerMonthMix = StdAvgFunction(MediumPauschal, 'DaysPerMonthMix')
            MediumPauschalHoursPerDayMix = StdAvgFunction(MediumPauschal, 'HoursPerDayMix')
            MediumPauschalHoursPerMonth = StdAvgTwoColumnsFunction(MediumPauschal, 'DaysPerMonthMix', 'HoursPerDayMix',"*")
            MediumPauschalHappiness = StdAvgFunction(MediumPauschal, 'Happiness')

            AllPauschalSalaryPerHour = StdAvgFunction(AllPauschal, 'SalaryPerHour')
            AllPauschalSalaryPerMonth = StdAvgFunction(AllPauschal, 'SalaryPerMonth')
            AllPauschalDaysPerMonthMix = StdAvgFunction(AllPauschal, 'DaysPerMonthMix')
            AllPauschalHoursPerDayMix = StdAvgFunction(AllPauschal, 'HoursPerDayMix')
            AllPauschalHoursPerMonth = StdAvgTwoColumnsFunction(AllPauschal, 'DaysPerMonthMix', 'HoursPerDayMix',"*")
            AllPauschalHappiness = StdAvgFunction(AllPauschal, 'Happiness')


            MediumPauschalContext = {
            "mediumpauschalcount":mediumpauschalcount,
            "MediumPauschalSalaryPerHour": MediumPauschalSalaryPerHour,
            "MediumPauschalSalaryPerMonth":MediumPauschalSalaryPerMonth,
            "MediumPauschalDaysPerMonthMix": MediumPauschalDaysPerMonthMix,
            "MediumPauschalHoursPerDayMix": MediumPauschalHoursPerDayMix,
            "MediumPauschalHoursPerMonth": MediumPauschalHoursPerMonth,
            "MediumPauschalHappiness": MediumPauschalHappiness,

            "AllPauschalSalaryPerHour": AllPauschalSalaryPerHour,
            "AllPauschalSalaryPerMonth":AllPauschalSalaryPerMonth,
            "AllPauschalDaysPerMonthMix": AllPauschalDaysPerMonthMix,
            "AllPauschalHoursPerDayMix": AllPauschalHoursPerDayMix,
            "AllPauschalHoursPerMonth": AllPauschalHoursPerMonth,
            "AllPauschalHappiness": AllPauschalHappiness,
                       }
            Mediumdict.update(MediumPauschalContext)

        #similar procedure for frei
        MediumFrei=DataCollection.objects.filter(Medium__mediumname=MediumName, Medium__freeoremployed="frei")
        AllFrei=DataCollection.objects.filter(Medium__freeoremployed="frei")
        mediumfreicount=MediumFrei.count()

        if ((MediumFrei.count()) > 2):


            MediumFreiSalaryPerHour = StdAvgFunction(MediumFrei, 'SalaryPerHour')
            MediumFreiSalaryPerMonth = StdAvgFunction(MediumFrei, 'SalaryPerMonth')
            MediumFreiFeeFree = StdAvgFunction(MediumFrei, 'FeeFree')
            MediumFreiHoursSpentFree = StdAvgFunction(MediumFrei, 'HoursSpentFree')
            MediumFreiMinPerVideoFree =StdAvgFunction(MediumFrei, 'MinPerVideoFree')
            MediumFreiVideoFeePerMin = StdAvgTwoColumnsFunction(MediumFrei, 'FeeFree', 'MinPerVideoFree',"/")
            MediumFreiMinPerAudioFree=StdAvgFunction(MediumFrei, 'MinPerAudioFree')
            MediumFreiAudioFeePerMin = StdAvgTwoColumnsFunction(MediumFrei, 'FeeFree', 'MinPerAudioFree',"/")
            MediumFreiCharPerArticleFree=StdAvgFunction(MediumFrei, 'CharPerArticleFree')
            MediumFreiArticleFeePerChar = StdAvgTwoColumnsFunction(MediumFrei, 'FeeFree', 'CharPerArticleFree',"/")
            MediumFreiHappiness = StdAvgFunction(MediumFrei, 'Happiness')

            AllFreiSalaryPerHour = StdAvgFunction(AllFrei, 'SalaryPerHour')
            AllFreiSalaryPerMonth = StdAvgFunction(AllFrei, 'SalaryPerMonth')
            AllFreiFeeFree = StdAvgFunction(AllFrei, 'FeeFree')
            AllFreiHoursSpentFree = StdAvgFunction(AllFrei, 'HoursSpentFree')
            AllFreiMinPerVideoFree =StdAvgFunction(AllFrei, 'MinPerVideoFree')
            AllFreiVideoFeePerMin = StdAvgTwoColumnsFunction(AllFrei, 'FeeFree', 'MinPerVideoFree',"/")
            AllFreiMinPerAudioFree=StdAvgFunction(AllFrei, 'MinPerAudioFree')
            AllFreiAudioFeePerMin = StdAvgTwoColumnsFunction(AllFrei, 'FeeFree', 'MinPerAudioFree',"/")
            AllFreiCharPerArticleFree=StdAvgFunction(AllFrei, 'CharPerArticleFree')
            AllFreiArticleFeePerChar = StdAvgTwoColumnsFunction(AllFrei, 'FeeFree', 'CharPerArticleFree',"/")
            AllFreiHappiness = StdAvgFunction(AllFrei, 'Happiness')


            MediumFreiContext = {
            'mediumname': MediumName,
            "mediumfreicount":mediumfreicount,
            "MediumFreiSalaryPerHour": MediumFreiSalaryPerHour,
            "MediumFreiSalaryPerMonth":MediumFreiSalaryPerMonth,
            "MediumFreiFeeFree": MediumFreiFeeFree,
            "MediumFreiHoursSpentFree": MediumFreiHoursSpentFree,
            "MediumFreiMinPerVideoFree": MediumFreiMinPerVideoFree,
            "MediumFreiVideoFeePerMin":MediumFreiVideoFeePerMin,
            "MediumFreiMinPerAudioFree": MediumFreiMinPerAudioFree,
            "MediumFreiAudioFeePerMin":MediumFreiAudioFeePerMin,
            "MediumFreiCharPerArticleFree": MediumFreiCharPerArticleFree,
            "MediumFreiArticleFeePerChar":MediumFreiArticleFeePerChar,
            "MediumFreiHappiness": MediumFreiHappiness,

            "AllFreiSalaryPerHour": AllFreiSalaryPerHour,
            "AllFreiSalaryPerMonth":AllFreiSalaryPerMonth,
            "AllFreiFeeFree": AllFreiFeeFree,
            "AllFreiHoursSpentFree": AllFreiHoursSpentFree,
            "AllFreiMinPerVideoFree": AllFreiMinPerVideoFree,
            "AllFreiVideoFeePerMin":AllFreiVideoFeePerMin,
            "AllFreiMinPerAudioFree": AllFreiMinPerAudioFree,
            "AllFreiAudioFeePerMin":AllFreiAudioFeePerMin,
            "AllFreiCharPerArticleFree": AllFreiCharPerArticleFree,
            "AllFreiArticleFeePerChar":AllFreiArticleFeePerChar,
            "AllFreiHappiness": AllFreiHappiness,

                       }

            Mediumdict.update(MediumFreiContext)

        #now retrieving the comments for frei, pauschal and fest for this medium
        AllMedium=DataCollection.objects.filter(Medium__mediumname=MediumName)
        comments = list(AllMedium.values_list("Comment", flat=True))
        comments = list(filter(None, comments))
        comments=list(filter(lambda a:a != "Kein Kommentar",comments))


        #if there are no comments we do nothing
        if len(comments)==0:
            pass
        #if there are comments, we shuffle them
        if len(comments)>0:
            shuffle(comments)
        #if the length is over 8, then we keep on popping comments
        while (len(comments))>8:
            comments.pop()

        #adding these comments to the dictionary
        MediumComments={"MediumComments":comments}
        Mediumdict.update(MediumComments)

        #If Neither of the categories is above three
        if ((MediumFest.count() < 3) and (MediumPauschal.count() < 3) and (MediumFrei.count() < 3)):
            Wenigeralsdrei={"drei":"Weniger als drei"}
            Mediumdict.update(Wenigeralsdrei)
            print("here")

        #Gets Gegendarstellungen for the medium and update the dictionar with this
        Gegendarstellung=list(AllMedium.values_list("Gegendarstellung", flat=True))
        Gegendarstellung = list(filter(None, Gegendarstellung))
        print("Gegendarstellung:", Gegendarstellung)
        MediumGegendarstellung={"MediumGegendarstellung":Gegendarstellung}
        Mediumdict.update(MediumGegendarstellung)

        #and finally return the JSON
        return JsonResponse(Mediumdict)

    else:
        pass

#this view defines the index
class IndexView(generic.ListView):
    model=DataCollection
    template_name = 'honoradar/index.html'

    def get_context_data(self, **context):
        #gets all entries and all distinc mediumnames and passes this as context to the tempate
        entriesno = DataCollection.objects.count()
        model=Medium
        mediumno=Medium.objects.values("mediumname").distinct().count()

        print("success")
        #print("entriesno:",entriesno,"mediumno:",mediumno)
        context["entriesno"] = entriesno
        context["mediumno"] = mediumno

        return context
