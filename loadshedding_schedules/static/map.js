function initialize(stage, current, next, after) {
var map;
var infoWindow;  
    
var capetown = new google.maps.LatLng(-34.0535488, 18.5725442132);   
var mapOptions = {
			zoom: 11, 
			center: capetown, 
			mapTypeId: google.maps.MapTypeId.TERRAIN
	};  
map = new google.maps.Map(document.getElementById("map-canvas"),
       mapOptions);

var marker1 = new MarkerWithLabel({
       position: new google.maps.LatLng(-34.0535488, 18.5725442132),
       draggable: true,
       raiseOnDrag: true,
       map: map,
       labelContent: "$425K",
       labelAnchor: new google.maps.Point(22, 0),
       labelClass: "labels", // the CSS class for the label
       labelStyle: {opacity: 0.75}
});

var zones = new Array();

var colours = ["#66CC00", "#33CC66", "#66FF99", "#99FF33", "#FF0000", "#FF9933", "#FFFF33"];

var zoneValues = [1,3,0,3,1,3,2,1,2,2,0,2,0,1,0,2];

if ( stage == 1){
    switch (current) {
    case 1:
        zoneValues[current - 1] = 4;
        break;
    case 2:
        zoneValues[current - 1] = 4;
        break;
    case 3:
        zoneValues[current - 1] = 4;
        break;
    case 4:
        zoneValues[current - 1] = 4;
        break;
    case 5:
        zoneValues[current - 1] = 4;
        break;
    case 6:
        zoneValues[current - 1] = 4;
        break;
    case 7:
        zoneValues[current - 1] = 4;
        break;
    case 8:
        zoneValues[current - 1] = 4;
        break;
    case 9:
        zoneValues[current - 1] = 4;
        break;
    case 10:
        zoneValues[current - 1] = 4;
        break;
    case 11:
        zoneValues[current - 1] = 4;
        break;
    case 12:
        zoneValues[current - 1] = 4;
        break;
    case 13:
        zoneValues[current - 1] = 4;
        break;
    case 14:
        zoneValues[current - 1] = 4;
        break;
    case 15:
        zoneValues[current - 1] = 4;
        break;
    case 16:
        zoneValues[current - 1] = 4;
        break;
    }
    switch (next) {
    case 1:
        zoneValues[next - 1] = 5;
        break;
    case 2:
        zoneValues[next - 1] = 5;
        break;
    case 3:
        zoneValues[next - 1] = 5;
        break;
    case 4:
        zoneValues[next - 1] = 5;
        break;
    case 5:
        zoneValues[next - 1] = 5;
        break;
    case 6:
        zoneValues[next - 1] = 5;
        break;
    case 7:
        zoneValues[next - 1] = 5;
        break;
    case 8:
        zoneValues[next - 1] = 5;
        break;
    case 9:
        zoneValues[next - 1] = 5;
        break;
    case 10:
        zoneValues[next - 1] = 5;
        break;
    case 11:
        zoneValues[next - 1] = 5;
        break;
    case 12:
        zoneValues[next - 1] = 5;
        break;
    case 13:
        zoneValues[next - 1] = 5;
        break;
    case 14:
        zoneValues[next - 1] = 5;
        break;
    case 15:
        zoneValues[next - 1] = 5;
        break;
    case 16:
        zoneValues[next - 1] = 5;
        break;
    }
    switch (after) {
    case 1:
        zoneValues[after - 1] = 6;
        break;
    case 2:
        zoneValues[after - 1] = 6;
        break;
    case 3:
        zoneValues[after - 1] = 6;
        break;
    case 4:
        zoneValues[after - 1] = 6;
        break;
    case 5:
        zoneValues[after - 1] = 6;
        break;
    case 6:
        zoneValues[after - 1] = 6;
        break;
    case 7:
        zoneValues[after - 1] = 6;
        break;
    case 8:
        zoneValues[after - 1] = 6;
        break;
    case 9:
        zoneValues[after - 1] = 6;
        break;
    case 10:
        zoneValues[after - 1] = 6;
        break;
    case 11:
        zoneValues[after - 1] = 6;
        break;
    case 12:
        zoneValues[after - 1] = 6;
        break;
    case 13:
        zoneValues[after - 1] = 6;
        break;
    case 14:
        zoneValues[after - 1] = 6;
        break;
    case 15:
        zoneValues[after - 1] = 6;
        break;
    case 16:
        zoneValues[after - 1] = 6;
        break;
    }
} else if (stage == 2){
    stageTwoCurrentFirst = current[0];
    stageTwoCurrentSecond = current[1];

    stageTwoNextFirst = next[0];
    stageTwoNextSecond = next[1];

    stageTwoAfterFirst = after[0];
    stageTwoAfterSecond = after[1];

    if (stageTwoCurrentFirst == 1 || stageTwoCurrentSecond == 9 || stageTwoCurrentFirst == 9 || stageTwoCurrentSecond == 1){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;        
    } else if (stageTwoCurrentFirst == 2 || stageTwoCurrentSecond == 10 || stageTwoCurrentFirst == 10 || stageTwoCurrentSecond == 2){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    } else if (stageTwoCurrentFirst == 3 || stageTwoCurrentSecond == 11 || stageTwoCurrentFirst == 11 || stageTwoCurrentSecond == 3){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    } else if (stageTwoCurrentFirst == 4 || stageTwoCurrentSecond == 12 || stageTwoCurrentFirst == 12 || stageTwoCurrentSecond == 4){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    } else if (stageTwoCurrentFirst == 5 || stageTwoCurrentSecond == 13 || stageTwoCurrentFirst == 13 || stageTwoCurrentSecond == 5){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    } else if (stageTwoCurrentFirst == 6 || stageTwoCurrentSecond == 14 || stageTwoCurrentFirst == 14 || stageTwoCurrentSecond == 6){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    } else if (stageTwoCurrentFirst == 7 || stageTwoCurrentSecond == 15 || stageTwoCurrentFirst == 15 || stageTwoCurrentSecond == 7){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    } else if (stageTwoCurrentFirst == 8 || stageTwoCurrentSecond == 16 || stageTwoCurrentFirst == 16 || stageTwoCurrentSecond == 8){
        zoneValues[stageTwoCurrentFirst -1] = 4;
        zoneValues[stageTwoCurrentSecond -1] = 4;
    }

if (stageTwoNextFirst == 1 || stageTwoNextSecond == 9 || stageTwoNextFirst == 9 || stageTwoNextSecond == 1){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;        
    } else if (stageTwoNextFirst == 2 || stageTwoNextSecond == 10 || stageTwoNextFirst == 10 || stageTwoNextSecond == 2){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    } else if (stageTwoNextFirst == 3 || stageTwoNextSecond == 11 || stageTwoNextFirst == 11 || stageTwoNextSecond == 3){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    } else if (stageTwoNextFirst == 4 || stageTwoNextSecond == 12 || stageTwoNextFirst == 12 || stageTwoNextSecond == 4){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    } else if (stageTwoNextFirst == 5 || stageTwoNextSecond == 13 || stageTwoNextFirst == 13 || stageTwoNextSecond == 5){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    } else if (stageTwoNextFirst == 6 || stageTwoNextSecond == 14 || stageTwoNextFirst == 14 || stageTwoNextSecond == 6){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    } else if (stageTwoNextFirst == 7 || stageTwoNextSecond == 15 || stageTwoNextFirst == 15 || stageTwoNextSecond == 7){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    } else if (stageTwoNextFirst == 8 || stageTwoNextSecond == 16 || stageTwoNextFirst == 16 || stageTwoNextSecond == 8){
        zoneValues[stageTwoNextFirst -1] = 5;
        zoneValues[stageTwoNextSecond -1] = 5;
    }

if (stageTwoAfterFirst == 1 || stageTwoAfterSecond == 9 || stageTwoAfterFirst == 9 || stageTwoAfterSecond == 1){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;        
    } else if (stageTwoAfterFirst == 2 || stageTwoAfterSecond == 10 || stageTwoAfterFirst == 10 || stageTwoAfterSecond == 2){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    } else if (stageTwoAfterFirst == 3 || stageTwoAfterSecond == 11 || stageTwoAfterFirst == 11 || stageTwoAfterSecond == 3){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    } else if (stageTwoAfterFirst == 4 || stageTwoAfterSecond == 12 || stageTwoAfterFirst == 12 || stageTwoAfterSecond == 4){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    } else if (stageTwoAfterFirst == 5 || stageTwoAfterSecond == 13 || stageTwoAfterFirst == 13 || stageTwoAfterSecond == 5){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    } else if (stageTwoAfterFirst == 6 || stageTwoAfterSecond == 14 || stageTwoAfterFirst == 14 || stageTwoAfterSecond == 6){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    } else if (stageTwoAfterFirst == 7 || stageTwoAfterSecond == 15 || stageTwoAfterFirst == 15 || stageTwoAfterSecond == 7){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    } else if (stageTwoAfterFirst == 8 || stageTwoAfterSecond == 16 || stageTwoAfterFirst == 16 || stageTwoAfterSecond == 8){
        zoneValues[stageTwoAfterFirst -1] = 6;
        zoneValues[stageTwoAfterSecond -1] = 6;
    }
} else if (stage == 3){
    stageFourCurrentFirst = current[0];
    stageThreeCurrentSecond = current[1];
    stageThreeCurrentThird = current[2];

    stageThreeNextFirst = next[0];
    stageThreeNextSecond = next[1];
    stageThreeNextThird = next[2];

    stageThreeAfterFirst = after[0];
    stageThreeAfterSecond = after[1];
    stageThreeAfterThird = after[2];

    if (stageThreeCurrentFirst == 1 ||stageThreeCurrentSecond == 9 || stageThreeCurrentThird == 13){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;
    } else if (stageThreeCurrentFirst == 2 ||stageThreeCurrentSecond == 10 || stageThreeCurrentThird == 14){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 3 ||stageThreeCurrentSecond == 11 || stageThreeCurrentThird == 15){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 4 ||stageThreeCurrentSecond == 12 || stageThreeCurrentThird == 16){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 5 ||stageThreeCurrentSecond == 13 || stageThreeCurrentThird == 1){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 6 ||stageThreeCurrentSecond == 14 || stageThreeCurrentThird == 2){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 7 ||stageThreeCurrentSecond == 15 || stageThreeCurrentThird == 3){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 8 ||stageThreeCurrentSecond == 16 || stageThreeCurrentThird == 4){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 9 ||stageThreeCurrentSecond == 1 || stageThreeCurrentThird == 5){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 10 ||stageThreeCurrentSecond == 2 || stageThreeCurrentThird == 6){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 11 ||stageThreeCurrentSecond == 3 || stageThreeCurrentThird == 7){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 12 ||stageThreeCurrentSecond == 4 || stageThreeCurrentThird == 8){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 13 ||stageThreeCurrentSecond == 5 || stageThreeCurrentThird == 9){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 14 ||stageThreeCurrentSecond == 6 || stageThreeCurrentThird == 10){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 15 ||stageThreeCurrentSecond == 7 || stageThreeCurrentThird == 11){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    } else if (stageThreeCurrentFirst == 16 ||stageThreeCurrentSecond == 8 || stageThreeCurrentThird == 12){
        zoneValues[stageThreeCurrentFirst -1] = 4;
        zoneValues[stageThreeCurrentSecond -1] = 4;
        zoneValues[stageThreeCurrentThird -1] = 4;       
    }

    if (stageThreeNextFirst == 1 ||stageThreeNextSecond == 9 || stageThreeNextThird == 13){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;
    } else if (stageThreeNextFirst == 2 ||stageThreeNextSecond == 10 || stageThreeNextThird == 14){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 3 ||stageThreeNextSecond == 11 || stageThreeNextThird == 15){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 4 ||stageThreeNextSecond == 12 || stageThreeNextThird == 16){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 5 ||stageThreeNextSecond == 13 || stageThreeNextThird == 1){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 6 ||stageThreeNextSecond == 14 || stageThreeNextThird == 2){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 7 ||stageThreeNextSecond == 15 || stageThreeNextThird == 3){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 8 ||stageThreeNextSecond == 16 || stageThreeNextThird == 4){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 9 ||stageThreeNextSecond == 1 || stageThreeNextThird == 5){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 10 ||stageThreeNextSecond == 2 || stageThreeNextThird == 6){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 11 ||stageThreeNextSecond == 3 || stageThreeNextThird == 7){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 12 ||stageThreeNextSecond == 4 || stageThreeNextThird == 8){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 13 ||stageThreeNextSecond == 5 || stageThreeNextThird == 9){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 14 ||stageThreeNextSecond == 6 || stageThreeNextThird == 10){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 15 ||stageThreeNextSecond == 7 || stageThreeNextThird == 11){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    } else if (stageThreeNextFirst == 16 ||stageThreeNextSecond == 8 || stageThreeNextThird == 12){
        zoneValues[stageThreeNextFirst -1] = 5;
        zoneValues[stageThreeNextSecond -1] = 5;
        zoneValues[stageThreeNextThird -1] = 5;       
    }

    if (stageThreeAfterFirst == 1 ||stageThreeAfterSecond == 9 || stageThreeAfterThird == 13){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;
    } else if (stageThreeAfterFirst == 2 ||stageThreeAfterSecond == 10 || stageThreeAfterThird == 14){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 3 ||stageThreeAfterSecond == 11 || stageThreeAfterThird == 15){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 4 ||stageThreeAfterSecond == 12 || stageThreeAfterThird == 16){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 5 ||stageThreeAfterSecond == 13 || stageThreeAfterThird == 1){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 6 ||stageThreeAfterSecond == 14 || stageThreeAfterThird == 2){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 7 ||stageThreeAfterSecond == 15 || stageThreeAfterThird == 3){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 8 ||stageThreeAfterSecond == 16 || stageThreeAfterThird == 4){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 9 ||stageThreeAfterSecond == 1 || stageThreeAfterThird == 5){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 10 ||stageThreeAfterSecond == 2 || stageThreeAfterThird == 6){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 11 ||stageThreeAfterSecond == 3 || stageThreeAfterThird == 7){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 12 ||stageThreeAfterSecond == 4 || stageThreeAfterThird == 8){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 13 ||stageThreeAfterSecond == 5 || stageThreeAfterThird == 9){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 14 ||stageThreeAfterSecond == 6 || stageThreeAfterThird == 10){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 15 ||stageThreeAfterSecond == 7 || stageThreeAfterThird == 11){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    } else if (stageThreeAfterFirst == 16 ||stageThreeAfterSecond == 8 || stageThreeAfterThird == 12){
        zoneValues[stageThreeAfterFirst -1] = 6;
        zoneValues[stageThreeAfterSecond -1] = 6;
        zoneValues[stageThreeAfterThird -1] = 6;       
    }
} else if (stage == 4){
    stageFourCurrentFirst = current[0];
    stageFourCurrentSecond = current[1];
    stageFourCurrentThird = current[2];
    stageFourCurrentFourth = current[3];

    stageFourNextFirst = next[0];
    stageFourNextSecond = next[1];
    stageFourNextThird = next[2];
    stageFourNextFourth = next[3];

    stageFourAfterFirst = after[0];
    stageFourAfterSecond = after[1];
    stageFourAfterThird = after[2];
    stageFourAfterFourth = after[3];

    if (stageFourCurrentFirst == 1){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;
        zoneValues[stageFourCurrentFourth -1] = 4;
    } else if (stageFourCurrentFirst == 2){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;  
        zoneValues[stageFourCurrentFourth -1] = 4;     
    }else if (stageFourCurrentFirst == 3){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4; 
        zoneValues[stageFourCurrentFourth -1] = 4;      
    } else if (stageFourCurrentFirst == 4){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4; 
        zoneValues[stageFourCurrentFourth -1] = 4;      
    } else if (stageFourCurrentFirst == 5){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;   
        zoneValues[stageFourCurrentFourth -1] = 4;    
    } else if (stageFourCurrentFirst == 6){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;  
        zoneValues[stageFourCurrentFourth -1] = 4;     
    } else if (stageFourCurrentFirst == 7){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;   
        zoneValues[stageFourCurrentFourth -1] = 4;    
    } else if (stageFourCurrentFirst == 8){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4; 
        zoneValues[stageFourCurrentFourth -1] = 5;      
    } else if (stageFourCurrentFirst == 9){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;  
        zoneValues[stageFourCurrentFourth -1] = 4;     
    } else if (stageFourCurrentFirst == 10){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;  
        zoneValues[stageFourCurrentFourth -1] = 4;     
    } else if (stageFourCurrentFirst == 11){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4; 
        zoneValues[stageFourCurrentFourth -1] = 4;      
    } else if (stageFourCurrentFirst == 12){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4; 
        zoneValues[stageFourCurrentFourth -1] = 4;      
    } else if (stageFourCurrentFirst == 13){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;  
        zoneValues[stageFourCurrentFourth -1] = 4;     
    } else if (stageFourCurrentFirst == 14){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4; 
        zoneValues[stageFourCurrentFourth -1] = 4;      
    } else if (stageFourCurrentFirst == 15){
        zoneValues[stageFourCurrentFirst -1] = 4;
        zoneValues[stageFourCurrentSecond -1] = 4;
        zoneValues[stageFourCurrentThird -1] = 4;  
        zoneValues[stageFourCurrentFourth -1] = 4;     
    } 

    if (stageFourNextFirst == 1 ||stageFourNextSecond == 9 || stageFourNextThird == 13 || stageFourNextFourth == 5){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;
        zoneValues[stageFourNextFourth -1] = 5;
    } else if (stageFourNextFirst == 2 ||stageFourNextSecond == 10 || stageFourNextThird == 14 || stageFourNextFourth == 6){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    } else if (stageFourNextFirst == 3 ||stageFourNextSecond == 11 || stageFourNextThird == 15 || stageFourNextFourth == 7){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5; 
        zoneValues[stageFourNextFourth -1] = 5;      
    } else if (stageFourNextFirst == 4 ||stageFourNextSecond == 12 || stageFourNextThird == 16 || stageFourNextFourth == 8){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    } else if (stageFourNextFirst == 5 ||stageFourNextSecond == 13 || stageFourNextThird == 1 || stageFourNextFourth == 9){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    } else if (stageFourNextFirst == 6 ||stageFourNextSecond == 14 || stageFourNextThird == 2 || stageFourNextFourth == 10){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5; 
        zoneValues[stageFourNextFourth -1] = 5;      
    } else if (stageFourNextFirst == 7 ||stageFourNextSecond == 15 || stageFourNextThird == 3 || stageFourNextFourth == 11){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    } else if (stageFourNextFirst == 8 ||stageFourNextSecond == 16 || stageFourNextThird == 4 || stageFourNextFourth == 12){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;   
        zoneValues[stageFourNextFourth -1] = 5;    
    } else if (stageFourNextFirst == 9 ||stageFourNextSecond == 1 || stageFourNextThird == 5 || stageFourNextFourth == 13){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;   
        zoneValues[stageFourNextFourth -1] = 5;    
    } else if (stageFourNextFirst == 10 ||stageFourNextSecond == 2 || stageFourNextThird == 6 || stageFourNextFourth == 14){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5; 
        zoneValues[stageFourNextFourth -1] = 5;      
    } else if (stageFourNextFirst == 11 ||stageFourNextSecond == 3 || stageFourNextThird == 7 || stageFourNextFourth == 15){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;   
        zoneValues[stageFourNextFourth -1] = 5;    
    } else if (stageFourNextFirst == 12 ||stageFourNextSecond == 4 || stageFourNextThird == 8 || stageFourNextFourth == 16){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;   
        zoneValues[stageFourNextFourth -1] = 5;    
    } else if (stageFourNextFirst == 13 ||stageFourNextSecond == 5 || stageFourNextThird == 9 || stageFourNextFourth == 1){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    } else if (stageFourNextFirst == 14 ||stageFourNextSecond == 6 || stageFourNextThird == 10 || stageFourNextFourth == 2){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    } else if (stageFourNextFirst == 15 ||stageFourNextSecond == 7 || stageFourNextThird == 11 || stageFourNextFourth == 3){
        zoneValues[stageFourNextFirst -1] = 5;
        zoneValues[stageFourNextSecond -1] = 5;
        zoneValues[stageFourNextThird -1] = 5;  
        zoneValues[stageFourNextFourth -1] = 5;     
    }

    if (stageFourAfterFirst == 1 ||stageFourAfterSecond == 9 || stageFourAfterThird == 13 || stageFourNextFourth == 5){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;
        zoneValues[stageFourAfterFourth -1] = 6;
    } else if (stageFourAfterFirst == 2 ||stageFourAfterSecond == 10 || stageFourAfterThird == 14 || stageFourNextFourth == 6){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;   
        zoneValues[stageFourAfterFourth -1] = 6;    
    } else if (stageFourAfterFirst == 3 ||stageFourAfterSecond == 11 || stageFourAfterThird == 15 || stageFourNextFourth == 7){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;  
        zoneValues[stageFourAfterFourth -1] = 6;     
    } else if (stageFourAfterFirst == 4 ||stageFourAfterSecond == 12 || stageFourAfterThird == 16 || stageFourNextFourth == 8){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    } else if (stageFourAfterFirst == 5 ||stageFourAfterSecond == 13 || stageFourAfterThird == 1 || stageFourNextFourth == 9){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    } else if (stageFourAfterFirst == 6 ||stageFourAfterSecond == 14 || stageFourAfterThird == 2 || stageFourNextFourth == 10){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;  
        zoneValues[stageFourAfterFourth -1] = 6;     
    } else if (stageFourAfterFirst == 7 ||stageFourAfterSecond == 15 || stageFourAfterThird == 3 || stageFourNextFourth == 11){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;   
        zoneValues[stageFourAfterFourth -1] = 6;    
    } else if (stageFourAfterFirst == 8 ||stageFourAfterSecond == 16 || stageFourAfterThird == 4 || stageFourNextFourth == 12){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;  
        zoneValues[stageFourAfterFourth -1] = 6;     
    } else if (stageFourAfterFirst == 9 ||stageFourAfterSecond == 1 || stageFourAfterThird == 5 || stageFourNextFourth == 13){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    } else if (stageFourAfterFirst == 10 ||stageFourAfterSecond == 2 || stageFourAfterThird == 6 || stageFourNextFourth == 14){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;  
        zoneValues[stageFourAfterFourth -1] = 6;     
    } else if (stageFourAfterFirst == 11 ||stageFourAfterSecond == 3 || stageFourAfterThird == 7 || stageFourNextFourth == 15){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    } else if (stageFourAfterFirst == 12 ||stageFourAfterSecond == 4 || stageFourAfterThird == 8 || stageFourNextFourth == 16){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    } else if (stageFourAfterFirst == 13 ||stageFourAfterSecond == 5 || stageFourAfterThird == 9 || stageFourNextFourth == 1){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    } else if (stageFourAfterFirst == 14 ||stageFourAfterSecond == 6 || stageFourAfterThird == 10 || stageFourNextFourth == 2){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6;  
        zoneValues[stageFourAfterFourth -1] = 6;     
    } else if (stageFourAfterFirst == 15 ||stageFourAfterSecond == 7 || stageFourAfterThird == 11 || stageFourNextFourth == 3){
        zoneValues[stageFourAfterFirst -1] = 6;
        zoneValues[stageFourAfterSecond -1] = 6;
        zoneValues[stageFourAfterThird -1] = 6; 
        zoneValues[stageFourAfterFourth -1] = 6;      
    }
}

//zone 11 polygon creation
 zones[0] = new google.maps.Polygon({   
        paths: [   
		  new google.maps.LatLng(-33.999402, 18.454186), new google.maps.LatLng(-33.997872, 18.459561),
		  new google.maps.LatLng(-33.999616, 18.463059), new google.maps.LatLng(-33.996360, 18.468155),
		  new google.maps.LatLng(-33.994217, 18.468327), new google.maps.LatLng(-33.993807, 18.469904),
		  new google.maps.LatLng(-33.994003, 18.472211), new google.maps.LatLng(-33.989902, 18.472093),
		  new google.maps.LatLng(-33.989929, 18.474024), new google.maps.LatLng(-33.991984, 18.474024),
		  new google.maps.LatLng(-33.992313, 18.476953), new google.maps.LatLng(-33.990881, 18.478637),
		  new google.maps.LatLng(-33.990890, 18.480161), new google.maps.LatLng(-33.992446, 18.480032),
		  new google.maps.LatLng(-33.998726, 18.478219), new google.maps.LatLng(-34.002409, 18.478970),
		  new google.maps.LatLng(-34.002773, 18.478916), new google.maps.LatLng(-34.002195, 18.491308),
		  new google.maps.LatLng(-34.005637, 18.492177), new google.maps.LatLng(-34.006037, 18.495074),
		  new google.maps.LatLng(-34.008341, 18.497477), new google.maps.LatLng(-34.008652, 18.499741),
		  new google.maps.LatLng(-34.007940, 18.501833), new google.maps.LatLng(-34.008901, 18.502434),
		  new google.maps.LatLng(-34.009844, 18.500696), new google.maps.LatLng(-34.012885, 18.502413),
		  new google.maps.LatLng(-34.012423, 18.503764), new google.maps.LatLng(-34.014379, 18.504827),
		  new google.maps.LatLng(-34.014495, 18.505438), new google.maps.LatLng(-34.015091, 18.506801),
		  new google.maps.LatLng(-34.017972, 18.499451), new google.maps.LatLng(-34.025735, 18.502123),
		  new google.maps.LatLng(-34.025824, 18.495428), new google.maps.LatLng(-34.034342, 18.477597),
		  new google.maps.LatLng(-34.035835, 18.478476), new google.maps.LatLng(-34.042041, 18.476127),
		  new google.maps.LatLng(-34.043935, 18.479099), new google.maps.LatLng(-34.048602, 18.481502),
		  new google.maps.LatLng(-34.047651, 18.484485), new google.maps.LatLng(-34.052975, 18.485515),
		  new google.maps.LatLng(-34.055260, 18.480633), new google.maps.LatLng(-34.059544, 18.480976),
		  new google.maps.LatLng(-34.065606, 18.476620), new google.maps.LatLng(-34.063633, 18.472082),
		  new google.maps.LatLng(-34.063473, 18.462769), new google.maps.LatLng(-34.064210, 18.460935),
		  new google.maps.LatLng(-34.066521, 18.460463), new google.maps.LatLng(-34.068565, 18.459401),
		  new google.maps.LatLng(-34.068281, 18.458102), new google.maps.LatLng(-34.065743, 18.458821),
		  new google.maps.LatLng(-34.065410, 18.456568), new google.maps.LatLng(-34.062446, 18.453586),
		  new google.maps.LatLng(-34.063726, 18.451209), new google.maps.LatLng(-34.066148, 18.450930), 
		  new google.maps.LatLng(-34.065255, 18.448586), new google.maps.LatLng(-34.061864, 18.448495),
		  new google.maps.LatLng(-34.057389, 18.447690), new google.maps.LatLng(-34.058757, 18.444611), 
		  new google.maps.LatLng(-34.053238, 18.439917), new google.maps.LatLng(-34.047655, 18.430717),
		  new google.maps.LatLng(-34.047237, 18.425052), new google.maps.LatLng(-34.049415, 18.412768),
		  new google.maps.LatLng(-34.046686, 18.407682), new google.maps.LatLng(-34.039627, 18.404335),
		  new google.maps.LatLng(-34.028834, 18.416008), new google.maps.LatLng(-34.023925, 18.411931),
		  new google.maps.LatLng(-34.017434, 18.408991), new google.maps.LatLng(-34.013912, 18.405193),
		  new google.maps.LatLng(-34.013788, 18.395945), new google.maps.LatLng(-34.019868, 18.382665),
		  new google.maps.LatLng(-34.024296, 18.386924), new google.maps.LatLng(-34.025355, 18.383534),
		  new google.maps.LatLng(-34.020579, 18.379285), new google.maps.LatLng(-34.021762, 18.376356),
		  new google.maps.LatLng(-34.024599, 18.375841), new google.maps.LatLng(-34.027080, 18.364737),
		  new google.maps.LatLng(-34.029774, 18.362344), new google.maps.LatLng(-34.036682, 18.364844),
		  new google.maps.LatLng(-34.039492, 18.371432), new google.maps.LatLng(-34.045457, 18.368234),
		  new google.maps.LatLng(-34.048070, 18.363814), new google.maps.LatLng(-34.052044, 18.365069),
		  new google.maps.LatLng(-34.053226, 18.362977), new google.maps.LatLng(-34.047466, 18.360681),
		  new google.maps.LatLng(-34.044781, 18.355124), new google.maps.LatLng(-34.045599, 18.350274),
		  new google.maps.LatLng(-34.048888, 18.347324), new google.maps.LatLng(-34.051795, 18.345371),
		  new google.maps.LatLng(-34.053546, 18.346154), new google.maps.LatLng(-34.053955, 18.348408),
		  new google.maps.LatLng(-34.059057, 18.345425), new google.maps.LatLng(-34.055680, 18.339020),
		  new google.maps.LatLng(-34.055262, 18.335544), new google.maps.LatLng(-34.051182, 18.334782),
		  new google.maps.LatLng(-34.049271, 18.343805), new google.maps.LatLng(-34.043065, 18.345736),
		  new google.maps.LatLng(-34.027684, 18.341305), new google.maps.LatLng(-34.026404, 18.337174),
		  new google.maps.LatLng(-34.023461, 18.337110), new google.maps.LatLng(-34.019744, 18.346519),
		  new google.maps.LatLng(-34.011547, 18.345535), new google.maps.LatLng(-34.011778, 18.342317),
		  new google.maps.LatLng(-34.014526, 18.337059), new google.maps.LatLng(-34.012013, 18.333883),
		  new google.maps.LatLng(-34.009461, 18.337262), new google.maps.LatLng(-34.006455, 18.340277),
		  new google.maps.LatLng(-34.004427, 18.342852), new google.maps.LatLng(-34.000896, 18.341865),
		  new google.maps.LatLng(-34.000264, 18.345534), new google.maps.LatLng(-34.008678, 18.349697),
		  new google.maps.LatLng(-34.012298, 18.364835), new google.maps.LatLng(-34.006366, 18.383761),
		  new google.maps.LatLng(-34.009479, 18.392516), new google.maps.LatLng(-34.009657, 18.404092),
		  new google.maps.LatLng(-34.006828, 18.415379), new google.maps.LatLng(-33.998521, 18.424928),
		  new google.maps.LatLng(-33.996982, 18.423962), new google.maps.LatLng(-33.992401, 18.426880),
		  new google.maps.LatLng(-33.993291, 18.429037), new google.maps.LatLng(-33.984431, 18.436225),
		  new google.maps.LatLng(-33.985222, 18.439455), new google.maps.LatLng(-33.981691, 18.445291),
		  new google.maps.LatLng(-33.982545, 18.451031), new google.maps.LatLng(-33.987126, 18.448317), 
		  new google.maps.LatLng(-33.991085, 18.448917), new google.maps.LatLng(-33.995470, 18.447265)],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[10]],   
        fillOpacity: 0.5
    });
	//zone 1 polygon creation
  zones[1] = new google.maps.Polygon({   
        paths: [   
            new google.maps.LatLng(-33.890008, 18.605848), new google.maps.LatLng(-33.888512, 18.631297),     
            new google.maps.LatLng(-33.885395, 18.631941), new google.maps.LatLng(-33.885555, 18.635074),
            new google.maps.LatLng(-33.881137, 18.635975), new google.maps.LatLng(-33.882224, 18.642176),
            new google.maps.LatLng(-33.881796, 18.644236), new google.maps.LatLng(-33.882206, 18.647476),
            new google.maps.LatLng(-33.880941, 18.650631), new google.maps.LatLng(-33.880941, 18.650631),
            new google.maps.LatLng(-33.873120, 18.649300),//Basalt street
            new google.maps.LatLng(-33.874653, 18.654171),
            new google.maps.LatLng(-33.873833, 18.654879),//visual international 
            new google.maps.LatLng(-33.872515, 18.660437),
            new google.maps.LatLng(-33.869379, 18.669063),//Kuilsriver
            new google.maps.LatLng(-33.885626, 18.674406),
            new google.maps.LatLng(-33.888013, 18.674599),
            new google.maps.LatLng(-33.894550, 18.676873),
            new google.maps.LatLng(-33.897329, 18.677045),
            new google.maps.LatLng(-33.899822, 18.676530),
            new google.maps.LatLng(-33.911273, 18.670264),//big point by vital
            new google.maps.LatLng(-33.910009, 18.674535),//pike ceres
            new google.maps.LatLng(-33.908264, 18.683525),
            new google.maps.LatLng(-33.910383, 18.684963),
            new google.maps.LatLng(-33.911416, 18.682538),
            new google.maps.LatLng(-33.912823, 18.681444),
            new google.maps.LatLng(-33.912751, 18.680328),
  			new google.maps.LatLng(-33.913731, 18.680586),
            new google.maps.LatLng(-33.913766, 18.681036),
            new google.maps.LatLng(-33.915227, 18.681980),
            new google.maps.LatLng(-33.918004, 18.680221),
            new google.maps.LatLng(-33.917595, 18.677539),
            new google.maps.LatLng(-33.919910, 18.676444),
            new google.maps.LatLng(-33.920746, 18.675457),
            new google.maps.LatLng(-33.931127, 18.675457),
            new google.maps.LatLng(-33.932070, 18.670715),
            new google.maps.LatLng(-33.934634, 18.669299),//reutel street
            new google.maps.LatLng(-33.938604, 18.667389),
            new google.maps.LatLng(-33.939280, 18.671659),
            new google.maps.LatLng(-33.941879, 18.673269),
            new google.maps.LatLng(-33.943677, 18.672603),
            new google.maps.LatLng(-33.942841, 18.670093),//isabel street
            new google.maps.LatLng(-33.946917, 18.670007),
            new google.maps.LatLng(-33.946899, 18.666831),//reuter
            new google.maps.LatLng(-33.949338, 18.666938),
            new google.maps.LatLng(-33.946579, 18.661338),
            new google.maps.LatLng(-33.946419, 18.659707),
            new google.maps.LatLng(-33.946419, 18.659321),
            new google.maps.LatLng(-33.955390, 18.656853),
            new google.maps.LatLng(-33.954304, 18.646854),
            new google.maps.LatLng(-33.951011, 18.647197),
  			new google.maps.LatLng(-33.950655, 18.647712),
            new google.maps.LatLng(-33.942502, 18.647734),
            new google.maps.LatLng(-33.941951, 18.647219),
            new google.maps.LatLng(-33.942663, 18.644944),
            new google.maps.LatLng(-33.942609, 18.643163),
            new google.maps.LatLng(-33.942858, 18.643163),
            new google.maps.LatLng(-33.942947, 18.638571),
            new google.maps.LatLng(-33.940704, 18.639065),
            new google.maps.LatLng(-33.936414, 18.637713),
            new google.maps.LatLng(-33.937197, 18.631490),
            new google.maps.LatLng(-33.937500, 18.626662),
            new google.maps.LatLng(-33.938105, 18.625461),
            new google.maps.LatLng(-33.938871, 18.617994),
            new google.maps.LatLng(-33.939138, 18.616942),
            new google.maps.LatLng(-33.939405, 18.613831),
            new google.maps.LatLng(-33.939013, 18.612350),
            new google.maps.LatLng(-33.944710, 18.604561),
            new google.maps.LatLng(-33.944514, 18.603939),
            new google.maps.LatLng(-33.940188, 18.603874),
            new google.maps.LatLng(-33.938568, 18.603231),
            new google.maps.LatLng(-33.934865, 18.602802),
            new google.maps.LatLng(-33.934509, 18.602394),
            new google.maps.LatLng(-33.932141, 18.602673),
            new google.maps.LatLng(-33.929916, 18.598703),
  			new google.maps.LatLng(-33.929542, 18.597244),
            new google.maps.LatLng(-33.930791, 18.593545),
            new google.maps.LatLng(-33.921288, 18.590680),//2nd aveneue
            new google.maps.LatLng(-33.919686, 18.593234), //francie van zyl
            new google.maps.LatLng(-33.915608, 18.592547),//moore street
            new google.maps.LatLng(-33.914522, 18.600572),//settler street
            new google.maps.LatLng(-33.908147, 18.599349),//de kock street
            new google.maps.LatLng(-33.909197, 18.592504),
            new google.maps.LatLng(-33.905404, 18.591968),
            new google.maps.LatLng(-33.906063, 18.588899),
            new google.maps.LatLng(-33.906366, 18.588299),
            new google.maps.LatLng(-33.903819, 18.587505),
            new google.maps.LatLng(-33.902964, 18.595637),
            new google.maps.LatLng(-33.904852, 18.595358),
            new google.maps.LatLng(-33.904117, 18.599542),
            new google.maps.LatLng(-33.905397, 18.600111),
            new google.maps.LatLng(-33.905273, 18.602246),
            new google.maps.LatLng(-33.903848, 18.601849),
            new google.maps.LatLng(-33.902842, 18.606312),//dekra automtive
            new google.maps.LatLng(-33.902619, 18.610411),
            new google.maps.LatLng(-33.894693, 18.610196),//mike pienar
            new google.maps.LatLng(-33.895014, 18.607643),
            new google.maps.LatLng(-33.894934, 18.606280),
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[0]],   
        fillOpacity: 0.5
    });

    if (current == 9){
        colour = "#FF0033";
    }

	//zone 9 polygon creation
  zones[2] = new google.maps.Polygon({   
        paths: [   
            new google.maps.LatLng(-33.969019, 18.538098), //jakes gewel drive 
            new google.maps.LatLng(-33.969926, 18.546510), //Jupiter road  
            new google.maps.LatLng(-33.967684, 18.547390),    
            new google.maps.LatLng(-33.968360, 18.551917), 
            new google.maps.LatLng(-33.963680, 18.553269), 
            new google.maps.LatLng(-33.960903, 18.557582), 
            new google.maps.LatLng(-33.964107, 18.568568), //settlers/steve biko
            new google.maps.LatLng(-33.964783, 18.569984), 
            new google.maps.LatLng(-33.967630, 18.573267), 
            new google.maps.LatLng(-33.972702, 18.577666), 
            new google.maps.LatLng(-33.973040, 18.578224), //settlers way
            new google.maps.LatLng(-33.968449, 18.574941), 
            new google.maps.LatLng(-33.968040, 18.575842), 
            new google.maps.LatLng(-33.968431, 18.580070), 
            new google.maps.LatLng(-33.966972, 18.580327), 
            new google.maps.LatLng(-33.965940, 18.588524), 
            new google.maps.LatLng(-33.962630, 18.588095), 
            new google.maps.LatLng(-33.960779, 18.585198), 
            new google.maps.LatLng(-33.960761, 18.582129), 
            new google.maps.LatLng(-33.958768, 18.581572), 
            new google.maps.LatLng(-33.960031, 18.578804), 
            new google.maps.LatLng(-33.959533, 18.577387), 
            new google.maps.LatLng(-33.958981, 18.575499), 
            new google.maps.LatLng(-33.957664, 18.575456), 
            new google.maps.LatLng(-33.957842, 18.575778), 
            new google.maps.LatLng(-33.957860, 18.578417), 
            new google.maps.LatLng(-33.957522, 18.578825), 
            new google.maps.LatLng(-33.955724, 18.579040), 
            new google.maps.LatLng(-33.955457, 18.578761),
        	new google.maps.LatLng(-33.955066, 18.577688), 
            new google.maps.LatLng(-33.953944, 18.578525), 
            new google.maps.LatLng(-33.951007, 18.572967), 
            new google.maps.LatLng(-33.951096, 18.572302), 
            new google.maps.LatLng(-33.949512, 18.572624), 
            new google.maps.LatLng(-33.949637, 18.566551), 
            new google.maps.LatLng(-33.937176, 18.566551), 
            new google.maps.LatLng(-33.937229, 18.572474), 
            new google.maps.LatLng(-33.932102, 18.568311), 
            new google.maps.LatLng(-33.932102, 18.566723), 
            new google.maps.LatLng(-33.929806, 18.566809), 
            new google.maps.LatLng(-33.929717, 18.566144), 
            new google.maps.LatLng(-33.929147, 18.566680), 
            new google.maps.LatLng(-33.925550, 18.564277), 
            new google.maps.LatLng(-33.927135, 18.560994), 
            new google.maps.LatLng(-33.926993, 18.550823), 
            new google.maps.LatLng(-33.922773, 18.550286), 
            new google.maps.LatLng(-33.923343, 18.543034), 
            new google.maps.LatLng(-33.919407, 18.542111), 
            new google.maps.LatLng(-33.918749, 18.542218), 
            new google.maps.LatLng(-33.917413, 18.541703), 
            new google.maps.LatLng(-33.916647, 18.542025), //elsieskraal river
            new google.maps.LatLng(-33.916808, 18.541145), 
            new google.maps.LatLng(-33.918588, 18.535759),
            new google.maps.LatLng(-33.922844, 18.501427),//train line 
            new google.maps.LatLng(-33.925408, 18.499861),//SAPS 
            new google.maps.LatLng(-33.927758, 18.500483), 
            new google.maps.LatLng(-33.929378, 18.498766), //
            new google.maps.LatLng(-33.929734, 18.499410), 
            new google.maps.LatLng(-33.929093, 18.500183), 
            new google.maps.LatLng(-33.930113, 18.502918), 
            new google.maps.LatLng(-33.932035, 18.501170), 
            new google.maps.LatLng(-33.933887, 18.496567), 
            new google.maps.LatLng(-33.933709, 18.492447), //oude molen close
            new google.maps.LatLng(-33.933709, 18.492447), 
            new google.maps.LatLng(-33.943180, 18.490494), //park road by SKA
            new google.maps.LatLng(-33.943500, 18.491900), 
            new google.maps.LatLng(-33.944461, 18.493252), 
            new google.maps.LatLng(-33.945565, 18.493520), 
            new google.maps.LatLng(-33.946188, 18.492748), 
            new google.maps.LatLng(-33.950594, 18.499560), 
            new google.maps.LatLng(-33.947692, 18.509055), 
            new google.maps.LatLng(-33.946615, 18.511609), 
            new google.maps.LatLng(-33.941960, 18.518443), //molokene primarys 
            new google.maps.LatLng(-33.942210, 18.518840), 
            new google.maps.LatLng(-33.944630, 18.516630), 
            new google.maps.LatLng(-33.947630, 18.516673), //langa stadium
            new google.maps.LatLng(-33.947728, 18.519140),
        	new google.maps.LatLng(-33.947897, 18.519151), 
            new google.maps.LatLng(-33.950335, 18.525310),//setllers 
            new google.maps.LatLng(-33.955595, 18.541081), //jakes
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[8]],   
        fillOpacity: 0.5
    });

	//zone 4 polygon creation
  zones[3] = new google.maps.Polygon({   
        paths: [   
            new google.maps.LatLng(-34.073735, 18.667778), //baden powel
            new google.maps.LatLng(-34.073166, 18.646749), 
            new google.maps.LatLng(-34.074410, 18.630656), 
            new google.maps.LatLng(-34.075903, 18.621472),
            new google.maps.LatLng(-34.075441, 18.614305),
            new google.maps.LatLng(-34.079422, 18.590444),
            new google.maps.LatLng(-34.081164, 18.582376),//corner with brown
            new google.maps.LatLng(-34.078107, 18.580574),  
            new google.maps.LatLng(-34.084718, 18.552765),
            new google.maps.LatLng(-34.079316, 18.545941),
            new google.maps.LatLng(-34.072100, 18.539675),//punt road
            new google.maps.LatLng(-34.063106, 18.534182),
            new google.maps.LatLng(-34.061364, 18.538688),
            new google.maps.LatLng(-34.042127, 18.533839),  
            new google.maps.LatLng(-34.039389, 18.558902),//ollieboom road
            new google.maps.LatLng(-34.053862, 18.564695),
            new google.maps.LatLng(-34.051835, 18.572978), 
            new google.maps.LatLng(-34.048777, 18.583664),
            new google.maps.LatLng(-34.056848, 18.588685),
            new google.maps.LatLng(-34.054395, 18.594178),
            new google.maps.LatLng(-34.047141, 18.590444),
            new google.maps.LatLng(-34.043052, 18.590273), 
            new google.maps.LatLng(-34.043159, 18.592461),
            new google.maps.LatLng(-34.038073, 18.592547),
            new google.maps.LatLng(-34.037860, 18.594822),  
            new google.maps.LatLng(-34.027760, 18.588556),
            new google.maps.LatLng(-34.027582, 18.584694),
            new google.maps.LatLng(-34.029076, 18.577312), //jakes gerwek
            new google.maps.LatLng(-34.024523, 18.573922),//R300
            new google.maps.LatLng(-34.021677, 18.589114),
            new google.maps.LatLng(-34.012891, 18.592848),  
            new google.maps.LatLng(-34.013105, 18.590702),//dogleg - railroad line
            new google.maps.LatLng(-34.008729, 18.590788),
            new google.maps.LatLng(-34.008765, 18.592719),
            new google.maps.LatLng(-34.002681, 18.592161),//tShiti street
            new google.maps.LatLng(-34.003891, 18.583535),
            new google.maps.LatLng(-34.001614, 18.582763),  
            new google.maps.LatLng(-34.000902, 18.588256),
            new google.maps.LatLng(-34.000298, 18.588299),
            new google.maps.LatLng(-33.999337, 18.592461), 
            new google.maps.LatLng(-34.012536, 18.594264),
            new google.maps.LatLng(-34.018690, 18.603362),
            new google.maps.LatLng(-34.021286, 18.604091),  
            new google.maps.LatLng(-34.021002, 18.606538),
            new google.maps.LatLng(-34.019508, 18.606752),
            new google.maps.LatLng(-34.017373, 18.615807), 
            new google.maps.LatLng(-34.019579, 18.618854),
            new google.maps.LatLng(-34.018654, 18.631858),
            new google.maps.LatLng(-34.040954, 18.634175),  
            new google.maps.LatLng(-34.043088, 18.635591),
            new google.maps.LatLng(-34.046892, 18.640012),
            new google.maps.LatLng(-34.045363, 18.645891),
            new google.maps.LatLng(-34.057986, 18.657092),
            new google.maps.LatLng(-34.061648, 18.652414),
            new google.maps.LatLng(-34.071318, 18.667992),                                         
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[3]],   
        fillOpacity: 0.5
    });

	//zone 3 polygon creation
  zones[4] = new google.maps.Polygon({   
        paths: [   
			new google.maps.LatLng(-34.174790, 18.844374), new google.maps.LatLng(-34.169606, 18.857378), 
			new google.maps.LatLng(-34.157674, 18.887934), new google.maps.LatLng(-34.151566, 18.884028),
			new google.maps.LatLng(-34.150962, 18.883942), new google.maps.LatLng(-34.147943, 18.888363), 
			new google.maps.LatLng(-34.145883, 18.887504), new google.maps.LatLng(-34.143646, 18.885230),
			new google.maps.LatLng(-34.145351, 18.879179), new google.maps.LatLng(-34.132635, 18.873171),
			new google.maps.LatLng(-34.128016, 18.868064), new google.maps.LatLng(-34.128265, 18.867463),
			new google.maps.LatLng(-34.125956, 18.864802), new google.maps.LatLng(-34.126666, 18.863086),
			new google.maps.LatLng(-34.128691, 18.864673), new google.maps.LatLng(-34.130858, 18.861240),
			new google.maps.LatLng(-34.128478, 18.859266), new google.maps.LatLng(-34.122936, 18.868321), 
			new google.maps.LatLng(-34.122185, 18.866977), new google.maps.LatLng(-34.120622, 18.869295), 
			new google.maps.LatLng(-34.117104, 18.865003), new google.maps.LatLng(-34.121155, 18.857536),
			new google.maps.LatLng(-34.117211, 18.853201), new google.maps.LatLng(-34.115896, 18.855476),
			new google.maps.LatLng(-34.116109, 18.856506), new google.maps.LatLng(-34.113978, 18.859725),
			new google.maps.LatLng(-34.114404, 18.860368), new google.maps.LatLng(-34.113231, 18.862772),
			new google.maps.LatLng(-34.115612, 18.867535), new google.maps.LatLng(-34.114688, 18.871054),
			new google.maps.LatLng(-34.114333, 18.870582), new google.maps.LatLng(-34.104135, 18.879337),  
			new google.maps.LatLng(-34.100972, 18.874573), new google.maps.LatLng(-34.096210, 18.881053), 
			new google.maps.LatLng(-34.094007, 18.880109), new google.maps.LatLng(-34.091768, 18.876504),
			new google.maps.LatLng(-34.092230, 18.874917), new google.maps.LatLng(-34.088818, 18.868522),
			new google.maps.LatLng(-34.091661, 18.865776), new google.maps.LatLng(-34.088569, 18.861355),
			new google.maps.LatLng(-34.087610, 18.860454), new google.maps.LatLng(-34.084802, 18.869552),
			new google.maps.LatLng(-34.083522, 18.870024), new google.maps.LatLng(-34.082563, 18.878564),
			new google.maps.LatLng(-34.083416, 18.880581), new google.maps.LatLng(-34.082705, 18.882770),  
			new google.maps.LatLng(-34.077800, 18.881011), new google.maps.LatLng(-34.075774, 18.888049), 
			new google.maps.LatLng(-34.068344, 18.883242), new google.maps.LatLng(-34.054834, 18.880925),
			new google.maps.LatLng(-34.054905, 18.877577), new google.maps.LatLng(-34.056647, 18.875303),
			new google.maps.LatLng(-34.044273, 18.872041), new google.maps.LatLng(-34.043633, 18.863158),
			new google.maps.LatLng(-34.041926, 18.856806), new google.maps.LatLng(-34.048576, 18.840584),
			new google.maps.LatLng(-34.048754, 18.836035), new google.maps.LatLng(-34.048789, 18.834362),
			new google.maps.LatLng(-34.047509, 18.833246), new google.maps.LatLng(-34.044629, 18.830843),
			new google.maps.LatLng(-34.043633, 18.829555), new google.maps.LatLng(-34.043278, 18.827323),
			new google.maps.LatLng(-34.050105, 18.828139), new google.maps.LatLng(-34.049465, 18.825006),
			new google.maps.LatLng(-34.043811, 18.822431), new google.maps.LatLng(-34.041571, 18.817710),
			new google.maps.LatLng(-34.046549, 18.812346), new google.maps.LatLng(-34.047972, 18.810243),
			new google.maps.LatLng(-34.048967, 18.808784), new google.maps.LatLng(-34.049749, 18.809814),
			new google.maps.LatLng(-34.050141, 18.808913), new google.maps.LatLng(-34.049785, 18.807840),
			new google.maps.LatLng(-34.049785, 18.807840), new google.maps.LatLng(-34.053732, 18.813290),
			new google.maps.LatLng(-34.056861, 18.812689), new google.maps.LatLng(-34.059101, 18.813033),
			new google.maps.LatLng(-34.062727, 18.809814), new google.maps.LatLng(-34.066495, 18.804664),
			new google.maps.LatLng(-34.069730, 18.809685), new google.maps.LatLng(-34.085406, 18.815736),
			new google.maps.LatLng(-34.087325, 18.817667), new google.maps.LatLng(-34.086935, 18.818140),
			new google.maps.LatLng(-34.090062, 18.818311), new google.maps.LatLng(-34.094824, 18.817496),
			new google.maps.LatLng(-34.094540, 18.813591), new google.maps.LatLng(-34.097987, 18.812646),
			new google.maps.LatLng(-34.100262, 18.814363), new google.maps.LatLng(-34.101932, 18.813076),
			new google.maps.LatLng(-34.102572, 18.811616), new google.maps.LatLng(-34.111490, 18.819470),
			new google.maps.LatLng(-34.114440, 18.820285), new google.maps.LatLng(-34.118206, 18.824534),
			new google.maps.LatLng(-34.120053, 18.828139), new google.maps.LatLng(-34.124530, 18.830156),
			new google.maps.LatLng(-34.136110, 18.840799), new google.maps.LatLng(-34.147832, 18.851528),
			new google.maps.LatLng(-34.150176, 18.853502), new google.maps.LatLng(-34.152022, 18.855347),
			new google.maps.LatLng(-34.152804, 18.858523), new google.maps.LatLng(-34.155112, 18.861956),
			new google.maps.LatLng(-34.159409, 18.865904), new google.maps.LatLng(-34.162214, 18.864188),
			new google.maps.LatLng(-34.165623, 18.856377), new google.maps.LatLng(-34.167221, 18.856248),
			new google.maps.LatLng(-34.170879, 18.843503), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[2]],   
        fillOpacity: 0.5
    });
	
		//zone 14 polygon creation
  zones[5] = new google.maps.Polygon({   
        paths: [   
        	new google.maps.LatLng(-33.570905, 18.343303), new google.maps.LatLng(-33.566203, 18.341071),
         	new google.maps.LatLng(-33.559060, 18.342080), new google.maps.LatLng(-33.557343, 18.343668),
          	new google.maps.LatLng(-33.549868, 18.360018), new google.maps.LatLng(-33.543180, 18.358602),
          	new google.maps.LatLng(-33.537671, 18.362336), new google.maps.LatLng(-33.522288, 18.373365),
          	new google.maps.LatLng(-33.515813, 18.381176), new google.maps.LatLng(-33.512163, 18.386282),
          	new google.maps.LatLng(-33.512163, 18.386282), new google.maps.LatLng(-33.514775, 18.402719),
          	new google.maps.LatLng(-33.512091, 18.425550), new google.maps.LatLng(-33.498923, 18.440742),
          	new google.maps.LatLng(-33.472293, 18.456492), new google.maps.LatLng(-33.478271, 18.484473),
          	new google.maps.LatLng(-33.482137, 18.497176), new google.maps.LatLng(-33.490477, 18.510479),
          	new google.maps.LatLng(-33.497778, 18.515543), new google.maps.LatLng(-33.504827, 18.525671),
          	new google.maps.LatLng(-33.519748, 18.523139), new google.maps.LatLng(-33.526331, 18.525156),
          	new google.maps.LatLng(-33.528013, 18.537173), new google.maps.LatLng(-33.533236, 18.525371),
          	new google.maps.LatLng(-33.543609, 18.523440), new google.maps.LatLng(-33.552908, 18.533053),
          	new google.maps.LatLng(-33.580657, 18.517003), new google.maps.LatLng(-33.582087, 18.508377),
          	new google.maps.LatLng(-33.580586, 18.507475), new google.maps.LatLng(-33.590918, 18.500652),
          	new google.maps.LatLng(-33.592276, 18.496832), new google.maps.LatLng(-33.628589, 18.445978),
          	new google.maps.LatLng(-33.666440, 18.477177), new google.maps.LatLng(-33.672878, 18.479473),
          	new google.maps.LatLng(-33.679878, 18.480331), new google.maps.LatLng(-33.685770, 18.480031),
          	new google.maps.LatLng(-33.694411, 18.479902), new google.maps.LatLng(-33.698410, 18.479988),
          	new google.maps.LatLng(-33.709192, 18.480761), new google.maps.LatLng(-33.709192, 18.480761),
          	new google.maps.LatLng(-33.725291, 18.459045), new google.maps.LatLng(-33.726826, 18.457114),
          	new google.maps.LatLng(-33.734285, 18.455913), new google.maps.LatLng(-33.749880, 18.455441),
          	new google.maps.LatLng(-33.754519, 18.455827), new google.maps.LatLng(-33.762226, 18.459646),
          	new google.maps.LatLng(-33.774997, 18.466899), new google.maps.LatLng(-33.794615, 18.477027),
          	new google.maps.LatLng(-33.809022, 18.468058), new google.maps.LatLng(-33.806134, 18.463680),
          	new google.maps.LatLng(-33.804101, 18.461964), new google.maps.LatLng(-33.800071, 18.456556),
          	new google.maps.LatLng(-33.798930, 18.458702), new google.maps.LatLng(-33.791334, 18.455483),
          	new google.maps.LatLng(-33.766685, 18.444111), new google.maps.LatLng(-33.755768, 18.441450),
          	new google.maps.LatLng(-33.743671, 18.440120), new google.maps.LatLng(-33.732180, 18.435442),
          	new google.maps.LatLng(-33.719509, 18.444025), new google.maps.LatLng(-33.713726, 18.444240),
          	new google.maps.LatLng(-33.693697, 18.439347), new google.maps.LatLng(-33.683235, 18.455741),
          	new google.maps.LatLng(-33.667413, 18.456041), new google.maps.LatLng(-33.660020, 18.453896),
          	new google.maps.LatLng(-33.651625, 18.449776), new google.maps.LatLng(-33.658626, 18.421065),
            new google.maps.LatLng(-33.643730, 18.409993), new google.maps.LatLng(-33.636548, 18.405659),
          	new google.maps.LatLng(-33.624185, 18.396089), new google.maps.LatLng(-33.620647, 18.389265),
          	new google.maps.LatLng(-33.622541, 18.385553), new google.maps.LatLng(-33.622434, 18.383815),
          	new google.maps.LatLng(-33.620057, 18.383407), new google.maps.LatLng(-33.616948, 18.375940),
          	new google.maps.LatLng(-33.613106, 18.374159), new google.maps.LatLng(-33.611069, 18.371756),
          	new google.maps.LatLng(-33.608210, 18.373107), new google.maps.LatLng(-33.599792, 18.366735),
          	new google.maps.LatLng(-33.599095, 18.364052), new google.maps.LatLng(-33.600078, 18.359568),
          	new google.maps.LatLng(-33.598326, 18.357100), new google.maps.LatLng(-33.595020, 18.361456),
          	new google.maps.LatLng(-33.590873, 18.361113), new google.maps.LatLng(-33.578467, 18.353474),
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[13]],   
        fillOpacity: 0.5
    });

	//zone 7 polygon creation
  zones[6] = new google.maps.Polygon({   
        paths: [   
        	new google.maps.LatLng(-33.990214, 18.348581), new google.maps.LatLng(-33.988969, 18.346800),
        	new google.maps.LatLng(-33.987012, 18.347508), new google.maps.LatLng(-33.985873, 18.349912),
        	new google.maps.LatLng(-33.987029, 18.351907), new google.maps.LatLng(-33.985908, 18.354139),
        	new google.maps.LatLng(-33.984645, 18.354868), new google.maps.LatLng(-33.983133, 18.357915),
        	new google.maps.LatLng(-33.981585, 18.359138), new google.maps.LatLng(-33.980393, 18.362979),
        	new google.maps.LatLng(-33.975357, 18.368730), new google.maps.LatLng(-33.973435, 18.370618),
        	new google.maps.LatLng(-33.969253, 18.370382), new google.maps.LatLng(-33.967385, 18.372120),
        	new google.maps.LatLng(-33.966157, 18.373022), new google.maps.LatLng(-33.959928, 18.371262),
        	new google.maps.LatLng(-33.958664, 18.373537), new google.maps.LatLng(-33.958985, 18.376047),
        	new google.maps.LatLng(-33.957703, 18.376669), new google.maps.LatLng(-33.952684, 18.373751),
        	new google.maps.LatLng(-33.948216, 18.377227), new google.maps.LatLng(-33.946365, 18.376412),
        	new google.maps.LatLng(-33.943019, 18.370897), new google.maps.LatLng(-33.937037, 18.377270),
        	new google.maps.LatLng(-33.932747, 18.376433), new google.maps.LatLng(-33.928296, 18.374545),
        	new google.maps.LatLng(-33.925910, 18.378300), new google.maps.LatLng(-33.924272, 18.376863),
        	new google.maps.LatLng(-33.921815, 18.376884), new google.maps.LatLng(-33.917648, 18.385167),
        	new google.maps.LatLng(-33.914835, 18.386347), new google.maps.LatLng(-33.909314, 18.390982),
        	new google.maps.LatLng(-33.908655, 18.392741), new google.maps.LatLng(-33.908851, 18.393321),
        	new google.maps.LatLng(-33.906322, 18.395659), new google.maps.LatLng(-33.906287, 18.397827),
        	new google.maps.LatLng(-33.905681, 18.398084), new google.maps.LatLng(-33.904399, 18.397548),
        	new google.maps.LatLng(-33.900588, 18.398256), new google.maps.LatLng(-33.900125, 18.399200),
        	new google.maps.LatLng(-33.900623, 18.400831), new google.maps.LatLng(-33.899680, 18.403255),
        	new google.maps.LatLng(-33.899359, 18.404028), new google.maps.LatLng(-33.899519, 18.406775),
        	new google.maps.LatLng(-33.898807, 18.411517), new google.maps.LatLng(-33.900428, 18.413534),
        	new google.maps.LatLng(-33.900410, 18.414864), new google.maps.LatLng(-33.901995, 18.419134),
        	new google.maps.LatLng(-33.900855, 18.423748), new google.maps.LatLng(-33.898451, 18.430442),
        	new google.maps.LatLng(-33.898878, 18.430871), new google.maps.LatLng(-33.901585, 18.426344),
        	new google.maps.LatLng(-33.902583, 18.427395), new google.maps.LatLng(-33.902796, 18.426623),
        	new google.maps.LatLng(-33.901514, 18.424928), new google.maps.LatLng(-33.904933, 18.420228),
        	new google.maps.LatLng(-33.905770, 18.421731), new google.maps.LatLng(-33.906821, 18.419520),
           	new google.maps.LatLng(-33.907533, 18.420014), new google.maps.LatLng(-33.908620, 18.417439),
        	new google.maps.LatLng(-33.909724, 18.418490), new google.maps.LatLng(-33.909706, 18.420743),
        	new google.maps.LatLng(-33.908050, 18.419950), new google.maps.LatLng(-33.907729, 18.420400),
        	new google.maps.LatLng(-33.909101, 18.421323), new google.maps.LatLng(-33.908816, 18.421945),
        	new google.maps.LatLng(-33.907569, 18.421452), new google.maps.LatLng(-33.906732, 18.421409),
        	new google.maps.LatLng(-33.906233, 18.422632), new google.maps.LatLng(-33.908157, 18.423898),
           	new google.maps.LatLng(-33.904488, 18.428533), new google.maps.LatLng(-33.903366, 18.427460),
        	new google.maps.LatLng(-33.903046, 18.428318), new google.maps.LatLng(-33.905521, 18.433189),
        	new google.maps.LatLng(-33.905895, 18.432202), new google.maps.LatLng(-33.907177, 18.433704),
        	new google.maps.LatLng(-33.907391, 18.432502), new google.maps.LatLng(-33.905717, 18.430764),
        	new google.maps.LatLng(-33.909581, 18.425614), new google.maps.LatLng(-33.920034, 18.440012),
        	new google.maps.LatLng(-33.918877, 18.441879), new google.maps.LatLng(-33.918645, 18.442780),
           	new google.maps.LatLng(-33.919910, 18.441708), new google.maps.LatLng(-33.920515, 18.442695),
        	new google.maps.LatLng(-33.920159, 18.445978), new google.maps.LatLng(-33.918325, 18.443703),
        	new google.maps.LatLng(-33.915885, 18.446278), new google.maps.LatLng(-33.911914, 18.441021),
        	new google.maps.LatLng(-33.912164, 18.439819), new google.maps.LatLng(-33.909368, 18.435635),
        	new google.maps.LatLng(-33.908442, 18.437588), new google.maps.LatLng(-33.916135, 18.448381),
        	new google.maps.LatLng(-33.917381, 18.447158), new google.maps.LatLng(-33.919482, 18.450226),
           	new google.maps.LatLng(-33.915440, 18.454926), new google.maps.LatLng(-33.906714, 18.444604),
        	new google.maps.LatLng(-33.905468, 18.445978), new google.maps.LatLng(-33.912431, 18.455033),
        	new google.maps.LatLng(-33.912288, 18.462586), new google.maps.LatLng(-33.912003, 18.465611),//blastrite
        	new google.maps.LatLng(-33.916330, 18.460934), new google.maps.LatLng(-33.917239, 18.460462),
        	new google.maps.LatLng(-33.920907, 18.454346), new google.maps.LatLng(-33.921178, 18.456835),//FW de klerk boulevard
        	new google.maps.LatLng(-33.922798, 18.456642), new google.maps.LatLng(-33.925888, 18.454850),
           	new google.maps.LatLng(-33.925202, 18.449175), new google.maps.LatLng(-33.925825, 18.448070),
        	new google.maps.LatLng(-33.926493, 18.448520), new google.maps.LatLng(-33.927178, 18.447576),
        	new google.maps.LatLng(-33.926075, 18.446257), new google.maps.LatLng(-33.926618, 18.444926),
        	new google.maps.LatLng(-33.932324, 18.445838), new google.maps.LatLng(-33.935163, 18.449883),//Palmerston road
        	new google.maps.LatLng(-33.939193, 18.447830), new google.maps.LatLng(-33.938766, 18.440362),// near walmer
        	new google.maps.LatLng(-33.937760, 18.438013), new google.maps.LatLng(-33.939433, 18.432681),
           	new google.maps.LatLng(-33.940154, 18.432155), new google.maps.LatLng(-33.940724, 18.431576),
        	new google.maps.LatLng(-33.941427, 18.428496), new google.maps.LatLng(-33.948120, 18.420911),
        	new google.maps.LatLng(-33.947016, 18.412736), new google.maps.LatLng(-33.945174, 18.407382),
        	new google.maps.LatLng(-33.941934, 18.400923), new google.maps.LatLng(-33.942246, 18.397887),
        	new google.maps.LatLng(-33.944124, 18.397597), new google.maps.LatLng(-33.949482, 18.407489),
        	new google.maps.LatLng(-33.950781, 18.410987), new google.maps.LatLng(-33.952499, 18.413562),
        	new google.maps.LatLng(-33.955320, 18.419613), new google.maps.LatLng(-33.956477, 18.419109),
        	new google.maps.LatLng(-33.954741, 18.413294), new google.maps.LatLng(-33.951288, 18.408144),
        	new google.maps.LatLng(-33.948004, 18.401835), new google.maps.LatLng(-33.951048, 18.394765),
        	new google.maps.LatLng(-33.958319, 18.392490), new google.maps.LatLng(-33.965598, 18.384422),
        	new google.maps.LatLng(-33.969193, 18.381064), new google.maps.LatLng(-33.967084, 18.375228),
        	new google.maps.LatLng(-33.972841, 18.372578), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[6]],   
        fillOpacity: 0.5
    });

		//zone 2 polygon creation
  zones[7] = new google.maps.Polygon({   
        paths: [   
			new google.maps.LatLng(-33.901885, 18.476626), new google.maps.LatLng(-33.903306, 18.480095),
			new google.maps.LatLng(-33.891872, 18.486554), new google.maps.LatLng(-33.893546, 18.496295),
			new google.maps.LatLng(-33.892388, 18.496596), new google.maps.LatLng(-33.901578, 18.509191),
			new google.maps.LatLng(-33.913759, 18.496424), new google.maps.LatLng(-33.914953, 18.493742),
			new google.maps.LatLng(-33.917463, 18.494622), new google.maps.LatLng(-33.919084, 18.493871),
			new google.maps.LatLng(-33.924301, 18.495137), new google.maps.LatLng(-33.925632, 18.498205),
			new google.maps.LatLng(-33.927644, 18.496188),
			new google.maps.LatLng(-33.933715, 18.492449),
			new google.maps.LatLng(-33.933884, 18.496596),
			new google.maps.LatLng(-33.932032, 18.501161),
			new google.maps.LatLng(-33.930109, 18.502915),
			new google.maps.LatLng(-33.929103, 18.500190),
			new google.maps.LatLng(-33.929744, 18.499337),
			new google.maps.LatLng(-33.929406, 18.498779),
			new google.maps.LatLng(-33.927741, 18.500458),
			new google.maps.LatLng(-33.925365, 18.499852),
			new google.maps.LatLng(-33.922812, 18.501429),
			new google.maps.LatLng(-33.918654, 18.535654),
			new google.maps.LatLng(-33.916936, 18.541104),
			new google.maps.LatLng(-33.910240, 18.539323),
			new google.maps.LatLng(-33.903767, 18.534495),
			new google.maps.LatLng(-33.902262, 18.533734),
			new google.maps.LatLng(-33.900980, 18.533315),
			new google.maps.LatLng(-33.899341, 18.533240),
			new google.maps.LatLng(-33.894924, 18.533315),
			new google.maps.LatLng(-33.890916, 18.532779),
			new google.maps.LatLng(-33.886704, 18.531298),
			new google.maps.LatLng(-33.885688, 18.530000),
			new google.maps.LatLng(-33.886998, 18.525505),
			new google.maps.LatLng(-33.888806, 18.523359),
			new google.maps.LatLng(-33.888351, 18.522651),
			new google.maps.LatLng(-33.887496, 18.522683),
			new google.maps.LatLng(-33.887532, 18.521621),
			new google.maps.LatLng(-33.886062, 18.521964),
			new google.maps.LatLng(-33.885777, 18.522297),
			new google.maps.LatLng(-33.877868, 18.524507),
			new google.maps.LatLng(-33.880077, 18.521717),
			new google.maps.LatLng(-33.880273, 18.521202),
			new google.maps.LatLng(-33.869254, 18.517426),
			new google.maps.LatLng(-33.868185, 18.517093),
			new google.maps.LatLng(-33.867954, 18.516986),
			new google.maps.LatLng(-33.867330, 18.516975),
			new google.maps.LatLng(-33.867294, 18.516546),
			new google.maps.LatLng(-33.864876, 18.516103),
			new google.maps.LatLng(-33.861437, 18.514929),
			new google.maps.LatLng(-33.859650, 18.514022),
			new google.maps.LatLng(-33.852835, 18.518432),
			new google.maps.LatLng(-33.852193, 18.518383),
			new google.maps.LatLng(-33.850803, 18.515454),
			new google.maps.LatLng(-33.849208, 18.516334),
			new google.maps.LatLng(-33.848371, 18.515486),
			new google.maps.LatLng(-33.846816, 18.514548),
			new google.maps.LatLng(-33.849070, 18.510766),
			new google.maps.LatLng(-33.850964, 18.508706),
			new google.maps.LatLng(-33.852701, 18.507300),
			new google.maps.LatLng(-33.853672, 18.506297),
			new google.maps.LatLng(-33.854473, 18.504619),
			new google.maps.LatLng(-33.855418, 18.503547),
			new google.maps.LatLng(-33.856478, 18.502586),
			new google.maps.LatLng(-33.857512, 18.502039),
			new google.maps.LatLng(-33.858919, 18.500982),
			new google.maps.LatLng(-33.859601, 18.500897),
			new google.maps.LatLng(-33.857240, 18.497651),
			new google.maps.LatLng(-33.856999, 18.497989),
			new google.maps.LatLng(-33.856384, 18.497415),
			new google.maps.LatLng(-33.854941, 18.496863),
			new google.maps.LatLng(-33.853164, 18.496535),
			new google.maps.LatLng(-33.851386, 18.495774),
			new google.maps.LatLng(-33.849666, 18.494422),
			new google.maps.LatLng(-33.848250, 18.492737),
			new google.maps.LatLng(-33.846200, 18.490146),
			new google.maps.LatLng(-33.846463, 18.487115),
			new google.maps.LatLng(-33.848352, 18.487620),
			new google.maps.LatLng(-33.850125, 18.488022),
			new google.maps.LatLng(-33.852437, 18.488666),
			new google.maps.LatLng(-33.854349, 18.488848),
			new google.maps.LatLng(-33.857213, 18.489030),
			new google.maps.LatLng(-33.859864, 18.489047),
			new google.maps.LatLng(-33.864260, 18.489229),
			new google.maps.LatLng(-33.865993, 18.489379),
			new google.maps.LatLng(-33.869445, 18.489181),
			new google.maps.LatLng(-33.871855, 18.488886),
			new google.maps.LatLng(-33.875643, 18.488505),
			new google.maps.LatLng(-33.879598, 18.487689),
			new google.maps.LatLng(-33.881334, 18.486885),
			new google.maps.LatLng(-33.883160, 18.486198),
			new google.maps.LatLng(-33.890348, 18.483602),
			new google.maps.LatLng(-33.891212, 18.483376),
			new google.maps.LatLng(-33.891372, 18.482228),
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[1]],   
        fillOpacity: 0.5
    });

	//zone 13 polygon creation
  zones[8] = new google.maps.Polygon({   
        paths: [  
        	new google.maps.LatLng(-33.874480, 18.530100), new google.maps.LatLng(-33.872681, 18.533491),
        	new google.maps.LatLng(-33.872298, 18.534510), new google.maps.LatLng(-33.872253, 18.535272),
        	new google.maps.LatLng(-33.872048, 18.535379), new google.maps.LatLng(-33.871175, 18.537321),
        	new google.maps.LatLng(-33.871229, 18.537557), new google.maps.LatLng(-33.870053, 18.540443),
        	new google.maps.LatLng(-33.868378, 18.543104), new google.maps.LatLng(-33.866481, 18.545861),
        	new google.maps.LatLng(-33.865118, 18.547889), new google.maps.LatLng(-33.862044, 18.551859),
        	new google.maps.LatLng(-33.860271, 18.554798), new google.maps.LatLng(-33.858133, 18.557277),
        	new google.maps.LatLng(-33.859394, 18.561064), new google.maps.LatLng(-33.861603, 18.565119),
        	new google.maps.LatLng(-33.862886, 18.567051), new google.maps.LatLng(-33.859714, 18.573595),
        	new google.maps.LatLng(-33.857131, 18.578681), new google.maps.LatLng(-33.854048, 18.585418),
        	new google.maps.LatLng(-33.854440, 18.586298), new google.maps.LatLng(-33.865220, 18.591534),
        	new google.maps.LatLng(-33.867412, 18.594731), new google.maps.LatLng(-33.876195, 18.595546),
        	new google.maps.LatLng(-33.880666, 18.596598), new google.maps.LatLng(-33.885334, 18.600246),
        	new google.maps.LatLng(-33.887329, 18.599988), new google.maps.LatLng(-33.887667, 18.600632),
        	new google.maps.LatLng(-33.888023, 18.602735), new google.maps.LatLng(-33.887507, 18.603614),
        	new google.maps.LatLng(-33.889626, 18.604687), new google.maps.LatLng(-33.890107, 18.604623),
        	new google.maps.LatLng(-33.889951, 18.605835), new google.maps.LatLng(-33.894974, 18.606157),
        	new google.maps.LatLng(-33.895062, 18.607643), new google.maps.LatLng(-33.894761, 18.610138),
        	new google.maps.LatLng(-33.902700, 18.610390), new google.maps.LatLng(-33.902899, 18.606141),
        	new google.maps.LatLng(-33.903842, 18.601876), new google.maps.LatLng(-33.903851, 18.601860),
        	new google.maps.LatLng(-33.905272, 18.602198), new google.maps.LatLng(-33.905396, 18.600154),
        	new google.maps.LatLng(-33.904092, 18.599596), new google.maps.LatLng(-33.904849, 18.595390),
        	new google.maps.LatLng(-33.902934, 18.595626), new google.maps.LatLng(-33.903811, 18.587483),
        	new google.maps.LatLng(-33.906367, 18.588299), new google.maps.LatLng(-33.906055, 18.588948),
        	new google.maps.LatLng(-33.905436, 18.591972), new google.maps.LatLng(-33.909261, 18.592637),
        	new google.maps.LatLng(-33.908117, 18.599386), new google.maps.LatLng(-33.914532, 18.600576),
        	new google.maps.LatLng(-33.915570, 18.592503), new google.maps.LatLng(-33.919732, 18.593211),
        	new google.maps.LatLng(-33.921263, 18.590604), new google.maps.LatLng(-33.922539, 18.583437),
        	new google.maps.LatLng(-33.915327, 18.579618), new google.maps.LatLng(-33.918158, 18.570992),
        	new google.maps.LatLng(-33.917286, 18.565735), new google.maps.LatLng(-33.910875, 18.567537),
        	new google.maps.LatLng(-33.911107, 18.559877), new google.maps.LatLng(-33.913315, 18.551680),
        	new google.maps.LatLng(-33.916694, 18.542013), new google.maps.LatLng(-33.916645, 18.541981),
        	new google.maps.LatLng(-33.916685, 18.541096), new google.maps.LatLng(-33.916823, 18.541128),
        	new google.maps.LatLng(-33.910308, 18.539277), new google.maps.LatLng(-33.909631, 18.538955),
        	new google.maps.LatLng(-33.908749, 18.538408), new google.maps.LatLng(-33.906532, 18.536767),
        	new google.maps.LatLng(-33.903765, 18.534578), new google.maps.LatLng(-33.903071, 18.534133),
        	new google.maps.LatLng(-33.901321, 18.533677), new google.maps.LatLng(-33.899237, 18.533441),
        	new google.maps.LatLng(-33.894691, 18.533403), new google.maps.LatLng(-33.890968, 18.533033),
            new google.maps.LatLng(-33.886675, 18.531343), new google.maps.LatLng(-33.885656, 18.530120),
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[12]],   
        fillOpacity: 0.5
    });

		//zone 10 polygon creation
  zones[9] = new google.maps.Polygon({   
        paths: [  
        	new google.maps.LatLng(-33.963417, 18.731517), new google.maps.LatLng(-33.954856, 18.718663),
        	new google.maps.LatLng(-33.951919, 18.713106), new google.maps.LatLng(-33.949748, 18.704072),
        	new google.maps.LatLng(-33.949872, 18.700081), new google.maps.LatLng(-33.956120, 18.688000),
        	new google.maps.LatLng(-33.956921, 18.682228), new google.maps.LatLng(-33.956209, 18.673044),
            new google.maps.LatLng(-33.955283, 18.662552), new google.maps.LatLng(-33.955497, 18.656887),
            new google.maps.LatLng(-33.946446, 18.659387), new google.maps.LatLng(-33.946642, 18.661350),
        	new google.maps.LatLng(-33.948039, 18.664236), new google.maps.LatLng(-33.949187, 18.666500),
            new google.maps.LatLng(-33.949427, 18.666929), new google.maps.LatLng(-33.946917, 18.666865),
            new google.maps.LatLng(-33.947042, 18.670030), new google.maps.LatLng(-33.942841, 18.670051),
        	new google.maps.LatLng(-33.943731, 18.672819), new google.maps.LatLng(-33.941924, 18.673398),
            new google.maps.LatLng(-33.939227, 18.671639), new google.maps.LatLng(-33.938593, 18.667396),
            new google.maps.LatLng(-33.934235, 18.669241), new google.maps.LatLng(-33.932124, 18.670687),
        	new google.maps.LatLng(-33.931182, 18.675544), new google.maps.LatLng(-33.920977, 18.675641),
            new google.maps.LatLng(-33.920055, 18.676526), new google.maps.LatLng(-33.917638, 18.677491),
            new google.maps.LatLng(-33.918030, 18.680297), new google.maps.LatLng(-33.915270, 18.682019),
        	new google.maps.LatLng(-33.913747, 18.681064), new google.maps.LatLng(-33.913712, 18.680587),
            new google.maps.LatLng(-33.912787, 18.680289), new google.maps.LatLng(-33.912816, 18.681437),
            new google.maps.LatLng(-33.911398, 18.682564), new google.maps.LatLng(-33.910377, 18.684972),
        	new google.maps.LatLng(-33.910368, 18.685031), new google.maps.LatLng(-33.908236, 18.683513),
            new google.maps.LatLng(-33.909903, 18.674404), new google.maps.LatLng(-33.911110, 18.670376),
            new google.maps.LatLng(-33.899770, 18.676673), new google.maps.LatLng(-33.897664, 18.677183),
        	new google.maps.LatLng(-33.897664, 18.677183), new google.maps.LatLng(-33.887938, 18.674817),
            new google.maps.LatLng(-33.885801, 18.674662), new google.maps.LatLng(-33.869507, 18.669244),
            new google.maps.LatLng(-33.869400, 18.669158), new google.maps.LatLng(-33.864768, 18.668697),
        	new google.maps.LatLng(-33.858451, 18.667752), new google.maps.LatLng(-33.856135, 18.668525),
            new google.maps.LatLng(-33.856170, 18.675928), new google.maps.LatLng(-33.856224, 18.679157),
            new google.maps.LatLng(-33.851216, 18.678664), new google.maps.LatLng(-33.851885, 18.686914),
        	new google.maps.LatLng(-33.850464, 18.686942), new google.maps.LatLng(-33.850374, 18.685107),
            new google.maps.LatLng(-33.849359, 18.683627), new google.maps.LatLng(-33.847176, 18.684614),
            new google.maps.LatLng(-33.847176, 18.684614), new google.maps.LatLng(-33.840724, 18.687243),
        	new google.maps.LatLng(-33.840724, 18.687243), new google.maps.LatLng(-33.840377, 18.682769),
            new google.maps.LatLng(-33.839771, 18.680430), new google.maps.LatLng(-33.836794, 18.675891),
            new google.maps.LatLng(-33.837044, 18.679496), new google.maps.LatLng(-33.835181, 18.679475),
        	new google.maps.LatLng(-33.834842, 18.677608), new google.maps.LatLng(-33.833693, 18.675527),
            new google.maps.LatLng(-33.828212, 18.679132), new google.maps.LatLng(-33.825288, 18.678102),
            new google.maps.LatLng(-33.824780, 18.681492), new google.maps.LatLng(-33.820342, 18.680612),
        	new google.maps.LatLng(-33.807176, 18.679250), new google.maps.LatLng(-33.799838, 18.688927),
            new google.maps.LatLng(-33.800052, 18.688959), new google.maps.LatLng(-33.795256, 18.695386),
            new google.maps.LatLng(-33.805419, 18.702885), new google.maps.LatLng(-33.805366, 18.714322),
        	new google.maps.LatLng(-33.816429, 18.718174), new google.maps.LatLng(-33.816794, 18.718002),
            new google.maps.LatLng(-33.820903, 18.719719), new google.maps.LatLng(-33.822980, 18.720716),
            new google.maps.LatLng(-33.823604, 18.720588), new google.maps.LatLng(-33.826501, 18.721607),
        	new google.maps.LatLng(-33.829754, 18.722669), new google.maps.LatLng(-33.834985, 18.723967),
            new google.maps.LatLng(-33.835119, 18.726135), new google.maps.LatLng(-33.837739, 18.728205),
            new google.maps.LatLng(-33.839129, 18.729589), new google.maps.LatLng(-33.838487, 18.732550),
        	new google.maps.LatLng(-33.838443, 18.734170), new google.maps.LatLng(-33.839022, 18.735179),
            new google.maps.LatLng(-33.839586, 18.736026), new google.maps.LatLng(-33.839586, 18.736026),
            new google.maps.LatLng(-33.837465, 18.741315), new google.maps.LatLng(-33.839051, 18.743652),
        	new google.maps.LatLng(-33.840085, 18.742912), new google.maps.LatLng(-33.839898, 18.735594),
            new google.maps.LatLng(-33.847392, 18.735938), new google.maps.LatLng(-33.851829, 18.735863),
            new google.maps.LatLng(-33.852319, 18.736217), new google.maps.LatLng(-33.854627, 18.733545),
        	new google.maps.LatLng(-33.855945, 18.732311), new google.maps.LatLng(-33.856836, 18.735187),
            new google.maps.LatLng(-33.861264, 18.725177), new google.maps.LatLng(-33.859839, 18.723643),
            new google.maps.LatLng(-33.861968, 18.718525), new google.maps.LatLng(-33.861532, 18.717720),
        	new google.maps.LatLng(-33.869808, 18.704481), new google.maps.LatLng(-33.872124, 18.707056),
            new google.maps.LatLng(-33.876613, 18.710671), new google.maps.LatLng(-33.876987, 18.719340),
            new google.maps.LatLng(-33.882127, 18.719448), new google.maps.LatLng(-33.878600, 18.724673),
        	new google.maps.LatLng(-33.879562, 18.725295), new google.maps.LatLng(-33.885440, 18.726014),
            new google.maps.LatLng(-33.890588, 18.721035), new google.maps.LatLng(-33.890134, 18.712463),
            new google.maps.LatLng(-33.896154, 18.712517), new google.maps.LatLng(-33.896154, 18.712517),
        	new google.maps.LatLng(-33.895415, 18.713804), new google.maps.LatLng(-33.895299, 18.716444),
            new google.maps.LatLng(-33.897917, 18.717559), new google.maps.LatLng(-33.899146, 18.713150),
            new google.maps.LatLng(-33.902121, 18.712967), new google.maps.LatLng(-33.902085, 18.707421),
        	new google.maps.LatLng(-33.900963, 18.705833), new google.maps.LatLng(-33.902753, 18.706133),
            new google.maps.LatLng(-33.904062, 18.702163), new google.maps.LatLng(-33.910099, 18.707807),
            new google.maps.LatLng(-33.912530, 18.708890), new google.maps.LatLng(-33.911755, 18.711379),
        	new google.maps.LatLng(-33.923534, 18.706562), new google.maps.LatLng(-33.925519, 18.704910),
            new google.maps.LatLng(-33.923970, 18.709513), new google.maps.LatLng(-33.924237, 18.713021),
            new google.maps.LatLng(-33.926579, 18.722988), new google.maps.LatLng(-33.928982, 18.729264),
        	new google.maps.LatLng(-33.934243, 18.740036), new google.maps.LatLng(-33.933487, 18.743534),
            new google.maps.LatLng(-33.938026, 18.742482), new google.maps.LatLng(-33.937430, 18.739081),
            new google.maps.LatLng(-33.941088, 18.737204), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[9]],   
        fillOpacity: 0.5
    });

		//zone 8 polygon creation
  zones[10] = new google.maps.Polygon({   
        paths: [  
			new google.maps.LatLng(-34.274234, 18.452943), 
			new google.maps.LatLng(-34.239899, 18.404020), new google.maps.LatLng(-34.228119, 18.377241), 
			new google.maps.LatLng(-34.228119, 18.377241), new google.maps.LatLng(-34.197031, 18.371919),
			new google.maps.LatLng(-34.187659, 18.365739), new google.maps.LatLng(-34.180275, 18.356985),
			new google.maps.LatLng(-34.176800, 18.350839), new google.maps.LatLng(-34.177652, 18.345002),
			new google.maps.LatLng(-34.179995, 18.343543), new google.maps.LatLng(-34.176374, 18.337621),
			new google.maps.LatLng(-34.161816, 18.329295), new google.maps.LatLng(-34.157626, 18.327750),
			new google.maps.LatLng(-34.156205, 18.323201), new google.maps.LatLng(-34.156205, 18.323201),
			new google.maps.LatLng(-34.142212, 18.322944), new google.maps.LatLng(-34.140223, 18.321399),
			new google.maps.LatLng(-34.136813, 18.325090), new google.maps.LatLng(-34.136671, 18.331784),
			new google.maps.LatLng(-34.129708, 18.337192), new google.maps.LatLng(-34.127222, 18.342256),
			new google.maps.LatLng(-34.133900, 18.344487), new google.maps.LatLng(-34.137523, 18.350667),
			new google.maps.LatLng(-34.135747, 18.362254), new google.maps.LatLng(-34.132195, 18.369893),
			new google.maps.LatLng(-34.123385, 18.372211), new google.maps.LatLng(-34.112513, 18.368434),
			new google.maps.LatLng(-34.102208, 18.361396), new google.maps.LatLng(-34.097304, 18.357362),
			new google.maps.LatLng(-34.094872, 18.362722), new google.maps.LatLng(-34.094872, 18.362722),
			new google.maps.LatLng(-34.093192, 18.366812), new google.maps.LatLng(-34.090446, 18.368786),
			new google.maps.LatLng(-34.088705, 18.369301), new google.maps.LatLng(-34.087816, 18.371018),
			new google.maps.LatLng(-34.086217, 18.372906), new google.maps.LatLng(-34.085932, 18.374236),
			new google.maps.LatLng(-34.086430, 18.377283), new google.maps.LatLng(-34.086252, 18.380373),
			new google.maps.LatLng(-34.087496, 18.382433), new google.maps.LatLng(-34.087461, 18.385823),
			new google.maps.LatLng(-34.084866, 18.387669), new google.maps.LatLng(-34.085328, 18.390415),
			new google.maps.LatLng(-34.085328, 18.390415), new google.maps.LatLng(-34.090588, 18.385823),
			new google.maps.LatLng(-34.097625, 18.390458), new google.maps.LatLng(-34.101534, 18.393634),
			new google.maps.LatLng(-34.105230, 18.404921), new google.maps.LatLng(-34.108676, 18.399986),
			new google.maps.LatLng(-34.106687, 18.392003), new google.maps.LatLng(-34.109174, 18.386939),
			new google.maps.LatLng(-34.112656, 18.387712), new google.maps.LatLng(-34.115570, 18.391016),
			new google.maps.LatLng(-34.118589, 18.393033), new google.maps.LatLng(-34.120401, 18.398398),
			new google.maps.LatLng(-34.121929, 18.401874), new google.maps.LatLng(-34.125162, 18.404234),
			new google.maps.LatLng(-34.125162, 18.404234), new google.maps.LatLng(-34.126690, 18.417452),
			new google.maps.LatLng(-34.126690, 18.417452), new google.maps.LatLng(-34.127009, 18.425778),
			new google.maps.LatLng(-34.122355, 18.419812), new google.maps.LatLng(-34.120970, 18.419727),
			new google.maps.LatLng(-34.118518, 18.417109), new google.maps.LatLng(-34.122462, 18.433288),
			new google.maps.LatLng(-34.125020, 18.434919), new google.maps.LatLng(-34.127223, 18.434232),
			new google.maps.LatLng(-34.128501, 18.435176), new google.maps.LatLng(-34.130349, 18.437150),
			new google.maps.LatLng(-34.131166, 18.439682), new google.maps.LatLng(-34.131770, 18.444102),
			new google.maps.LatLng(-34.130988, 18.446248), new google.maps.LatLng(-34.130029, 18.446291),
			new google.maps.LatLng(-34.126228, 18.443115), new google.maps.LatLng(-34.124523, 18.447493),
			new google.maps.LatLng(-34.123599, 18.448995), new google.maps.LatLng(-34.122817, 18.450669),
			new google.maps.LatLng(-34.118767, 18.454059), new google.maps.LatLng(-34.115570, 18.458350),
			new google.maps.LatLng(-34.112585, 18.463071), new google.maps.LatLng(-34.109956, 18.465088),
			new google.maps.LatLng(-34.100077, 18.465346), new google.maps.LatLng(-34.096097, 18.463758),
			new google.maps.LatLng(-34.093431, 18.459552), new google.maps.LatLng(-34.089060, 18.451827),
			new google.maps.LatLng(-34.087674, 18.449038), new google.maps.LatLng(-34.087034, 18.434060),
			new google.maps.LatLng(-34.080423, 18.421057), new google.maps.LatLng(-34.074203, 18.411444),
			new google.maps.LatLng(-34.066702, 18.411658), new google.maps.LatLng(-34.061938, 18.415993),
			new google.maps.LatLng(-34.058702, 18.415735), new google.maps.LatLng(-34.049742, 18.412731),
			new google.maps.LatLng(-34.047324, 18.425075), new google.maps.LatLng(-34.047645, 18.430842),
			new google.maps.LatLng(-34.053174, 18.439559), new google.maps.LatLng(-34.058671, 18.444735),
			new google.maps.LatLng(-34.057800, 18.447707), new google.maps.LatLng(-34.062151, 18.448555),
			new google.maps.LatLng(-34.064226, 18.448550), new google.maps.LatLng(-34.065417, 18.448625),
			new google.maps.LatLng(-34.066244, 18.450937), new google.maps.LatLng(-34.063733, 18.451264),
			new google.maps.LatLng(-34.062507, 18.453533), new google.maps.LatLng(-34.062484, 18.453576),
			new google.maps.LatLng(-34.065453, 18.456580), new google.maps.LatLng(-34.065720, 18.458769),
			new google.maps.LatLng(-34.068368, 18.458071), new google.maps.LatLng(-34.068535, 18.459032),
			new google.maps.LatLng(-34.068555, 18.459190), new google.maps.LatLng(-34.068577, 18.459286),
			new google.maps.LatLng(-34.068604, 18.459563), 
			new google.maps.LatLng(-34.065981, 18.463210), new google.maps.LatLng(-34.069367, 18.463028),
			new google.maps.LatLng(-34.069158, 18.468055), new google.maps.LatLng(-34.070176, 18.468097),
			new google.maps.LatLng(-34.069904, 18.470023), new google.maps.LatLng(-34.069922, 18.471649),
			new google.maps.LatLng(-34.071637, 18.471912), new google.maps.LatLng(-34.071371, 18.473188),
			new google.maps.LatLng(-34.072757, 18.473231), new google.maps.LatLng(-34.072504, 18.479218),
			new google.maps.LatLng(-34.072828, 18.479835), new google.maps.LatLng(-34.064052, 18.486251),
			new google.maps.LatLng(-34.064807, 18.488150), new google.maps.LatLng(-34.064807, 18.488150),
			new google.maps.LatLng(-34.068145, 18.488750), new google.maps.LatLng(-34.071766, 18.488788),
			new google.maps.LatLng(-34.072015, 18.489244), new google.maps.LatLng(-34.074188, 18.489373),
			new google.maps.LatLng(-34.074424, 18.485757), new google.maps.LatLng(-34.072522, 18.485693),
			new google.maps.LatLng(-34.072651, 18.483354), new google.maps.LatLng(-34.074557, 18.483402),
			new google.maps.LatLng(-34.074721, 18.480876), new google.maps.LatLng(-34.076356, 18.481160),
			new google.maps.LatLng(-34.076614, 18.481460), new google.maps.LatLng(-34.078169, 18.481557),
			new google.maps.LatLng(-34.079573, 18.481348), new google.maps.LatLng(-34.079636, 18.482109),
			new google.maps.LatLng(-34.082808, 18.482206), new google.maps.LatLng(-34.082808, 18.482206),
			new google.maps.LatLng(-34.083528, 18.485607), new google.maps.LatLng(-34.083585, 18.490666),
			new google.maps.LatLng(-34.098830, 18.498433), new google.maps.LatLng(-34.100638, 18.492608),
			new google.maps.LatLng(-34.103729, 18.483445), new google.maps.LatLng(-34.105773, 18.476707),
			new google.maps.LatLng(-34.108420, 18.469948), new google.maps.LatLng(-34.110303, 18.467652),
			new google.maps.LatLng(-34.112417, 18.465914), new google.maps.LatLng(-34.115633, 18.462459),
			new google.maps.LatLng(-34.119168, 18.457760), new google.maps.LatLng(-34.122632, 18.453705),
			new google.maps.LatLng(-34.126753, 18.449563), new google.maps.LatLng(-34.129169, 18.448147),
			new google.maps.LatLng(-34.131069, 18.448126), new google.maps.LatLng(-34.132650, 18.446624),
			new google.maps.LatLng(-34.131975, 18.439564), new google.maps.LatLng(-34.137552, 18.433084),
			new google.maps.LatLng(-34.140855, 18.431904), new google.maps.LatLng(-34.143537, 18.436517),
			new google.maps.LatLng(-34.143537, 18.436517), new google.maps.LatLng(-34.150551, 18.439629),
			new google.maps.LatLng(-34.153837, 18.437461), new google.maps.LatLng(-34.156607, 18.435616),
			new google.maps.LatLng(-34.160797, 18.430724), new google.maps.LatLng(-34.164259, 18.432462),
			new google.maps.LatLng(-34.168183, 18.430917), new google.maps.LatLng(-34.173065, 18.428192),
			new google.maps.LatLng(-34.176953, 18.426368), new google.maps.LatLng(-34.181568, 18.425359),
			new google.maps.LatLng(-34.189733, 18.427483), new google.maps.LatLng(-34.191934, 18.431432),
			new google.maps.LatLng(-34.191082, 18.434951), new google.maps.LatLng(-34.191082, 18.434951),
			new google.maps.LatLng(-34.186379, 18.436453), new google.maps.LatLng(-34.186379, 18.436453),
			new google.maps.LatLng(-34.188313, 18.434200), new google.maps.LatLng(-34.190532, 18.435230),
			new google.maps.LatLng(-34.187408, 18.440337), new google.maps.LatLng(-34.185935, 18.437526),
			new google.maps.LatLng(-34.187475, 18.441726), new google.maps.LatLng(-34.192090, 18.444623),
			new google.maps.LatLng(-34.197893, 18.452691), new google.maps.LatLng(-34.201585, 18.456574),
			new google.maps.LatLng(-34.207264, 18.458870), new google.maps.LatLng(-34.214415, 18.463505),
			new google.maps.LatLng(-34.220927, 18.465351), new google.maps.LatLng(-34.226196, 18.468612),
			new google.maps.LatLng(-34.229869, 18.471766), new google.maps.LatLng(-34.230525, 18.475328),
			new google.maps.LatLng(-34.232849, 18.476015), new google.maps.LatLng(-34.234499, 18.474642),
			new google.maps.LatLng(-34.239763, 18.476176), new google.maps.LatLng(-34.244056, 18.474159),
			new google.maps.LatLng(-34.249182, 18.475854), new google.maps.LatLng(-34.256046, 18.475210),
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[7]],   
        fillOpacity: 0.5
    });

		//zone 6 polygon creation
  zones[11] = new google.maps.Polygon({   
        paths: [  
        	new google.maps.LatLng(-33.844204, 18.577563), new google.maps.LatLng(-33.838821, 18.577778),
        	new google.maps.LatLng(-33.826558, 18.604772), new google.maps.LatLng(-33.823029, 18.603141),
        	new google.maps.LatLng(-33.820141, 18.604300), new google.maps.LatLng(-33.819285, 18.603742),
   			new google.maps.LatLng(-33.811940, 18.607647), new google.maps.LatLng(-33.807233, 18.608033),
   			new google.maps.LatLng(-33.807233, 18.608033), new google.maps.LatLng(-33.800172, 18.612110),
   			new google.maps.LatLng(-33.786691, 18.618505), new google.maps.LatLng(-33.785692, 18.622539),
   			new google.maps.LatLng(-33.788332, 18.623097), new google.maps.LatLng(-33.784587, 18.624298),
   			new google.maps.LatLng(-33.787512, 18.632281), new google.maps.LatLng(-33.789901, 18.642151),
   			new google.maps.LatLng(-33.785657, 18.644469), new google.maps.LatLng(-33.777631, 18.661763),
   			new google.maps.LatLng(-33.776490, 18.661506), new google.maps.LatLng(-33.775598, 18.667514),
   			new google.maps.LatLng(-33.783017, 18.673608), new google.maps.LatLng(-33.783089, 18.683607),
   			new google.maps.LatLng(-33.783089, 18.683607), new google.maps.LatLng(-33.791934, 18.683006),
   			new google.maps.LatLng(-33.796285, 18.688671), new google.maps.LatLng(-33.799031, 18.688028),
   			new google.maps.LatLng(-33.799780, 18.689058), new google.maps.LatLng(-33.799651, 18.688628),
   			new google.maps.LatLng(-33.807300, 18.679005), new google.maps.LatLng(-33.820323, 18.680517),
   			new google.maps.LatLng(-33.824646, 18.681301), new google.maps.LatLng(-33.825244, 18.678179),
   			new google.maps.LatLng(-33.825350, 18.678093), new google.maps.LatLng(-33.828283, 18.679069),
   			new google.maps.LatLng(-33.833764, 18.675443), new google.maps.LatLng(-33.834905, 18.677588),
   			new google.maps.LatLng(-33.835216, 18.679455), new google.maps.LatLng(-33.837052, 18.679509),
   			new google.maps.LatLng(-33.836731, 18.675936), new google.maps.LatLng(-33.836776, 18.675829),
   			new google.maps.LatLng(-33.839788, 18.680314), new google.maps.LatLng(-33.840519, 18.682706),
   			new google.maps.LatLng(-33.840831, 18.687073), new google.maps.LatLng(-33.849385, 18.683500),
   			new google.maps.LatLng(-33.850365, 18.684927), new google.maps.LatLng(-33.850454, 18.685024),
   			new google.maps.LatLng(-33.850473, 18.686904), new google.maps.LatLng(-33.851810, 18.686872),
   			new google.maps.LatLng(-33.851899, 18.686893), new google.maps.LatLng(-33.851213, 18.678643),
   			new google.maps.LatLng(-33.851266, 18.678557), new google.maps.LatLng(-33.856251, 18.679082),
   			new google.maps.LatLng(-33.856134, 18.668927), new google.maps.LatLng(-33.856134, 18.668680),
   			new google.maps.LatLng(-33.858433, 18.667586), new google.maps.LatLng(-33.869400, 18.668874),
   			new google.maps.LatLng(-33.872455, 18.660441), new google.maps.LatLng(-33.873791, 18.654733),
   			new google.maps.LatLng(-33.874646, 18.654132), new google.maps.LatLng(-33.872892, 18.649422),
   			new google.maps.LatLng(-33.872981, 18.649261), new google.maps.LatLng(-33.880926, 18.650506),
   			new google.maps.LatLng(-33.882164, 18.647405), new google.maps.LatLng(-33.881710, 18.644251),
   			new google.maps.LatLng(-33.882164, 18.642170), new google.maps.LatLng(-33.880958, 18.635831),
   			new google.maps.LatLng(-33.885571, 18.634909), new google.maps.LatLng(-33.885571, 18.634909),
   			new google.maps.LatLng(-33.885295, 18.631926), new google.maps.LatLng(-33.885295, 18.631926),
   			new google.maps.LatLng(-33.888430, 18.631293), new google.maps.LatLng(-33.889820, 18.605866),
   			new google.maps.LatLng(-33.890016, 18.604632), new google.maps.LatLng(-33.889535, 18.604814),
   			new google.maps.LatLng(-33.887469, 18.603634), new google.maps.LatLng(-33.888047, 18.602690),
   			new google.maps.LatLng(-33.887633, 18.600566), new google.maps.LatLng(-33.887290, 18.599992),
   			new google.maps.LatLng(-33.885264, 18.600340), new google.maps.LatLng(-33.880555, 18.596414),
   			new google.maps.LatLng(-33.876119, 18.595588), new google.maps.LatLng(-33.867416, 18.594783),
   			new google.maps.LatLng(-33.865171, 18.591489), new google.maps.LatLng(-33.854315, 18.586232),
   			new google.maps.LatLng(-33.853745, 18.586361), new google.maps.LatLng(-33.849842, 18.581533),
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[5]],   
        fillOpacity: 0.5
    });

		//zone 15 polygon creation
  zones[12] = new google.maps.Polygon({   
        paths: [  
        	new google.maps.LatLng(-33.902147, 18.476497), new google.maps.LatLng(-33.907650, 18.472485),
        	new google.maps.LatLng(-33.907704, 18.471240), new google.maps.LatLng(-33.909378, 18.469996),
        	new google.maps.LatLng(-33.911123, 18.468215), new google.maps.LatLng(-33.912049, 18.465833),
        	new google.maps.LatLng(-33.912138, 18.465339), new google.maps.LatLng(-33.916367, 18.460887),
        	new google.maps.LatLng(-33.917168, 18.460565), new google.maps.LatLng(-33.917257, 18.460512),
        	new google.maps.LatLng(-33.920917, 18.454450), new google.maps.LatLng(-33.921148, 18.456939),
        	new google.maps.LatLng(-33.922840, 18.456649), new google.maps.LatLng(-33.926062, 18.454890),
        	new google.maps.LatLng(-33.925279, 18.449150), new google.maps.LatLng(-33.925822, 18.448120),
        	new google.maps.LatLng(-33.926490, 18.448603), new google.maps.LatLng(-33.927193, 18.447573),
        	new google.maps.LatLng(-33.926093, 18.446237), new google.maps.LatLng(-33.926632, 18.444917),
        	new google.maps.LatLng(-33.932303, 18.445786), new google.maps.LatLng(-33.935253, 18.450029),
        	new google.maps.LatLng(-33.939121, 18.447835), new google.maps.LatLng(-33.940274, 18.449321),
        	new google.maps.LatLng(-33.940096, 18.451076), new google.maps.LatLng(-33.940109, 18.452862),
        	new google.maps.LatLng(-33.940456, 18.455641), new google.maps.LatLng(-33.941431, 18.457491),
        	new google.maps.LatLng(-33.943362, 18.458929), new google.maps.LatLng(-33.943587, 18.462121),
        	new google.maps.LatLng(-33.946426, 18.465887), new google.maps.LatLng(-33.949710, 18.466842),
        	new google.maps.LatLng(-33.953430, 18.468215), new google.maps.LatLng(-33.957693, 18.467110),
        	new google.maps.LatLng(-33.958245, 18.469030), new google.maps.LatLng(-33.957586, 18.471412),
        	new google.maps.LatLng(-33.958832, 18.472099), new google.maps.LatLng(-33.960754, 18.469062),
        	new google.maps.LatLng(-33.963282, 18.467657), new google.maps.LatLng(-33.965204, 18.471970),
        	new google.maps.LatLng(-33.964963, 18.478386), new google.maps.LatLng(-33.969297, 18.487634),
        	new google.maps.LatLng(-33.967063, 18.488643), new google.maps.LatLng(-33.964127, 18.486314),
        	new google.maps.LatLng(-33.961787, 18.486164), new google.maps.LatLng(-33.959838, 18.488471),
        	new google.maps.LatLng(-33.955531, 18.488535), new google.maps.LatLng(-33.955442, 18.490745),
        	new google.maps.LatLng(-33.954418, 18.494329), new google.maps.LatLng(-33.951321, 18.496560),
        	new google.maps.LatLng(-33.950600, 18.499404), new google.maps.LatLng(-33.946239, 18.492709),
        	new google.maps.LatLng(-33.946248, 18.492612), new google.maps.LatLng(-33.945563, 18.493503),
        	new google.maps.LatLng(-33.944486, 18.493256), new google.maps.LatLng(-33.943551, 18.491904),
        	new google.maps.LatLng(-33.943231, 18.490531), new google.maps.LatLng(-33.933805, 18.492290),
        	new google.maps.LatLng(-33.929327, 18.495048), new google.maps.LatLng(-33.927654, 18.496088),
        	new google.maps.LatLng(-33.927591, 18.496110), new google.maps.LatLng(-33.925659, 18.498062),
        	new google.maps.LatLng(-33.924369, 18.495230), new google.maps.LatLng(-33.924395, 18.495176),
        	new google.maps.LatLng(-33.918822, 18.493857), new google.maps.LatLng(-33.917433, 18.494511),
        	new google.maps.LatLng(-33.915012, 18.493728), new google.maps.LatLng(-33.914967, 18.493696),
        	new google.maps.LatLng(-33.913827, 18.496399), new google.maps.LatLng(-33.901513, 18.509231),
        	new google.maps.LatLng(-33.892403, 18.496657), new google.maps.LatLng(-33.893498, 18.496421),
        	new google.maps.LatLng(-33.893614, 18.496389), new google.maps.LatLng(-33.891904, 18.486679),
        	new google.maps.LatLng(-33.903365, 18.480338), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[14]],   
        fillOpacity: 0.5
    });

		//zone 5 polygon creation
  zones[13] = new google.maps.Polygon({   
        paths: [  
			new google.maps.LatLng(-33.984319, 18.436060), new google.maps.LatLng(-33.980903, 18.434365),
			new google.maps.LatLng(-33.961631, 18.451982), new google.maps.LatLng(-33.952376, 18.459063),
			new google.maps.LatLng(-33.951894, 18.464814), new google.maps.LatLng(-33.949852, 18.466799),
			new google.maps.LatLng(-33.953429, 18.468161), new google.maps.LatLng(-33.957596, 18.467056),
			new google.maps.LatLng(-33.957659, 18.467035), new google.maps.LatLng(-33.958277, 18.469046),
			new google.maps.LatLng(-33.957650, 18.471385), new google.maps.LatLng(-33.957636, 18.471380),
			new google.maps.LatLng(-33.958882, 18.472007), new google.maps.LatLng(-33.960809, 18.468875),
			new google.maps.LatLng(-33.963269, 18.467678), new google.maps.LatLng(-33.965245, 18.471975),
			new google.maps.LatLng(-33.964991, 18.478246), new google.maps.LatLng(-33.965022, 18.478321),
			new google.maps.LatLng(-33.969267, 18.487452), new google.maps.LatLng(-33.969333, 18.487613),
			new google.maps.LatLng(-33.967069, 18.488669), new google.maps.LatLng(-33.968390, 18.494897),
			new google.maps.LatLng(-33.970321, 18.494286), new google.maps.LatLng(-33.970437, 18.501131),
			new google.maps.LatLng(-33.972670, 18.501115), new google.maps.LatLng(-33.972670, 18.502096),
			new google.maps.LatLng(-33.973431, 18.502166), new google.maps.LatLng(-33.973987, 18.507069),
			new google.maps.LatLng(-33.971033, 18.507064), new google.maps.LatLng(-33.972359, 18.512101),
			new google.maps.LatLng(-33.972212, 18.521864), new google.maps.LatLng(-33.969173, 18.522621),
			new google.maps.LatLng(-33.970339, 18.526649), new google.maps.LatLng(-33.974481, 18.525169),
			new google.maps.LatLng(-33.973613, 18.521757), new google.maps.LatLng(-33.975846, 18.520545),
			new google.maps.LatLng(-33.976803, 18.524541), new google.maps.LatLng(-33.975766, 18.524750),
			new google.maps.LatLng(-33.977279, 18.531150), new google.maps.LatLng(-33.981990, 18.530598),
			new google.maps.LatLng(-33.981705, 18.541825), new google.maps.LatLng(-33.982626, 18.548112),
			new google.maps.LatLng(-33.983698, 18.547807), new google.maps.LatLng(-33.984036, 18.548531),
			new google.maps.LatLng(-33.985068, 18.548161), new google.maps.LatLng(-33.997557, 18.549040),
			new google.maps.LatLng(-33.998211, 18.543531), new google.maps.LatLng(-33.999243, 18.543896),
			new google.maps.LatLng(-33.999625, 18.542008), new google.maps.LatLng(-34.013804, 18.547474),
			new google.maps.LatLng(-34.015841, 18.548472), new google.maps.LatLng(-34.025765, 18.551004),
			new google.maps.LatLng(-34.034683, 18.554319), new google.maps.LatLng(-34.024440, 18.525598),
			new google.maps.LatLng(-34.023008, 18.522658), new google.maps.LatLng(-34.019104, 18.522004),
			new google.maps.LatLng(-34.019745, 18.518131), new google.maps.LatLng(-34.018411, 18.517530),
			new google.maps.LatLng(-34.018580, 18.516350), new google.maps.LatLng(-34.022652, 18.514301),
			new google.maps.LatLng(-34.023083, 18.513007), new google.maps.LatLng(-34.021429, 18.511752),
			new google.maps.LatLng(-34.020371, 18.513608), new google.maps.LatLng(-34.018664, 18.514155),
			new google.maps.LatLng(-34.015115, 18.506848), new google.maps.LatLng(-34.014526, 18.505491),
			new google.maps.LatLng(-34.014375, 18.504874), new google.maps.LatLng(-34.014362, 18.504805),
			new google.maps.LatLng(-34.012423, 18.503769), new google.maps.LatLng(-34.012801, 18.502428),
			new google.maps.LatLng(-34.012872, 18.502407), new google.maps.LatLng(-34.009853, 18.500674),
			new google.maps.LatLng(-34.008905, 18.502439), new google.maps.LatLng(-34.007980, 18.501854),
			new google.maps.LatLng(-34.007931, 18.501827), new google.maps.LatLng(-34.008664, 18.499741),
			new google.maps.LatLng(-34.008335, 18.497611), new google.maps.LatLng(-34.008286, 18.497509),
			new google.maps.LatLng(-34.005865, 18.494736), new google.maps.LatLng(-34.005669, 18.492118),
			new google.maps.LatLng(-34.002290, 18.491689), new google.maps.LatLng(-34.002112, 18.491367),
			new google.maps.LatLng(-34.002236, 18.479157), new google.maps.LatLng(-33.998683, 18.478224),
			new google.maps.LatLng(-33.992354, 18.480133), new google.maps.LatLng(-33.990851, 18.480176),
			new google.maps.LatLng(-33.990780, 18.478588), new google.maps.LatLng(-33.992292, 18.476893),
			new google.maps.LatLng(-33.991901, 18.474028), new google.maps.LatLng(-33.989890, 18.474028),
			new google.maps.LatLng(-33.989890, 18.472043), new google.maps.LatLng(-33.993840, 18.472108),
			new google.maps.LatLng(-33.993911, 18.472129), new google.maps.LatLng(-33.993840, 18.469919),
			new google.maps.LatLng(-33.994107, 18.468202), new google.maps.LatLng(-33.996366, 18.468160),
			new google.maps.LatLng(-33.999675, 18.463042), new google.maps.LatLng(-33.997914, 18.459501),
			new google.maps.LatLng(-33.999186, 18.454051), new google.maps.LatLng(-33.995414, 18.447292),
			new google.maps.LatLng(-33.991180, 18.448923), new google.maps.LatLng(-33.991047, 18.448966),
			new google.maps.LatLng(-33.987062, 18.448172), new google.maps.LatLng(-33.982676, 18.450993),
			new google.maps.LatLng(-33.982631, 18.451122), new google.maps.LatLng(-33.981679, 18.445286),
			new google.maps.LatLng(-33.985149, 18.439396), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[4]],   
        fillOpacity: 0.5
    });

		//zone 12 polygon creation
  zones[14] = new google.maps.Polygon({   
        paths: [  
			new google.maps.LatLng(-33.972762, 18.577556), new google.maps.LatLng(-33.968544, 18.573887),
			new google.maps.LatLng(-33.966818, 18.572235), new google.maps.LatLng(-33.964816, 18.569853), 
			new google.maps.LatLng(-33.964077, 18.568683), new google.maps.LatLng(-33.962476, 18.562632),
			new google.maps.LatLng(-33.961016, 18.557611), new google.maps.LatLng(-33.963802, 18.553245),
			new google.maps.LatLng(-33.968446, 18.551818), new google.maps.LatLng(-33.967717, 18.547419),
			new google.maps.LatLng(-33.969923, 18.546496), new google.maps.LatLng(-33.969963, 18.546475),
			new google.maps.LatLng(-33.968989, 18.537951), new google.maps.LatLng(-33.955649, 18.540987),
			new google.maps.LatLng(-33.955627, 18.540987), new google.maps.LatLng(-33.947967, 18.519186),
			new google.maps.LatLng(-33.947922, 18.519089), new google.maps.LatLng(-33.947744, 18.519089),
			new google.maps.LatLng(-33.947655, 18.516568), new google.maps.LatLng(-33.944629, 18.516525),
			new google.maps.LatLng(-33.942261, 18.518789), new google.maps.LatLng(-33.942003, 18.518446),
			new google.maps.LatLng(-33.946783, 18.511558), new google.maps.LatLng(-33.947789, 18.508682),
			new google.maps.LatLng(-33.949862, 18.501955), new google.maps.LatLng(-33.950610, 18.499960),
			new google.maps.LatLng(-33.951437, 18.496580), new google.maps.LatLng(-33.954472, 18.494284),
			new google.maps.LatLng(-33.955496, 18.490840), new google.maps.LatLng(-33.955620, 18.488544),
			new google.maps.LatLng(-33.959847, 18.488469), new google.maps.LatLng(-33.961767, 18.486152),
			new google.maps.LatLng(-33.964090, 18.486264), new google.maps.LatLng(-33.967062, 18.488780),
			new google.maps.LatLng(-33.968494, 18.494837), new google.maps.LatLng(-33.970297, 18.494421),
			new google.maps.LatLng(-33.970350, 18.501116), new google.maps.LatLng(-33.972681, 18.501105),
			new google.maps.LatLng(-33.972681, 18.502071), new google.maps.LatLng(-33.973400, 18.502194),
			new google.maps.LatLng(-33.973960, 18.507043), new google.maps.LatLng(-33.970975, 18.507006),
			new google.maps.LatLng(-33.972274, 18.512075), new google.maps.LatLng(-33.972123, 18.521683),
			new google.maps.LatLng(-33.969131, 18.522608),
			new google.maps.LatLng(-33.970376, 18.526556), new google.maps.LatLng(-33.974500, 18.525178),
			new google.maps.LatLng(-33.973522, 18.521551), new google.maps.LatLng(-33.973522, 18.521551),
			new google.maps.LatLng(-33.975790, 18.520586), new google.maps.LatLng(-33.976742, 18.524480),
			new google.maps.LatLng(-33.975724, 18.524690), new google.maps.LatLng(-33.977196, 18.531175),
			new google.maps.LatLng(-33.981862, 18.530746), new google.maps.LatLng(-33.981613, 18.541711),
			new google.maps.LatLng(-33.982530, 18.548631), new google.maps.LatLng(-33.983597, 18.548105),
			new google.maps.LatLng(-33.984024, 18.548604), new google.maps.LatLng(-33.984887, 18.548239),
			new google.maps.LatLng(-33.985141, 18.548191), new google.maps.LatLng(-33.997470, 18.549033),
			new google.maps.LatLng(-33.997586, 18.549044), new google.maps.LatLng(-33.998101, 18.543755),
			new google.maps.LatLng(-33.999316, 18.543808), new google.maps.LatLng(-33.999676, 18.542167),
			new google.maps.LatLng(-34.016167, 18.548577), //new google.maps.LatLng(-34.013593, 18.561130),
			new google.maps.LatLng(-34.013593, 18.561130), new google.maps.LatLng(-34.008519, 18.566741),
			new google.maps.LatLng(-34.002844, 18.566763), new google.maps.LatLng(-34.002764, 18.568565),
			new google.maps.LatLng(-34.002249, 18.573146), new google.maps.LatLng(-34.004552, 18.573404),
			new google.maps.LatLng(-34.004552, 18.573404),
			new google.maps.LatLng(-34.010475, 18.573050), new google.maps.LatLng(-34.010680, 18.570293),
			new google.maps.LatLng(-34.010680, 18.570293), new google.maps.LatLng(-34.011009, 18.569542),
			new google.maps.LatLng(-34.011187, 18.567514), new google.maps.LatLng(-34.012912, 18.569906),
			new google.maps.LatLng(-34.013810, 18.572084), new google.maps.LatLng(-34.013944, 18.577502),
			new google.maps.LatLng(-34.013695, 18.581096), new google.maps.LatLng(-34.013695, 18.581096),
			new google.maps.LatLng(-34.013063, 18.590774), new google.maps.LatLng(-34.008741, 18.590838),
			new google.maps.LatLng(-34.008723, 18.592710), new google.maps.LatLng(-34.002702, 18.592136),
			new google.maps.LatLng(-34.003836, 18.583457), new google.maps.LatLng(-33.983989, 18.580227),
			new google.maps.LatLng(-33.981551, 18.574048), new google.maps.LatLng(-33.979113, 18.575442),
			new google.maps.LatLng(-33.974558, 18.575593), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[11]],   
        fillOpacity: 0.5
    });

		//zone 16 polygon creation
  zones[15] = new google.maps.Polygon({   
        paths: [  
        	new google.maps.LatLng(-34.098540, 18.497615), new google.maps.LatLng(-34.083715, 18.490728),
        	new google.maps.LatLng(-34.083622, 18.490695), new google.maps.LatLng(-34.083551, 18.488850),
        	new google.maps.LatLng(-34.083497, 18.485690),
        	new google.maps.LatLng(-34.082787, 18.482203), new google.maps.LatLng(-34.079641, 18.482096),
        	new google.maps.LatLng(-34.079605, 18.482102), new google.maps.LatLng(-34.079565, 18.481340),
        	new google.maps.LatLng(-34.078215, 18.481603), new google.maps.LatLng(-34.076593, 18.481469),
        	new google.maps.LatLng(-34.076331, 18.481168), new google.maps.LatLng(-34.074731, 18.480916),
        	new google.maps.LatLng(-34.074598, 18.483475), new google.maps.LatLng(-34.072661, 18.483368),
        	new google.maps.LatLng(-34.072549, 18.485744), new google.maps.LatLng(-34.074447, 18.485717),
       		new google.maps.LatLng(-34.074171, 18.489360), new google.maps.LatLng(-34.074167, 18.489408),
        	new google.maps.LatLng(-34.071954, 18.489295), new google.maps.LatLng(-34.071750, 18.488823),
        	new google.maps.LatLng(-34.068168, 18.488716), new google.maps.LatLng(-34.064920, 18.488303),
        	new google.maps.LatLng(-34.064031, 18.486232), new google.maps.LatLng(-34.072794, 18.479822),
        	new google.maps.LatLng(-34.072483, 18.479205), new google.maps.LatLng(-34.072772, 18.473256),
        	new google.maps.LatLng(-34.071345, 18.473180), new google.maps.LatLng(-34.071643, 18.471941),
        	new google.maps.LatLng(-34.069914, 18.471705), new google.maps.LatLng(-34.069843, 18.469978),
        	new google.maps.LatLng(-34.070163, 18.468095), new google.maps.LatLng(-34.069150, 18.468063),
        	new google.maps.LatLng(-34.069350, 18.463042), new google.maps.LatLng(-34.065999, 18.463310),
        	new google.maps.LatLng(-34.068590, 18.459576), new google.maps.LatLng(-34.068555, 18.459448),
        	new google.maps.LatLng(-34.066519, 18.460488), new google.maps.LatLng(-34.064204, 18.460955),
        	new google.maps.LatLng(-34.063431, 18.462795), new google.maps.LatLng(-34.063600, 18.472065),
        	new google.maps.LatLng(-34.065607, 18.476641), new google.maps.LatLng(-34.059443, 18.481056),
        	new google.maps.LatLng(-34.055217, 18.480638), new google.maps.LatLng(-34.052897, 18.485616),
        	new google.maps.LatLng(-34.047554, 18.484431), new google.maps.LatLng(-34.048426, 18.481478),
        	new google.maps.LatLng(-34.043972, 18.479193), new google.maps.LatLng(-34.042007, 18.476071),
        	new google.maps.LatLng(-34.035899, 18.478796), new google.maps.LatLng(-34.034379, 18.477659),
        	new google.maps.LatLng(-34.025852, 18.495511), new google.maps.LatLng(-34.025514, 18.502195),
        	new google.maps.LatLng(-34.017876, 18.499588), new google.maps.LatLng(-34.015172, 18.506862),
        	new google.maps.LatLng(-34.018738, 18.514190), new google.maps.LatLng(-34.020277, 18.513600),
        	new google.maps.LatLng(-34.021282, 18.511723), new google.maps.LatLng(-34.023113, 18.513096),
        	new google.maps.LatLng(-34.022687, 18.514576), new google.maps.LatLng(-34.018712, 18.516465),
        	new google.maps.LatLng(-34.018534, 18.517581), new google.maps.LatLng(-34.019752, 18.518106),
        	new google.maps.LatLng(-34.019183, 18.521926), new google.maps.LatLng(-34.023016, 18.522687),
        	new google.maps.LatLng(-34.024323, 18.525187), new google.maps.LatLng(-34.034619, 18.554316),
        	new google.maps.LatLng(-34.025692, 18.550926), new google.maps.LatLng(-34.016133, 18.549070),
        	new google.maps.LatLng(-34.013527, 18.561236), new google.maps.LatLng(-34.008493, 18.566740),
        	new google.maps.LatLng(-34.002899, 18.566761), new google.maps.LatLng(-34.002268, 18.573188),
        	new google.maps.LatLng(-34.004829, 18.573338), new google.maps.LatLng(-34.010414, 18.573177),
        	new google.maps.LatLng(-34.010655, 18.570399), new google.maps.LatLng(-34.011010, 18.569497),
        	new google.maps.LatLng(-34.011170, 18.567491), new google.maps.LatLng(-34.012816, 18.569766),
        	new google.maps.LatLng(-34.013856, 18.572287), new google.maps.LatLng(-34.013945, 18.577887),
        	new google.maps.LatLng(-34.013109, 18.590976), new google.maps.LatLng(-34.012931, 18.592811),
        	new google.maps.LatLng(-34.021566, 18.589163), new google.maps.LatLng(-34.024385, 18.573692),
        	new google.maps.LatLng(-34.029107, 18.577362), new google.maps.LatLng(-34.027586, 18.584496),
        	new google.maps.LatLng(-34.027764, 18.588584), new google.maps.LatLng(-34.037900, 18.594796),
        	new google.maps.LatLng(-34.037980, 18.592479), new google.maps.LatLng(-34.043181, 18.592521),
        	new google.maps.LatLng(-34.043012, 18.590290), new google.maps.LatLng(-34.047172, 18.590311),
        	new google.maps.LatLng(-34.054426, 18.594345), new google.maps.LatLng(-34.056630, 18.589635),
        	new google.maps.LatLng(-34.048924, 18.583413), new google.maps.LatLng(-34.054706, 18.565045),
        	new google.maps.LatLng(-34.039254, 18.558783), new google.maps.LatLng(-34.042277, 18.533721),
        	new google.maps.LatLng(-34.060864, 18.538441), new google.maps.LatLng(-34.062837, 18.533710),
        	new google.maps.LatLng(-34.072094, 18.540115), new google.maps.LatLng(-34.079843, 18.546080),
        	new google.maps.LatLng(-34.085530, 18.553097), 
   	  	],
        strokeColor: "#FFFFFF",   
        strokeOpacity: 0.8,   
        strokeWeight: 3,   
        fillColor: colours[zoneValues[15]],   
        fillOpacity: 0.5
    });

	for(var i=0,l=zones.length;i<l;i++) {
   		 zones[i].setMap(map);
	}

}