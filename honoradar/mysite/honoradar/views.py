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

#this entire view handles the process of sending data, checking it and saving it in the backend
def senddata(request):
    #this variable checks if all compulsory fields are filled and hence, a new instance should be created in the backend
    if request.is_ajax():
        print("this is ajax")
        print(request.POST)

        data = {
            'message': "Successfully submitted form data."
        }
        return JsonResponse(data)
    else:

        sanitycheck=0

        if request.method == 'POST':
            print("senddata")
            print(request.POST)

            #we get the three categories that all entries have in common regardless of
            #freelance, pauschalist or employed
            MediumName=(request.POST.get('MediumName'))
            FreeOrEmployed=(request.POST.get('FreeOrEmployed'))
            Comment=(request.POST.get('Comment'))
            AGB=(request.POST.get('AGB'))
            print(request.POST)


            # if the mediumname or the AGB is not given, we set the sanitycheck to 1
            #and create a warning message that will pop-up
            if MediumName:
                pass
            else:
                print("No Mediumname!!")
                sanitycheck=1
                messages.info(request, 'Medium')

            if AGB=="on":
                pass
            else:
                print("No AGB!!")
                sanitycheck=1
                messages.info(request, 'AGB fehlen')


            #CHECKING WHETHER THERE ARE ALREADY ENTIRES WITH THIS MEDIUM
            try:
                mediumobj=Medium.objects.get(
                Q(mediumname=MediumName),
                Q(freeoremployed=FreeOrEmployed)
                )
                print("Found it")
                print(mediumobj)



                #CHECKING FOR FEST, PAUSCHAL, FREI
                #if the criteria for free or employed is "fest",
                #we get the data relevant for this case
                if FreeOrEmployed=="fest":
                    SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness=(request.POST.get("Happiness"))
                    HoursPerWeekEmp=(request.POST.get("HoursPerWeekEmp"))
                    JobPosition=(request.POST.get("JobPosition"))
                    Experience=(request.POST.get("ExperienceEmplMix"))
                    print(request.POST)

                    #check the compulsory three of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Gehalt')


                    if float(HoursPerWeekEmp) != 1:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zur Arbeitszeit')

                    #if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck==0):
                        d = mediumobj.datacollection_set.create(
                        SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                        Happiness=float(Happiness),
                        HoursPerWeekEmp=float(HoursPerWeekEmp),
                        JobPosition=JobPosition,
                        Experience=Experience,
                        Comment=Comment
                        )
                    else:
                        pass

                #if the criteria for free or employed is "pauschal",
                #we get the data relevant for this case
                if FreeOrEmployed=="pauschal":
                    SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                    DaysPerMonthMix=(request.POST.get("DaysPerMonthMix"))
                    HoursPerDayMix=(request.POST.get("HoursPerDayMix"))
                    JobPosition=(request.POST.get("JobPosition"))
                    Experience=(request.POST.get("ExperienceEmplMix"))
                    Happiness=(request.POST.get("Happiness"))
                    Comment=(request.POST.get("Comment"))

                    #check the compulsory four of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Gehalt')


                    if float(DaysPerMonthMix) != 1:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zu Tagen pro Monat')

                    if float(HoursPerDayMix) != 1:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zu Stunden pro Tag')

                    #if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck==0):
                        d = mediumobj.datacollection_set.create(
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


                if FreeOrEmployed=="frei":

                    FeeFree=(request.POST.get('FeeFree'))
                    VideoAudioTextFree=(request.POST.get("VideoAudioTextFree"))
                    Genre=(request.POST.get("Genre"))
                    AnalogDigitalFree=(request.POST.get("AnalogDigitalFree"))
                    JobPosition=(request.POST.get("JobPosition"))
                    HoursSpentFree=(request.POST.get("HoursSpentFree"))
                    Experience=(request.POST.get("ExperienceEmplMix"))
                    Happiness=(request.POST.get("Happiness"))
                    Comment=(request.POST.get("Comment"))

                    #check the compulsory four of them and send warning if they are missing
                    if FeeFree:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Honorar')


                    if float(HoursSpentFree) != 0.5:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Zeitaufwand')

                    if VideoAudioTextFree:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zur Mediumsart fehlen')

                    if VideoAudioTextFree == "video":
                        if float(MinPerVideoFree) != 0.5:
                            pass
                        else:
                            sanitycheck=1
                            messages.info(request, 'Angabe zu Beitragsminuten fehlen')

                    if VideoAudioTextFree == "audio":
                        if float(MinPerVideoFree) != 0.5:
                            pass
                        else:
                            sanitycheck=1
                            messages.info(request, 'Angabe zu Beitragsminuten fehlen')

                    if VideoAudioTextFree == "text":
                        if float(CharPerArticleFree) != 100:
                            pass
                        else:
                            sanitycheck=1
                            messages.info(request, 'Angabe zur Anzahl an Zeichen fehlen')




                    if(sanitycheck==0):
                        d = mediumobj.datacollection_set.create(
                        FeeFree=float(FeeFree),
                        VideoAudioTextFree=VideoAudioTextFree,
                        Genre=Genre,
                        AnalogDigitalFree=AnalogDigitalFree,
                        JobPosition=JobPosition,
                        HoursSpentFree=float(HoursSpentFree),
                        Experience=Experience,
                        Happiness=float(Happiness),
                        Comment=Comment,
                        )

            except Medium.DoesNotExist:

                if FreeOrEmployed=="fest":
                    SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                    Happiness=(request.POST.get("Happiness"))
                    HoursPerWeekEmp=(request.POST.get("HoursPerWeekEmp"))
                    JobPosition=(request.POST.get("JobPosition"))
                    Experience=(request.POST.get("ExperienceEmplMix"))
                    print(request.POST)

                    #check the compulsory three of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Gehalt')


                    #if all these data sanitychecks are okay, we bind the input to an existing medium
                    if(sanitycheck==0):
                        mediumobj = Medium(mediumname=MediumName, freeoremployed=FreeOrEmployed)
                        mediumobj.save()
                        d = mediumobj.datacollection_set.create(
                        SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                        Happiness=float(Happiness),
                        HoursPerWeekEmp=float(HoursPerWeek),
                        JobPosition=JobPosition,
                        Experience=Experience,
                        Comment=Comment
                        )



                if FreeOrEmployed=="pauschal":
                    SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                    DaysPerMonthMix=(request.POST.get("DaysPerMonthMix"))
                    HoursPerDayMix=(request.POST.get("HoursPerDayMix"))
                    JobPosition=(request.POST.get("JobPosition"))
                    Experience=(request.POST.get("ExperienceEmplMix"))
                    Happiness=(request.POST.get("Happiness"))
                    Comment=(request.POST.get("Comment"))
                    #check the compulsory four of them and send warning if they are missing
                    if SalaryPerMonthEmpMix:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Gehalt')


                    if float(DaysPerMonthMix) != 1:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zu Tagen pro Monat')

                    if float(HoursPerDayMix) != 1:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zu Stunden pro Tag')

                    if(sanitycheck==0):

                        mediumobj = Medium(mediumname=MediumName, freeoremployed=FreeOrEmployed)
                        mediumobj.save()

                        d = mediumobj.datacollection_set.create(
                        SalaryPerMonthEmpMix=float(SalaryPerMonthEmpMix),
                        DaysPerMonthMix=float(DaysPerMonthMix),
                        HoursPerDayMix=float(HoursPerDayMix),
                        JobPosition=str(JobPosition),
                        Experience=str(Experience),
                        Happiness=float(Happiness),
                        Comment=str(Comment),
                        )


                if FreeOrEmployed=="frei":
                    FeeFree=(request.POST.get('FeeFree'))
                    VideoAudioTextFree=(request.POST.get("VideoAudioTextFree"))
                    Genre=(request.POST.get("Genre"))
                    AnalogDigitalFree=(request.POST.get("AnalogDigitalFree"))
                    JobPosition=(request.POST.get("JobPosition"))
                    HoursSpentFree=(request.POST.get("HoursSpentFree"))
                    Experience=(request.POST.get("ExperienceEmplMix"))
                    Happiness=(request.POST.get("Happiness"))
                    Comment=(request.POST.get("Comment"))
                    CharPerArticleFree=(request.POST.get("CharPerArticleFree"))
                    MinPerAudioFree=(request.POST.get("MinPerAudioFree"))
                    MinPerVideoFree=(request.POST.get("MinPerVideoFree"))


                    #check the compulsory four of them and send warning if they are missing
                    if FeeFree:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Honorar')


                    if float(HoursSpentFree) != 0.5:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zum Zeitaufwand')

                    if VideoAudioTextFree:
                        pass
                    else:
                        sanitycheck=1
                        messages.info(request, 'Angabe zur Mediumsart fehlen')

                    if VideoAudioTextFree == "video":
                        if float(MinPerVideoFree) != 0.5:
                            pass
                        else:
                            sanitycheck=1
                            messages.info(request, 'Angabe zu Beitragsminuten fehlen')

                    if VideoAudioTextFree == "audio":
                        if float(MinPerVideoFree) != 0.5:
                            pass
                        else:
                            sanitycheck=1
                            messages.info(request, 'Angabe zu Beitragsminuten fehlen')

                    if VideoAudioTextFree == "text":
                        if float(CharPerArticleFree) != 100:
                            pass
                        else:
                            sanitycheck=1
                            messages.info(request, 'Angabe zur Anzahl an Zeichen fehlen')





                    if(sanitycheck==0):
                        mediumobj = Medium(mediumname=MediumName, freeoremployed=FreeOrEmployed)
                        mediumobj.save()

                        d = mediumobj.datacollection_set.create(
                        FeeFree=float(FeeFree),
                        VideoAudioTextFree=VideoAudioTextFree,
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
    #return HttpResponseRedirect(reverse('honoradar:index'))

def getdata(request):
    print(request.GET)
    MediumGet=(request.GET.get('mediumget'))
    FreeOrEmployedGet=(request.GET.get('switch'))
    print(MediumGet)
    print(FreeOrEmployedGet)

    try:
        mediumobj=Medium.objects.get(
        Q(mediumname=MediumGet),
        Q(freeoremployed=FreeOrEmployedGet)
        )
        print(mediumobj)
        entries = DataCollection.objects.filter(Medium = mediumobj)
        print("found")
        counter=(entries.count())
        print(counter)
        if (counter>1):
            print("more than one")
            if FreeOrEmployed=="fest":
                avghappiness=entries.aggregate(Avg('Happiness'))
                avghappiness=(avghappiness['Happiness__avg'])
                context = {'medium': mediumobj, "avghappiness": avghappiness}
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


        #return HttpResponseRedirect(reverse('honoradar:results', args=(question.id,)))
