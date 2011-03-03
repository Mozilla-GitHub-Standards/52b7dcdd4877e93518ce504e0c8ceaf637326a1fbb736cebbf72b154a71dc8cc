$(document).ready(function() {
	var process = function(info) {
		if(info.coords) {
		    $('#lat').attr('value', info.coords.latitude);
		    $('#long').attr('value', info.coords.longitude);
		}
		if(info.address) {
		    $('#city').attr('value', info.address.city);
		    $('#country-code').attr('value', info.address.countryCode);
		    $('#country').attr('value', info.address.country);
		}
		$('form').submit();
	}
	
	var geolocateMe = function() {
    	navigator.geolocation.getCurrentPosition(process);
    }
    
    $('#geolocate').click(geolocateMe);
});