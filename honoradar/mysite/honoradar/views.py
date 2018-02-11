from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic

from .models import *

def senddata(request):
    if request.method == 'POST':
        print("senddata")
        mediumname=(request.POST.get('mediumname'))
        message=(request.POST.get('message'))
        festfrei=(request.POST.get('festfrei'))
        if festfrei=="fest":
            gehalt=(request.POST.get('gehalt'))
            StundenProWoche=(request.POST.get('StundenProWoche'))
            cheforvolo=(request.POST.get('cheforvolo'))
            arbeitserfahrung=(request.POST.get("arbeitserfahrung"))
            wohlfuehl=(request.POST.get("wohlfuehl"))
            print(mediumname, festfrei, gehalt, StundenProWoche, cheforvolo, arbeitserfahrung,wohlfuehl, message)
        if festfrei=="pauschal":
            gehalt=(request.POST.get('gehalt'))
            tageProMonat=(request.POST.get('tageProMonat'))
            stundenProTag=(request.POST.get('stundenProTag'))
            position=(request.POST.get('cheforvolo'))
            arbeitserfahrung=(request.POST.get("arbeitserfahrung"))
            wohlfuehl=(request.POST.get("wohlfuehl"))
            print(mediumname, festfrei, gehalt, tageProMonat, stundenProTag, position, arbeitserfahrung,wohlfuehl, message)
        if festfrei=="frei":
            gehalt=(request.POST.get('lohnProAuftrag'))
            ProductType=(request.POST.get('ProductType'))
            Verwertung=(request.POST.get('Verwertung'))
            Zeitaufwand=(request.POST.get('Zeitaufwand'))
            arbeitserfahrung=(request.POST.get("arbeitserfahrung"))
            zufriedenheit=(request.POST.get("zufriedenheit"))
            videoAudioText=(request.POST.get('videoAudioText'))
            print(mediumname,festfrei, gehalt,ProductType,Verwertung,Zeitaufwand,arbeitserfahrung,zufriedenheit,videoAudioText)
            if videoAudioText=="text":
                ZeichenProArtikel=(request.POST.get('ZeichenProArtikel'))
                print(ZeichenProArtikel)
            if videoAudioText=="audio":
                MinutenProAudio=(request.POST.get('MinutenProAudio'))
                print(MinutenProAudio)

            if videoAudioText=="video":
                MinutenProVideo=(request.POST.get('MinutenProVideo'))
                print(MinutenProVideo)









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
