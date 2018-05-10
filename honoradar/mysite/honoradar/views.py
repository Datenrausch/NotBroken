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
    ids = list(entries.values_list(column, flat=True))
    ids=list(filter((float(0)).__ne__, ids))
    ids=sorted(ids)
    n = len(ids)
    median=0
    lowerboundary=0
    upperboundary=0
    print(n)
    if n>2:
        if n % 2 == 0:
            print("even values")
            print(ids[int(n/2-1)],ids[int(n/2)])

            median=((ids[int(n/2-1)] + ids[int(n/2)])/2.0)
        else:
            print("uneven values")
            print(ids[int(n/2-1)],ids[int(n/2)],ids[int(n/2+1)])

            median=((ids[int(n/2-1)] + ids[int(n/2)]+ ids[int(n/2+1)])/3.0)

        print(column)

        print("1")
        print(ids)
        print(median)
        lowerboundary=median
        upperboundary=median
    if n>5:
        lowerboundary=((ids[int(0)] + ids[int(1)]+ ids[int(2)])/3.0)
        upperboundary=((ids[int(n-1)] + ids[int(n-2)]+ ids[int(n-3)])/3.0)
        print(lowerboundary)
        print(upperboundary)

    count = entries.aggregate(Count(column))
    columncount = str(column) + "__count"
    count = (count[columncount])

    if count > 1:
        avg = entries.aggregate(Avg(column))
        print(avg)
        columnavg = str(column) + "__avg"
        avg = (avg[columnavg])
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

        print("check")
    return(result)

            #MediumFreiArticleFeePerChar = StdAvgTwoColumnsFunction(MediumFrei, 'FeeFree', 'CharPerArticleFree',"/")

def StdAvgTwoColumnsFunction(entries, column1, column2, operator):

    count1 = entries.aggregate(Count(column1))
    columncount1 = str(column1) + "__count"
    count1 = (count1[columncount1])
    count2 = entries.aggregate(Count(column2))
    columncount2 = str(column2) + "__count"
    count2 = (count2[columncount2])
    combinelist=[]
    value=0
    print(combinelist)


    n=0
    for entry in entries:
        print(combinelist)
        column1val = float(getattr(entry, str(column1)))
        column2val = float(getattr(entry, str(column2)))
        print(column1,column2)
        print(column1val,column2val)
        if (column1val != 0) and (column2val != 0):
            if operator == "/":
                value = (column1val / column2val)
            if operator == "*":
                value = (column1val*column2val)
            n += 1
            print(combinelist)
            print(value)
            combinelist.append(value)
            print(combinelist)


    median=0
    lowerboundary=0
    upperboundary=0
    if n>3:
        ids=sorted(combinelist)
        n = len(ids)

        print(n)
        if n % 2 == 0:
            print("even values")
            print(ids[int(n/2-1)],ids[int(n/2)])

            median=((ids[int(n/2-2)] + ids[int(n/2-1)] + ids[int(n/2)]+ ids[int(n/2+1)])/4.0)
        else:
            print("uneven values")
            print(ids[int(n/2-1)],ids[int(n/2)],ids[int(n/2+1)])

            median=((ids[int(n/2-1)] + ids[int(n/2)]+ ids[int(n/2+1)])/3.0)


        print(median)
        lowerboundary=median
        upperboundary=median
    if n>5:
        lowerboundary=((ids[int(0)] + ids[int(1)]+ ids[int(2)])/3.0)
        upperboundary=((ids[int(n-1)] + ids[int(n-2)]+ ids[int(n-3)])/3.0)
        print(lowerboundary)
        print(upperboundary)


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
            print(productsum)
            print(count)
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
            print(std)
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
                print("check")


        else:
            result = {}
            result["status"] = "Failed"




    else:
        result = {}
        result["status"] = "Failed"

    return(result)


