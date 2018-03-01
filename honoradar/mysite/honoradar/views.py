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
from django.db.models import Q
def senddata(request):
    sanitycheck=0
    if request.method == 'POST':
        print("senddata")
        MediumName=(request.POST.get('MediumName'))
        if MediumName:
            pass
        else:
            print("No Mediumname!!")
            sanitycheck=1
            messages.info(request, 'Medium')
        FreeOrEmployed=(request.POST.get('FreeOrEmployed'))
        Comment=(request.POST.get('Comment'))
        print(request.POST)
        try:
            mediumobj=Medium.objects.get(
            Q(mediumname=MediumName),
            Q(freeoremployed=FreeOrEmployed)
        )
            print("Found it")
            print(mediumobj)
            if FreeOrEmployed=="fest":

                SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                print(SalaryPerMonthEmpMix)
                if SalaryPerMonthEmpMix:
                    pass
                else:
                    sanitycheck=1
                    print("No Salary Angabe!!")
                    messages.info(request, 'Angabe zum Gehalt')

                Happiness=(request.POST.get("Happiness"))
                if Happiness == 0:
                    pass
                else:
                    sanitycheck=1
                    print("No Happiness Angabe!!")
                    messages.info(request, 'Angabe zur Zufriedenheit')

                HoursPerWeek=(request.POST.get("HoursPerWeekEmp"))
                if HoursPerWeek == 0:
                    HoursPerWeek=int(HoursPerWeek)
                    pass
                else:
                    sanitycheck=1
                    print("No HoursPerWeek Angabe!!")
                    messages.info(request, 'Angabe zur Arbeitszeit')

                JobPosition=(request.POST.get("JobPosition"))
                Experience=(request.POST.get("ExperienceEmplMix"))
                print(request.POST)
                if(sanitycheck==0):
                    d = mediumobj.datacollection_set.create(
                    SalaryPerMonthEmpMix=SalaryPerMonthEmpMix,
                    Happiness=Happiness,
                    HoursPerWeekEmp=HoursPerWeek,
                    JobPosition=JobPosition,
                    Experience=Experience,
                    Comment=Comment
                    )
                else:
                    pass

            if FreeOrEmployed=="pauschal":
                SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                Happiness=(request.POST.get("Happiness"))
                d = mediumobj.datacollection_set.create(SalaryPerMonthEmpMix=int(SalaryPerMonthEmpMix),Happiness=int(Happiness)
                )

            if FreeOrEmployed=="frei":
                gehalt=(request.POST.get('gehalt'))
                print(gehalt)
                wohlfuehl=(request.POST.get("happiness"))
                print(wohlfuehl)
                d = mediumobj.datacollection_set.create(salary_number=int(gehalt),rating_number=int(wohlfuehl)
                )

        except Medium.DoesNotExist:
            if FreeOrEmployed=="fest":
                SalaryPerMonthEmpMix=(request.POST.get('SalaryPerMonthEmpMix'))
                print(SalaryPerMonthEmpMix)
                if SalaryPerMonthEmpMix:
                    pass
                else:
                    sanitycheck=1
                    print("No Salary Angabe!!")
                    messages.info(request, 'Angabe zum Gehalt')

                Happiness=(request.POST.get("Happiness"))
                if Happiness == 0:
                    pass
                else:
                    sanitycheck=1
                    print("No Happiness Angabe!!")
                    messages.info(request, 'Angabe zur Zufriedenheit')

                HoursPerWeek=(request.POST.get("HoursPerWeekEmp"))
                if HoursPerWeek == 0:
                    HoursPerWeek=int(HoursPerWeek)
                    pass
                else:
                    sanitycheck=1
                    print("No HoursPerWeek Angabe!!")
                    messages.info(request, 'Angabe zur Arbeitszeit')

                JobPosition=(request.POST.get("JobPosition"))
                Experience=(request.POST.get("ExperienceEmplMix"))


                Comment=(request.POST.get('Comment'))
                if(sanitycheck==0):
                    mediumobj = Medium(mediumname=MediumName, freeoremployed=FreeOrEmployed)
                    mediumobj.save()
                    print(request.POST)
                    d = mediumobj.datacollection_set.create(
                    SalaryPerMonthEmpMix=int(SalaryPerMonthEmpMix),
                    Happiness=int(Happiness),
                    HoursPerWeekEmp=int(HoursPerWeek),
                    JobPosition=JobPosition,
                    Experience=Experience,
                    Comment=Comment
                    )



            if FreeOrEmployed=="pauschal":
                SalaryPerMonthEmp=(request.POST.get('SalaryPerMonthEmp'))
                DaysPerMonthMix=(request.POST.get("DaysPerMonthMix"))
                HoursPerDayMix=(request.POST.get("HoursPerDayMix"))
                JobPosition=(request.POST.get("JobPosition"))
                Experience=(request.POST.get("ExperienceEmplMix"))
                Happiness=(request.POST.get("Happiness"))
                comment=(request.POST.get("Message"))
                mediumobj = Medium(mediumname=MediumName, freeoremployed=FreeOrEmployed)
                mediumobj.save()
                print("Hey")
                d = mediumobj.datacollection_set.create(
                SalaryPerMonthEmp=int(SalaryPerMonthEmp),
                DaysPerMonthMix=int(DaysPerMonthMix),
                HoursPerDayMix=int(HoursPerDayMix),
                JobPosition=str(JobPosition),
                Experience=str(Experience),
                Happiness=int(Happiness),
                comment=str(comment),
                )


            if FreeOrEmployed=="frei":
                gehalt=(request.POST.get('lohnProAuftrag'))
                wohlfuehl=(request.POST.get("happiness"))



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
        return HttpResponseRedirect(reverse('honoradar:results', args=(question.id,)))
