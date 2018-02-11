from django.contrib import admin

from .models import *




class SalaryInline(admin.TabularInline):
    model = Salary
    extra = 3

class RatingInline(admin.TabularInline):
    model = Rating
    extra = 3

class MediumAdmin(admin.ModelAdmin):
    fieldsets = [
    (None,               {'fields': ['mediumname']}),
    ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
]
    inlines = ([SalaryInline, RatingInline])
    #this is for the question page
    list_display = ('mediumname', 'pub_date', 'was_published_recently')
    #fields = ['pub_date', 'question_text']
    list_filter = ['pub_date']
    search_fields = ['mediumname']

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    #this is for the question page
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    #fields = ['pub_date', 'question_text']
    list_filter = ['pub_date']
    search_fields = ['question_text']

admin.site.register(Medium, MediumAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Salary)
admin.site.register(Rating)
