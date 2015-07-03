"""loadshedding_schedules URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from schedule import views

urlpatterns = [
    url(r'^$', 'schedule.views.home_page'),
    url(r'^about$', 'schedule.views.about_page'),

    url(r'^schedule1$', 'schedule.views.schedule1'),
    url(r'^schedule2$', 'schedule.views.schedule2'),
    url(r'^schedule3$', 'schedule.views.schedule3'),
	url(r'^schedule4$', 'schedule.views.schedule4'),
	url(r'^schedule5$', 'schedule.views.schedule5'),

	url(r'^schedule4/zone/(\d+)$', 'schedule.views.schedule4_dropdown'),
	url(r'^schedule4/search$', 'schedule.views.schedule4_search'),
]



