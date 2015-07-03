from django.shortcuts import render, render_to_response
from datetime import datetime, timedelta, time
from django.http import HttpResponse, HttpResponseRedirect

stageOne = [['Time from', 'time to', '','','','','','','','','','','','','','','',''],
    ['00:00', '02:30', '1','13','9','5','2','14','10','6','3','15','11','7','4','16','12','8'],
    ['02:00', '04:30', '2','14','10','6','3','15','11','7','4','16','12','8','5','1','13','9'],
    ['04:00', '06:30', '3','15','11','7','4','16','12','8','5','1','13','9','6','2','14','10'],
    ['06:00', '08:30', '4','16','12','8','5','1','13','9','6','2','14','10','7','3','15','11'],
    ['08:00', '10:30', '5','1','13','9','6','2','14','10','7','3','15','11','8','4','16','12'],
    ['10:00', '12:30', '6','2','14','10','7','3','15','11','8','4','16','12','9','5','1','13'],
    ['12:00', '14:30', '7','3','15','11','8','4','16','12','9','5','1','13','10','6','2','14'],
    ['14:00', '16:30', '8','4','16','12','9','5','1','13','10','6','2','14','11','7','3','15'],
    ['16:00', '18:30', '9','5','1','13','10','6','2','14','11','7','3','15','12','8','4','16'],
    ['18:00', '20:30', '10','6','2','14','11','7','3','15','12','8','4','16','13','9','5','1'],
    ['20:00', '22:30', '11','7','3','15','12','8','4','16','13','9','5','1','14','10','6','2'],
    ['22:00', '00:30', '12','8','4','16','13','9','5','1','14','10','6','2','15','11','7','3']]

stageTwo = [['Time from', 'time to', '','','','','','','','','','','','','','','',''],
    ['00:00', '02:30', '1,9','13,5','1,9','13,5','2,10','14,6','2,10','14,6','3,11','15,7','3,11','15,7','4,12','16,8','4,12','16,8'],
    ['02:00', '04:30', '2,10','14,6','2,10','14,6','3,11','15,7','3,11','15,7','4,12','16,8','4,12','16,8','5,13','1,9','5,13','1,9'],
    ['04:00', '06:30', '3,11','15,7','3,11','15,7','4,12','16,8','4,12','16,8','5,13','1,9','5,13','1,9','6,14','2,10','6,14','2,10'],
    ['06:00', '08:30', '4,12','16,8','4,12','16,8','5,13','1,9','5,13','1,9','6,14','2,10','6,14','2,10','7,15','3,11','7,15','3,11'],
    ['08:00', '10:30', '5,13','1,9','5,13','1,9','6,14','2,10','6,14','2,10','7,15','3,11','7,15','3,11','8,16','4,12','8,16','4,12'],
    ['10:00', '12:30', '6,14','2,10','6,14','2,10','7,15','3,11','7,15','3,11','8,16','4,12','8,16','4,12','9,1','5,13','9,1','5,13'],
    ['12:00', '14:30', '7,15','3,11','7,15','3,11','8,16','4,12','8,16','4,12','9,1','5,13','9,1','5,13','10,2','6,14','10,2','6,14'],
    ['14:00', '16:30', '8,16','4,12','8,16','4,12','9,1','5,13','9,1','5,13','10,2','6,14','10,2','6,14','11,3','7,15','11,3','7,15'],
    ['16:00', '18:30', '9,1','5,13','9,1','5,13','10,2','6,14','10,2','6,14','11,3','7,15','11,3','7,15','12,4','8,16','12,4','8,16'],
    ['18:00', '20:30', '10,2','6,14','10,2','6,14','11,3','7,15','11,3','7,15','12,4','8,16','12,4','8,16','13,5','9,1','13,5','9,1'],
    ['20:00', '22:30', '11,3','7,15','11,3','7,15','12,4','8,16','12,4','8,16','13,5','9,1','13,5','9,1','14,6','10,2','14,6','10,2'],
    ['22:00', '00:30', '12,4','8,16','12,4','8,16','13,5','9,1','13,5','9,1','14,6','10,2','14,6','10,2','15,7','11,3','15,7','11,3']]

