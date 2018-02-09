from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic

from .models import Question, Choice

def senddata(request):
    if request.method == 'POST':
        print("senddata")
        mediumname=(request.POST.get('mediumname'))
        message=(request.POST.get('mediumname'))
        festfrei=(request.POST.get('festfrei'))
        if festfrei=="fest":
            gehalt=(request.POST.get('gehalt'))
            arbeitszeit=(request.POST.get('arbeitszeit'))
            position=(request.POST.get('cheforvolo'))
            arbeitserfahrung=(request.POST.get("erfahrung"))
            zufriedenheit=(request.POST.get("happiness"))
            print(mediumname, festfrei, gehalt, arbeitszeit, position, arbeitserfahrung,zufriedenheit, message)



        print(request.POST.get('festfrei'))
        print(request.POST)




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
