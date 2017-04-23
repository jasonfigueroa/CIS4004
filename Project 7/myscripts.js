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
    	
    	setInterval(function() {
    		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var d = new Date();	
		var date = d.toDateString();
		var time = d.toTimeString();
		time = time.slice(0, time.indexOf(" "));
		document.getElementById('dateAndTime').textContent = date + " " + time;
	}, 1000);

}