stageThree = [['Time from', 'time to', '','','','','','','','','','','','','','','',''],
    ['00:00', '02:30', '1,9,13','13,5,9','9,1,5','5,13,1','2,10,14','14,6,10','10,2,6','6,14,2','3,11,15','15,7,11','11,3,7','7,15,3','4,12,16','16,8,12','12,4,8','8,16,4'],
    ['02:00', '04:30', '2,10,14','14,6,10','10,2,6','6,14,2','3,11,15','15,7,11','11,3,7','7,15,3','4,12,16','16,8,12','12,4,8','8,16,4','5,13,1','1,9,13','13,5,9','9,1,5'],
    ['04:00', '06:30', '3,11,15','15,7,11','11,3,7','7,15,3','4,12,16','16,8,12','12,4,8','8,16,4','5,13,1','1,9,13','13,5,9','9,1,5','6,14,2','2,10,14','14,6,10','10,2,6'],
    ['06:00', '08:30', '4,12,16','16,8,12','12,4,8','8,16,4','5,13,1','1,9,13','13,5,9','9,1,5','6,14,2','2,10,14','14.6,10','10,2,6','7,15,3','3,11,15','15,7,11','11,3,7'],
    ['08:00', '08:30', '5,13,1','1,9,13','13,5,9','9,1,5','6,14,2','2,10,14','14,6,10','10,2,6','7,15,3','3,11,15','15,7,11','11,3,7','8,16,4','4,12,16','16,8,12','12,4,8'],
    ['10:00', '10:30', '6,14,2','2,10,14','14,6,10','10,2,6','7,15,3','3,11,15','15,7,11','11,3,7','8,16,4','4,12,16','16,8,12','12,4,8','9,1,5','5,13,1','1,9,13','13,5,9'],
    ['12:00', '12:30', '7,15,3','3,11,15','15,7,11','11,3,7','8,16,4','4,12,16','16,8,12','12,4,8','9,1,5','5,13,1','1,9,13','13,5,9','10,2,6','6,14,2','2,10,14','14,6,10'],
    ['14:00', '14:30', '8,16,4','4,12,16','16,8,12','12,4,8','9,1,5','5,13,1','1,9,13','13,5,9','10,2,6','6,14,2','2,10,14','14,6,10','11,3,7','7,15,3','3,11,15','15,7,11'],
    ['16:00', '16:30', '9,1,5','5,13,1','1,9,13','13,5,9','10,2,6','6,14,2','2,10,14','14,6,10','11,3,7','7,15,3','3,11,15','15,7,11','12,4,8','8,16,4','4,12,16','16,8,12'],
    ['18:00', '18:30', '10,2,6','6,14,2','2,10,14','14,6,10','11,3,7','7,15,3','3,11,15','15,7,11','12,4,8','8,16,4','4,12,16','16,8,12','13,5,9','9,1,5','5,13,1','1,9,13'],
    ['20:00', '20:30', '11,3,7','7,15,3','3,11,15','15,7,11','12,4,8','8,16,4','4,12,16','16,8,12','13,5,9','9,1,5','5,13,1','1,9,13','14,6,10','10,2,6','6,14,2','2,10,14'],
    ['22:00', '00:30', '12,4,8','8,16,4','4,12,16','16,8,12','13,5,9','9,1,5','5,13,1','1,9,13','14,6,10','10,2,6','6,14,2','2,10,14','15,7,11','11,3,7','7,15,3','3,11,15']]