# this entire view handles the process of sending data, checking it and saving it in the backend
def senddata(request):
    # this variable checks if all compulsory fields are filled and hence, a new instance should be created in the backend
    if request.is_ajax():
        print("this is ajax")

        if request.method == 'POST':
            print("senddata")
            print(request.POST)
            sanitycheck = 0

            # we get the three categories that all entries have in common regardless of
            #freelance, pauschalist or employed
            MediumName = (request.POST.get('MediumName'))
            MediumName=MediumName.title()
            print(MediumName)
            FreeOrEmployed = (request.POST.get('FreeOrEmployed'))
            Comment = (request.POST.get('Comment'))
            print(Comment)
            AGB = (request.POST.get('AGB'))
            Happiness = (request.POST.get('Happiness'))
            print(Happiness)
            print(request.POST)

            # if the mediumname or the AGB is not given, we set the sanitycheck to 1
            # and create a warning message that will pop-up
            if MediumName:
                pass
            else:
                print("No Mediumname!!")
                sanitycheck = 1
                messages.info(request, 'Mediumname')



            # CHECKING WHETHER THERE ARE ALREADY ENTIRES WITH THIS MEDIUM
            try:
                mediumobj = Medium.objects.get(
                    Q(mediumname=MediumName),
                    Q(freeoremployed=FreeOrEmployed)
                )
                print("Found it")
                print(mediumobj)

                # CHECKING FOR FEST, PAUSCHAL, FREI
                # if the criteria for free or employed is "fest",
                # we get the data relevant for this case
                if FreeOrEmployed == "fest":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness = (request.POST.get("Happiness"))
                    HoursPerWeekEmp = (request.POST.get("HoursPerWeekEmp"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    print(request.POST)

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
                        print("No AGB!!")
                        sanitycheck = 1
                        messages.info(request, 'AGB')

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):
                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(HoursPerWeekEmp)*4)
                        SalaryPerMonth=SalaryPerHour*160

                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            Happiness=float(Happiness),
                            HoursPerWeekEmp=float(HoursPerWeekEmp),
                            JobPosition=JobPosition,
                            Experience=Experience,
                            Comment=Comment
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
                        print("No AGB!!")
                        sanitycheck = 1
                        messages.info(request, 'AGB')


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):
                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(DaysPerMonthMix)*float(HoursPerDayMix))
                        SalaryPerMonth=SalaryPerHour*160
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
                        print("No AGB!!")
                        sanitycheck = 1
                        messages.info(request, 'AGB')

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):
                        SalaryPerHour=float(FeeFree)/float(HoursSpentFree)
                        SalaryPerMonth=SalaryPerHour*160
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
                        )

            except Medium.DoesNotExist:
                if FreeOrEmployed == "fest":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness = (request.POST.get("Happiness"))
                    HoursPerWeekEmp = (request.POST.get("HoursPerWeekEmp"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    print(request.POST)

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
                        print("No AGB!!")
                        sanitycheck = 1
                        messages.info(request, 'AGB')

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):

                        SalaryPerHour=float(SalaryPerMonthEmpMix)/(float(HoursPerWeekEmp)*4)
                        SalaryPerMonth=SalaryPerHour*160
                        mediumobj = Medium(
                            mediumname=MediumName, freeoremployed=FreeOrEmployed)

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
                        print("No AGB!!")
                        sanitycheck = 1
                        messages.info(request, 'AGB')


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):

                        mediumobj = Medium(
                            mediumname=MediumName, freeoremployed=FreeOrEmployed)
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
                    print("check fails")
                    print(MinPerAudioFree)

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
                        print("No AGB!!")
                        sanitycheck = 1
                        messages.info(request, 'AGB')


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):
                        mediumobj = Medium(
                            mediumname=MediumName, freeoremployed=FreeOrEmployed)
                        mediumobj.save()
                        SalaryPerHour=float(FeeFree)/float(HoursSpentFree)
                        SalaryPerMonth=SalaryPerHour*160
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
                        )
        testdict = {}
        counter = 0
        print(MediumName)


        with io.open('honoradar/static/honoradar/mediumsname.json', "r") as json_file:
            oldjsondata = json.load(json_file)
            inthere=0
            for p in oldjsondata:
                if p['name']==MediumName:
                    inthere=1
            newentry={"name":MediumName,"code":MediumName}
            if inthere !=1:
                newjsondata=oldjsondata
                newjsondata.append(newentry)

                with io.open('honoradar/static/honoradar/mediumsname.json', 'w') as outfile:
                    data=json.dumps(newjsondata, ensure_ascii=False)
                    outfile.write(data)

        for i in list(messages.get_messages(request)):
            bla = str(i)
            testdict["message" + str(counter)] = bla
            counter += 1
        print(testdict)

        return JsonResponse(testdict)
    else:

        sanitycheck = 0

        if request.method == 'POST':
            print("senddata")
            print(request.POST)
            sanitycheck = 0

            # we get the three categories that all entries have in common regardless of
            #freelance, pauschalist or employed
            MediumName = (request.POST.get('MediumName'))
            MediumName=MediumName.title()
            print(MediumName)

            FreeOrEmployed = (request.POST.get('FreeOrEmployed'))
            Comment = (request.POST.get('Comment'))
            AGB = (request.POST.get('AGB'))
            print(request.POST)

            # if the mediumname or the AGB is not given, we set the sanitycheck to 1
            # and create a warning message that will pop-up
            if MediumName:
                pass
            else:
                print("No Mediumname!!")
                sanitycheck = 1
                messages.info(request, 'Mediumname')

            if AGB == "on":
                pass
            else:
                print("No AGB!!")
                sanitycheck = 1
                messages.info(request, 'AGB')

            # CHECKING WHETHER THERE ARE ALREADY ENTIRES WITH THIS MEDIUM
            try:
                mediumobj = Medium.objects.get(
                    Q(mediumname=MediumName),
                    Q(freeoremployed=FreeOrEmployed)
                )
                print("Found it")
                print(mediumobj)

                # CHECKING FOR FEST, PAUSCHAL, FREI
                # if the criteria for free or employed is "fest",
                # we get the data relevant for this case
                if FreeOrEmployed == "fest":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness = (request.POST.get("Happiness"))
                    HoursPerWeekEmp = (request.POST.get("HoursPerWeekEmp"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    print(request.POST)

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

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):
                        SalaryPerHour=SalaryPerMonthEmpMix/(HoursPerWeekEmp*4)
                        SalaryPerMonth=SalaryPerHour*160

                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            Happiness=float(Happiness),
                            HoursPerWeekEmp=float(HoursPerWeekEmp),
                            JobPosition=JobPosition,
                            Experience=Experience,
                            Comment=Comment
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
                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):
                        SalaryPerHour=SalaryPerMonthEmpMix/(DaysPerMonthMix*HoursPerDayMix)
                        SalaryPerMonth=SalaryPerHour*160
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
                        )
                    else:
                        pass

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

                    # check the compulsory four of them and send warning if they are missing
                    if FeeFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Honorar')

                    if float(HoursSpentFree) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Zeitaufwand')

                    if VideoAudioTextFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Format des Mediums')

                        if float(Happiness) != 1:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Arbeitsatmosphäre')

                        if AGB == "on":
                            pass
                        else:
                            print("No AGB!!")
                            sanitycheck = 1
                            messages.info(request, 'AGB')

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
                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):
                        SalaryPerHour=float(FeeFree)/float(HoursSpentFree)
                        SalaryPerMonth=SalaryPerHour*160
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
                        )

            except Medium.DoesNotExist:
                if FreeOrEmployed == "fest":
                    SalaryPerMonthEmpMix = (request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness = (request.POST.get("Happiness"))
                    HoursPerWeekEmp = (request.POST.get("HoursPerWeekEmp"))
                    JobPosition = (request.POST.get("JobPosition"))
                    Experience = (request.POST.get("ExperienceEmplMix"))
                    print(request.POST)

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


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    # if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck == 0):

                        SalaryPerHour=SalaryPerMonthEmpMix/(HoursPerWeekEmp*4)
                        SalaryPerMonth=SalaryPerHour*160
                        mediumobj = Medium(
                            mediumname=MediumName, freeoremployed=FreeOrEmployed)

                        mediumobj.save()
                        d = mediumobj.datacollection_set.create(
                            SalaryPerHour=float(SalaryPerHour),
                            SalaryPerMonth=float(SalaryPerMonth),
                            SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                            Happiness=float(Happiness),
                            HoursPerWeekEmp=float(HoursPerWeekEmp),
                            JobPosition=JobPosition,
                            Experience=Experience,
                            Comment=Comment
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

                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):

                        mediumobj = Medium(
                            mediumname=MediumName, freeoremployed=FreeOrEmployed)
                        mediumobj.save()

                        SalaryPerHour=SalaryPerMonthEmpMix/(DaysPerMonthMix*HoursPerDayMix)
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

                    if float(HoursSpentFree) != 0:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Zeitaufwand')

                    if VideoAudioTextFree:
                        pass
                    else:
                        sanitycheck = 1
                        messages.info(request, 'Format des Mediums')
                        if float(Happiness) != 1:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Arbeitsatmosphäre')

                        if AGB == "on":
                            pass
                        else:
                            print("No AGB!!")
                            sanitycheck = 1
                            messages.info(request, 'AGB')


                    if VideoAudioTextFree == "video":
                        if float(MinPerVideoFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Beitragsminuten für den Videobeitrag')
                        if float(Happiness) != 1:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Arbeitsatmosphäre')

                        if AGB == "on":
                            pass
                        else:
                            print("No AGB!!")
                            sanitycheck = 1
                            messages.info(request, 'AGB')

                    if VideoAudioTextFree == "audio":
                        if float(MinPerAudioFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Beitragsminuten für den Audiobeitrag')

                        if float(Happiness) != 1:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Arbeitsatmosphäre')

                        if AGB == "on":
                            pass
                        else:
                            print("No AGB!!")
                            sanitycheck = 1
                            messages.info(request, 'AGB')


                    if VideoAudioTextFree == "text":
                        if float(CharPerArticleFree) != 0:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Anzahl an Zeichen')

                        if float(Happiness) != 1:
                            pass
                        else:
                            sanitycheck = 1
                            messages.info(request, 'Arbeitsatmosphäre')

                        if AGB == "on":
                            pass
                        else:
                            print("No AGB!!")
                            sanitycheck = 1
                            messages.info(request, 'AGB')


                    SalaryPerHour=0
                    SalaryPerMonth=0
                    if(sanitycheck == 0):
                        mediumobj = Medium(
                            mediumname=MediumName, freeoremployed=FreeOrEmployed)
                        mediumobj.save()
                        SalaryPerHour=float(FeeFree)/float(HoursSpentFree)
                        SalaryPerMonth=SalaryPerHour*160
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
                        )
        return render(request, 'honoradar/index.html')

    #    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    # return HttpResponseRedirect(reverse('honoradar:index'))


def getdata(request):
    if request.is_ajax():
        print("this is ajax")
        MediumName = (request.GET.get('mediumget'))
        Mediumdict={'mediumname': MediumName}
        MediumFestContext={}
        MediumPauschalContext={}
        MediumFreiContext={}
        MediumNoDataAtAll={"nodata":"Es gibt keine Daten"}

        DoesMediumExist=DataCollection.objects.filter(Medium__mediumname=MediumName)
        mediumoverallcount=DoesMediumExist.count()
        mediumoverallcount_dict={"mediumoverallcount":mediumoverallcount}
        Mediumdict.update(mediumoverallcount_dict)

        if (DoesMediumExist.count())==0:
            print("this should trigger, no data at all")
            Mediumdict.update(MediumNoDataAtAll)




        MediumFest=DataCollection.objects.filter(Medium__mediumname=MediumName, Medium__freeoremployed="fest")
        AllFest=DataCollection.objects.filter(Medium__freeoremployed="fest")
        mediumfestcount=MediumFest.count()

        if ((MediumFest.count()) > 1):
            print("more than one for fest")

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
            print("Enough Data Fest")
            Mediumdict.update(MediumFestContext)



        MediumPauschal=DataCollection.objects.filter(Medium__mediumname=MediumName, Medium__freeoremployed="pauschal")
        AllPauschal=DataCollection.objects.filter(Medium__freeoremployed="pauschal")
        mediumpauschalcount=MediumPauschal.count()

        if ((MediumPauschal.count()) > 1):
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
            print("Enough Data Pauschal")

            Mediumdict.update(MediumPauschalContext)

        MediumFrei=DataCollection.objects.filter(Medium__mediumname=MediumName, Medium__freeoremployed="frei")
        AllFrei=DataCollection.objects.filter(Medium__freeoremployed="frei")
        mediumfreicount=MediumFrei.count()

        if ((MediumFrei.count()) > 1):


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

            print("Enough Data Frei")
            Mediumdict.update(MediumFreiContext)
            AllMedium=DataCollection.objects.filter(Medium__mediumname=MediumName)
            comments = list(AllMedium.values_list("Comment", flat=True))
            comments = list(filter(None, comments))
            if len(comments)==0:
                comments.append("Leider haben wir keine Kommentare für dieses Medium")
            while (len(comments))<9:
                comments.extend(comments)
            shuffle(comments)
            while (len(comments))>9:
                comments.pop()
            print(comments)
            MediumComments={"MediumComments":comments}
            Mediumdict.update(MediumComments)

        return JsonResponse(Mediumdict)



            #   return HttpResponseRedirect(reverse('honoradar:index'))
                #    return render(request, 'polls/index.html', context)



    else:
        print(request.GET)
        MediumName = (request.GET.get('mediumget'))
        FreeOrEmployed = (request.GET.get('switch'))
        print(MediumName)
        print(FreeOrEmployed)

        try:
            mediumobj = Medium.objects.get(
                Q(mediumname=MediumName),
                Q(freeoremployed=FreeOrEmployed)
            )
            print(mediumobj)
            entries = DataCollection.objects.filter(Medium=mediumobj)
            print("found")
            counter = (entries.count())
            print(counter)
            if (counter > 1):
                print("more than one")
                if FreeOrEmployed == "fest":
                    avghappiness = entries.aggregate(Avg('Happiness'))
                    avghappiness = (avghappiness['Happiness__avg'])
                    context = {'medium': mediumobj,
                               "avghappiness": avghappiness}
                    return render(request, 'honoradar/index.html', context)
            else:
                print("uns fehlen noch daten")
                return render(request, 'honoradar/index.html', context)

            #   return HttpResponseRedirect(reverse('honoradar:index'))
                #    return render(request, 'polls/index.html', context)

        except Medium.DoesNotExist:
            print("Sorry, wir haben noch keine Daten")

            return HttpResponseRedirect(reverse('honoradar:index'))


class IndexView(generic.ListView):
    template_name = 'honoradar/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'honoradar/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'honoradar/results.html'


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'honoradar/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.

        # return HttpResponseRedirect(reverse('honoradar:results', args=(question.id,)))
