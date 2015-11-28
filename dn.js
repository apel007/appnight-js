$(document).ready(function() {

	$.soap({
    	url: 'https://metrows.drive-now.com/webservices/soap/prod/drivenowapi.soap_server/',
    	method: 'shar:getVehicleListRequest',
    	envAttributes: {
        	'xmlns:shar': 'http://sharing.services.de.drive-now.com/'
    	},
    	
    	data: {
			technicalUser: {
				username: 'technical@hackathon.de',
     	   		password: '87VZr^dC'
     	   	},
     	   	zone: {
				circle: {
					radius: 1000,
                    center: {
                        latitude: 48.1,
                        longitude: 11.5
                    }
				}
     	   	},
     	   	language: 'DE'
    	},

    	success: function (soapResponse) {
            
            jsonResponse = soapResponse.toJSON();
            cars = jsonResponse.Body.getVehicleListResponse.car;
            cars.forEach(function(car) {
                console.log(car.licenceTag);
            });

            alert('take a look at the js console');

		},
    	error: function (SOAPResponse) {
            console.log('ERROR: ' + SOAPResponse);
    	}
	});
	
});