stageFour = [['Time from', 'time to', '','','','','','','','','','','','','','','',''],
    ['00:00', '02:30', '1,9,13,5','1,9,13,5','1,9,13,5','1,9,13,5','2,10,14,6','2,10,14,6','2,10,14,6','2,10,14,6','3,11,15,7','3,11,15,7','3,11,15,7','3,11,15,7','4,12,16,8','4,12,16,8','4,12,16,8','4,12,16,8'],
    ['02:00', '04:30', '2,10,14,6','2,10,14,6','2,10,14,6','2,10,14,6','3,11,15,7','3,11,15,7','3,11,15,7','3,11,15,7','4,12,16,8','4,12,16,8','4,12,16,8','4,12,16,8','5,13,1,9','5,13,1,9','5,13,1,9','5,13,1,9'],
    ['04:00', '06:30', '3,11,15,7','3,11,15,7','3,11,15,7','3,11,15,7','4,12,16,8','4,12,16,8','4,12,16,8','4,12,16,8','5,13,1,9','5,13,1,9','5,13,1,9','5,13,1,9','6,14,2,10','6,14,2,10','6,14,2,10','6,14,2,10'],
    ['06:00', '08:30', '4,12,16,8','4,12,16,8','4,12,16,8','4,12,16,8','5,13,1,9','5,13,1,9','5,13,1,9','5,13,1,9','6,14,2,10','6,14,2,10','6,14,2,10','6,14,2,10','7,15,3,11','7,15,3,11','7,15,3,11','7,15,3,11'],
    ['08:00', '10:30', '5,13,1,9','5,13,1,9','5,13,1,9','5,13,1,9','6,14,2,10','6,14,2,10','6,14,2,10','6,14,2,10','7,15,3,11','7,15,3,11','7,15,3,11','7,15,3,11','8,16,4,12','8,16,4,12','8,16,4,12','8,16,4,12'],
    ['10:00', '12:30', '6,14,2,10','6,14,2,10','6,14,2,10','6,14,2,10','7,15,3,11','7,15,3,11','7,15,3,11','7,15,3,11','8,16,4,12','8,16,4,12','8,16,4,12','8,16,4,12','9,1,5,13','9,1,5,13','9,1,5,13','9,1,5,13'],
    ['12:00', '14:30', '7,15,3,11','7,15,3,11','7,15,3,11','7,15,3,11','8,16,4,12','8,16,4,12','8,16,4,12','8,16,4,12','9,1,5,13','9,1,5,13','9,1,5,13','9,1,5,13','10,2,6,14','10,2,6,14','10,2,6,14','10,2,6,14'],
    ['14:00', '16:30', '8,16,4,12','8,16,4,12','8,16,4,12','8,16,4,12','9,1,5,13','9,1,5,13','9,1,5,13','9,1,5,13','10,2,6,14','10,2,6,14','10,2,6,14','10,2,6,14','11,3,7,15','11,3,7,15','11,3,7,15','11,3,7,15'],
    ['16:00', '18:30', '9,1,5,13','9,1,5,13','9,1,5,13','9,1,5,13','10,2,6,14','10,2,6,14','10,2,6,14','10,2,6,14','11,3,7,15','11,3,7,15','11,3,7,15','11,3,7,15','12,4,8,16','12,4,8,16','12,4,8,16','12,4,8,16'],
    ['18:00', '20:30', '10,2,6,14','10,2,6,14','10,2,6,14','10,2,6,14','11,3,7,15','11,3,7,15','11,3,7,15','11,3,7,15','12,4,8,16','12,4,8,16','12,4,8,16','12,4,8,16','13,5,9,1','13,5,9,1','13,5,9,1','13,5,9,1'],
    ['20:00', '22:30', '11,3,7,15','11,3,7,15','11,3,7,15','11,3,7,15','12,4,8,16','12,4,8,16','12,4,8,16','12,4,8,16','13,5,9,1','13,5,9,1','13,5,9,1','13,5,9,1','14,6,10,2','14,6,10,2','14,6,10,2','14,6,10,2'],
    ['22:00', '00:30', '12,4,8,16','12,4,8,16','12,4,8,16','12,4,8,16','13,5,9,1','13,5,9,1','13,5,9,1','13,5,9,1','14,6,10,2','14,6,10,2','14,6,10,2','14,6,10,2','15,7,11,3','15,7,11,3','15,7,11,3','15,7,11,3']]

