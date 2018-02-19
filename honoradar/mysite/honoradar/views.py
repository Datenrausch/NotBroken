from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic
import datetime
from .models import *
from django.db.models import Q
def senddata(request):
    if request.method == 'POST':
        print("senddata")
        mediumname=(request.POST.get('mediumname'))
        message=(request.POST.get('message'))
        festfrei=(request.POST.get('festfrei'))
        print(request.POST)
        try:
            mediumobj=Medium.objects.get(
            Q(mediumname=mediumname),
            Q(festfrei=festfrei)
        )
            print("Found it")

            print(mediumobj)
            if festfrei=="fest":
                gehalt=(request.POST.get('gehalt'))
                print(gehalt)
                wohlfuehl=(request.POST.get("happiness"))
                print(wohlfuehl)
                d = mediumobj.datacollection_set.create(salary_number=int(gehalt),rating_number=int(wohlfuehl)
                )

            if festfrei=="pauschal":
                gehalt=(request.POST.get('gehalt'))
                print(gehalt)
                wohlfuehl=(request.POST.get("happiness"))
                print(wohlfuehl)
                d = mediumobj.datacollection_set.create(salary_number=int(gehalt),rating_number=int(wohlfuehl)
                )

            if festfrei=="frei":
                gehalt=(request.POST.get('gehalt'))
                print(gehalt)
                wohlfuehl=(request.POST.get("happiness"))
                print(wohlfuehl)
                d = mediumobj.datacollection_set.create(salary_number=int(gehalt),rating_number=int(wohlfuehl)
                )

        except Medium.DoesNotExist:
            if festfrei=="fest":
                gehalt=(request.POST.get('gehalt'))
                wohlfuehl=(request.POST.get("happiness"))
            if festfrei=="pauschal":
                gehalt=(request.POST.get('gehalt'))
                wohlfuehl=(request.POST.get("happiness"))
            if festfrei=="frei":
                gehalt=(request.POST.get('lohnProAuftrag'))
                wohlfuehl=(request.POST.get("happiness"))

            print("New Medium")
            mediumobj = Medium(mediumname=mediumname, festfrei=festfrei)
            mediumobj.save()

            d = mediumobj.datacollection_set.create(salary_number=int(gehalt),rating_number=int(wohlfuehl),
            )

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
