from django.contrib import admin

from .models import *




class DataCollection(admin.TabularInline):
    model = DataCollection
    extra = 1



class MediumAdmin(admin.ModelAdmin):
    fieldsets = [
    (None,               {'fields': ['mediumname'] }),
    ('Jobstatus', {'fields': ['freeoremployed']}),
    ('Fairness', {'fields': ['fairness']})

]
    inlines = [DataCollection]
    #this is for the question page
    list_display = ['mediumname','freeoremployed','UpDate','fairness']
    #fields = ['pub_date', 'question_text']
    list_filter = ['freeoremployed','UpDate']
    search_fields = ['mediumname']


admin.site.register(Medium, MediumAdmin)