areas = {'1': 'Bellville', '2': 'Maitland, Milnerton', '3': 'Somerset West, Strand',
			'4': 'Mitchells Plain, Phillippi', '5': 'Newlands, Parts of Rondebosch, Ottery, Hanover Park',
				'6': 'Durbanville, Tygervalley, Welgemoed', '7': 'City Bowl, Green Point, Sea Point, Camps Bay',
					'8': 'Cape Peninsula, Tokai, Muizenberg', '9': 'Pinelands, Langa, Epping',
						'10': 'Brackenfell, Kuilsriver, Kraaifontein, Vredekloof', '11': 'Hout Bay, Constantia, Bergvliet, Plumstead, Wynberg, Claremont',
							'12': 'Athlone, Manenberg', '13': 'Delft, Blue Downs, Gooodwood, Parow',
								'14': 'Atlantis, Blouberg', '15': 'Observatory, Rondebosch, Maitland','16': 'Retreat, Phillipi'}

table_headers1 = ['day of month', '', '1st', '2nd', '3rd', '4th', '5th', '6th','7th', '8th', '9th', '10th', '11th', '12th','13th', '14th', '15th', '16th']
table_headers2 = ['','','17th', '18th', '19th', '20th', '21st', '22nd', '23rd','24th', '25th', '26th', '27th', '28th', '29th','30th', '31st', '']

#Function that takes a schedule list as an argument and then returns the value from that list corresponding to the date and time

def scheduling(schedule, date, now_time):
    if(now_time >= time(00,00) and now_time <= time(02,30)):
        if date <= 16:
            return schedule[1][date + 1]
        elif date > 16:
            return schedule[1][date - 15]
    elif(now_time >= time(02,00) and now_time <= time(04,30)):
        if date <= 16:
            return schedule[2][date + 1]
        elif date > 16:
            return schedule[2][date - 15]
    elif(now_time >= time(04,00) and now_time <= time(06,30)):
        if date <= 16:
            return schedule[3][date + 1]
        elif date > 16:
            return schedule[3][date - 15]
    elif(now_time >= time(06,00) and now_time <= time(8,30)):
        if date <= 16:
            return schedule[4][date + 1]
        elif date > 16:
            return schedule[4][date - 15]
    elif(now_time >= time(8,00) and now_time <= time(10,30)):
        if date <= 16:
            return schedule[5][date + 1]
        elif date > 16:
            return schedule[5][date - 15]
    elif(now_time >= time(10,00) and now_time <= time(12,30)):
        if date <= 16:
            return schedule[6][date + 1]
        elif date > 16:
            return schedule[6][date - 15]
    elif(now_time >= time(12,00) and now_time <= time(14,30)):
        if date <= 16:
            return schedule[7][date + 1]
        elif date > 16:
            return schedule[7][date - 15]
    elif(now_time >= time(14,00) and now_time <= time(16,30)):
        if date <= 16:
            return schedule[8][date + 1]
        elif date > 16:
            return schedule[8][date - 15]
    elif(now_time >= time(16,00) and now_time <= time(18,30)):
        if date <= 16:
            return schedule[9][date + 1]
        elif date > 16:
            return schedule[9][date - 15]
    elif(now_time >= time(18,00) and now_time <= time(20,30)):
        if date <= 16:
            return schedule[10][date + 1]
        elif date > 16:
            return schedule[10][date - 15]
    elif(now_time >= time(20,00) and now_time <= time(22,30)):
        if date <= 16:
            return schedule[11][date + 1]
        elif date > 16:
            return schedule[11][date - 15]
    elif(now_time >= time(22,00)):
        if date <= 16:
            return schedule[12][date + 1]
        elif date > 16:
            return schedule[12][date - 15]

def determineLocation(currentStage, date, now_time):
    if currentStage ==0:
        current = 0
    elif currentStage ==1:
        current = scheduling(stageOne, date, now_time)
    elif currentStage ==2:
        temp = scheduling(stageTwo, date, now_time)
        current = temp.split(',')
    elif currentStage ==3:
        temp = scheduling(stageThree, date, now_time)
        current = temp.split(',')
    elif currentStage ==4:
        temp = scheduling(stageFour, date, now_time)
        current = temp.split(',')
    return current

def times():
    now = datetime.now()
    now_time = now.time()
    date = now.day
    return now_time, date

