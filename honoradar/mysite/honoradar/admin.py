from django.contrib import admin

from .models import *




class DataCollection(admin.TabularInline):
    model = DataCollection
    extra = 1



class MediumAdmin(admin.ModelAdmin):
    fieldsets = [
    (None,               {'fields': ['mediumname'] }),
    ('Jobstatus', {'fields': ['freeoremployed']}),
    ('Fairness', {'fields': ['fairness']}),
    ('Suspiciousmedium', {'fields': ['Suspiciousmedium']})

]
    inlines = [DataCollection]
    #this is for the question page
    list_display = ['mediumname','freeoremployed','UpDate','fairness','Suspiciousmedium']
    #fields = ['pub_date', 'question_text']
    list_filter = ['freeoremployed','UpDate','Suspiciousmedium']
    search_fields = ['mediumname']


admin.site.register(Medium, MediumAdmin)
