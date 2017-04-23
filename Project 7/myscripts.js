function init() {
	var url = document.URL;
	var filename = url.substring(url.lastIndexOf('/')+1);

	if(filename == "reservations.html") {
		var btn = document.getElementById('test');
		btn.style.background = '#90C7E3';
		console.log("in if statement for reservations.html");
	} else {
		console.log("in else statement, filename is not reservations.html");
	}
	
	if(filename == "accommodations.html" || filename == "activities.html") {
		console.log("in if for jquery");
		$('table tr:not(:first-child)').mouseover(function() { 
			//$(this).css("background-color", "pink");
			$(this).addClass('highlight-table-row'); 
		} );
		$('table tr:not(:first-child)').mouseout(function() { 
			//$(this).css("background-color", "white"); 
			$(this).removeClass('highlight-table-row');
		} );
		//$('table tr:not(:first-child)').css("background-color", "pink");
		//$("tbody > ul > li:not(:first)").css("background-color", "pink");
	}
    	
    	setInterval(function() {
    		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var d = new Date();	
		var date = d.toDateString();
		var time = d.toTimeString();
		time = time.slice(0, time.indexOf(" "));
		document.getElementById('dateAndTime').textContent = date + " " + time;
	}, 1000);

}