def schedule1(request):
    return render(request, 'schedule1.html', {'headers1': table_headers1,
    										 'headers2': table_headers2,
    										 'S1schedule': stageOne,
                                			 'S2schedule': stageTwo,
                                			 'S3schedule': stageThree,
                                			 'S4schedule': stageFour,
                                			 'areas': areas})
def schedule2(request):
	now_time, date = times()
	currentStage = 2   #temporary

	if currentStage ==0:
		return render(request,'schedule2.html', {'stage': currentStage})
	elif currentStage ==1:
		current = determineLocation(currentStage, date, now_time)
		return render(request,'schedule2.html', {'stage': currentStage, 
                                                 'headers1': table_headers1,
    										 	 'headers2': table_headers2,
    										     'S1schedule': stageOne,
                                			     'S2schedule': stageTwo,
                                			     'S3schedule': stageThree,
                                			     'S4schedule': stageFour,
                                			     'areas': areas,
                                			     'current': current})
	elif currentStage ==2:
		current = determineLocation(currentStage, date, now_time)
		zones = current[0] + "," + current[1]

		return render(request,'schedule2.html', {'stage': currentStage,
                                    			 'headers1': table_headers1,
    											 'headers2': table_headers2,
    											 'S1schedule': stageOne,
                                				 'S2schedule': stageTwo,
                                				 'S3schedule': stageThree,
                                				 'S4schedule': stageFour,
                                				 'areas': areas, 
                                				 'zones': zones})
	elif currentStage ==3:
		current = determineLocation(currentStage, date, now_time)
		zones = current[0] + "," + current[1] + "," + current[2]
		return render(request,'schedule2.html', {'stage': currentStage,
                                        		 'headers1': table_headers1,
    										 	 'headers2': table_headers2,
    								 			 'S1schedule': stageOne,
                                	 			 'S2schedule': stageTwo,
                                	 			 'S3schedule': stageThree,
                                		 		 'S4schedule': stageFour,
                                	 			 'areas': areas, 
                                	 			 'zones': zones})
	elif currentStage ==4:
		current = determineLocation(currentStage, date, now_time)
		zones = current[0] + "," + current[1] + "," + current[2] + "," + current[3]
		return render(request,'schedule2.html', {'stage': currentStage, 
                                           		 'headers1': table_headers1,
    											 'headers2': table_headers2,
    											 'S1schedule': stageOne,
                                				 'S2schedule': stageTwo,
                                				 'S3schedule': stageThree,
                                				 'S4schedule': stageFour,
                                				 'areas': areas, 
                                				 'zones': zones})

def schedule3(request):
	now_time, date = times()
	currentStage = 3   #temporary

	next = datetime.now() + timedelta(hours=2)
	next_time = next.time()

	after = datetime.now() + timedelta(hours=4)
	after_time = after.time()

	currentZone = determineLocation(currentStage, date, now_time)
	nextZone = determineLocation(currentStage, date, next_time)
	afterZone = determineLocation(currentStage, date, after_time)

	if currentStage == 0:
		return render(request, 'schedule3.html', {'stage': currentStage})
	elif currentStage == 1:
		return render(request, 'schedule3.html', {'stage': currentStage,
												  'currentZone': areas[currentZone],
												  'nextZone': areas[nextZone],
												  'afterZone': areas[afterZone]})
	elif currentStage == 2:
		return render(request,'schedule3.html', {'stage': currentStage,
												  'currentFirstZone': areas[currentZone[0]],
												  'currentSecondZone': areas[currentZone[1]],
												  'nextFirstZone': areas[nextZone[0]],
												  'nextSecondZone': areas[nextZone[1]],
												  'afterFirstZone': areas[afterZone[0]],
												  'afterSecondZone': areas[afterZone[1]]})
	elif currentStage == 3:
		return render(request,'schedule3.html', {'stage': currentStage,
												  'currentFirstZone': areas[currentZone[0]],
												  'currentSecondZone': areas[currentZone[1]],
												  'currentThirdZone': areas[currentZone[2]],
												  'nextFirstZone': areas[nextZone[0]],
												  'nextSecondZone': areas[nextZone[1]],
												  'nextThirdZone': areas[nextZone[2]],
												  'afterFirstZone': areas[afterZone[0]],
												  'afterSecondZone': areas[afterZone[1]],
												  'afterThirdZone': areas[afterZone[2]]})
	elif currentStage == 4:
		return render(request,'schedule3.html', {'stage': currentStage,
												  'currentFirstZone': areas[currentZone[0]],
												  'currentSecondZone': areas[currentZone[1]],
												  'currentThirdZone': areas[currentZone[2]],
												  'currentFourthZone': areas[currentZone[3]],
												  'nextFirstZone': areas[nextZone[0]],
												  'nextSecondZone': areas[nextZone[1]],
												  'nextThirdZone': areas[nextZone[2]],
												  'nextFourthZone': areas[nextZone[3]],
												  'afterFirstZone': areas[afterZone[0]],
												  'afterSecondZone': areas[afterZone[1]],
												  'afterThirdZone': areas[afterZone[2]],
												  'afterFourthZone': areas[afterZone[3]]})
