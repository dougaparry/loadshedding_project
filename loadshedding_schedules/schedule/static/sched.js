function schedColours(stage) {
	var today = new Date();
	var day = today.getDate();

	if (day > 16){
		day = day - 16;
	}
	var rowNum;

	if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 00, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 02, 30)){
			rowNum = 3;
		} else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 02, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 04, 30)){
			rowNum = 4;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 04, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 06, 30)){
			rowNum = 5;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 06, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 08, 30)){
				rowNum = 6;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 08, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 10, 30)){
				rowNum= 7;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 10, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 12, 30)){
				rowNum = 8;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 12, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 14, 30)){
				rowNum = 9;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 14, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 16, 30)){
				rowNum = 10;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 16, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 18, 30)){
				rowNum = 11;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 18, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 20, 30)){
				rowNum = 12;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 20, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate(), 22, 30)){
				rowNum = 13;
		}else if (today >  new Date(today.getFullYear(), today.getMonth(),today.getDate(), 22, 00) && 
		today < new Date(today.getFullYear(), today.getMonth(),today.getDate()+1, 00, 30)){
				rowNum = 14;
		}

	if (stage == 1){
		var stage1Table = document.getElementById('schedule1table');	
		for(var i = 0, row; row = stage1Table.rows[i];i++){
				for(var j = 0, col; col = row.cells[j]; j++){
				if (day + 1 == j){
					document.getElementById('schedule1table').rows[rowNum].cells[j].style.backgroundColor = "#FF0000";
					document.getElementById('schedule1table').rows[rowNum + 1].cells[j].style.backgroundColor = "#FF9933";
					document.getElementById('schedule1table').rows[rowNum + 2].cells[j].style.backgroundColor = "#FFFF33";
				}
			}
		}	
	} else if (stage == 2){
		var stage2Table = document.getElementById('schedule2table');	
		for(var i = 0, row; row = stage2Table.rows[i];i++){
				for(var j = 0, col; col = row.cells[j]; j++){
				if (day + 1 == j){
					document.getElementById('schedule2table').rows[rowNum].cells[j].style.backgroundColor = "#FF0000";
					document.getElementById('schedule2table').rows[rowNum + 1].cells[j].style.backgroundColor = "#FF9933";
					document.getElementById('schedule2table').rows[rowNum + 2].cells[j].style.backgroundColor ="#FFFF33";
				}
			}
		}	
	} else if (stage == 3){
		var stage3Table = document.getElementById('schedule3table');	
		for(var i = 0, row; row = stage3Table.rows[i];i++){
				for(var j = 0, col; col = row.cells[j]; j++){
				if (day + 1 == j){
					document.getElementById('schedule3table').rows[rowNum].cells[j].style.backgroundColor = "#FF0000";
					document.getElementById('schedule3table').rows[rowNum + 1].cells[j].style.backgroundColor = "#FF9933";
					document.getElementById('schedule3table').rows[rowNum + 2].cells[j].style.backgroundColor = "#FFFF33";
				}
			}
		}			
	} else if (stage == 4){
		var stage4Table = document.getElementById('schedule4table');	
		for(var i = 0, row; row = stage4Table.rows[i];i++){
				for(var j = 0, col; col = row.cells[j]; j++){
				if (day + 1 == j){
					document.getElementById('schedule4table').rows[rowNum].cells[j].style.backgroundColor = "#FF0000";
					document.getElementById('schedule4table').rows[rowNum + 1].cells[j].style.backgroundColor = "#FF9933";
					document.getElementById('schedule4table').rows[rowNum + 2].cells[j].style.backgroundColor = "#FFFF33";
				}
			}
		}			
	}
}