def schedule4(request):
    return render(request,'schedule4.html')

# Function to render the home page template to the base template
def home_page(request):
    return render(request,'home.html')

 # Function to render the about template to the base template
def about_page(request):
    return render(request,'about.html')

def schedule4_dropdown(request, page_name):
	currentStage = 2   #temporary
	selected_zone = str(page_name)
	selected_area = areas[page_name]
	return render(request, 'results.html', {'headers1': table_headers1,
    										 'headers2': table_headers2,
    										 'S1schedule': stageOne,
                                			 'S2schedule': stageTwo,
                                			 'S3schedule': stageThree,
                                			 'S4schedule': stageFour,
                                			 'areas': areas, 
                                			 'stage': currentStage,
                                			 'zone': selected_zone,
                                			 'area': selected_area})

def schedule4_search(request):
	currentStage = 2   #temporary
	userInput = request.POST['suburbForm']
	S4areas = ['bellville', 'maitland, milnerton','somerset west, strand', 'mitchells plain, phillippi', 
			 'newlands, rondebosch, ottery, hanover park', 'durbanville, tygervalley, welgemoed', 
			 'city bowl, green point, sea point, camps bay','cape peninsula, tokai, muizenberg',
			 'pinelands, langa, epping', 'brackenfell, kuilsriver, kraaifontein, vredekloof',
			 'hout bay, constantia, bergvliet, plumstead, wynberg, claremont',
			 'athlone, manenberg', 'delft, blue downs, gooodwood, parow',
			 'atlantis, blouberg', 'observatory, rondebosch, maitland', 'retreat, phillipi']

	if not userInput:
		selected_zone = ""
		selected_area = ""
		blank = True 
		message = "Your search did not match an existing suburb for the Cape Town Schedule, please try again or use the drop down menu"
	else:
		userInput = userInput.lower()
		for i in S4areas:
			 if userInput in i:
				blank = False
				message = ""

				selected_zone = str(S4areas.index(i)+1)
				selected_area = userInput
				break
			 else:
				selected_zone = ""
				selected_area = ""
				blank = True
				message = "Your search did not match an existing suburb for the Cape Town Schedule, please try again or use the drop down menu"


	return render(request, 'results.html', {'headers1': table_headers1,
    													'headers2': table_headers2,
    												    'S1schedule': stageOne,
                                			 			'S2schedule': stageTwo,
                                						'S3schedule': stageThree,
                                			 			'S4schedule': stageFour,
                                			 			'areas': areas, 
                                			 			'stage': currentStage,
                                						'zone': selected_zone,
                                			 			'area': selected_area,
                                			 			'blank': blank,
                                			 			'message':message})
def schedule5(request):
    now_time, date = times()
    currentStage = 2   #temporary

    next = datetime.now() + timedelta(hours=2)
    next_time = next.time()

    after = datetime.now() + timedelta(hours=4)
    after_time = after.time()

    currentZone = determineLocation(currentStage, date, now_time)
    nextZone = determineLocation(currentStage, date, next_time)
    afterZone = determineLocation(currentStage, date, after_time)

    return render(request, 'schedule5.html', {'current': currentZone,
                                              'next': nextZone,
                                              'after': afterZone,
                                              'stage': currentStage})

