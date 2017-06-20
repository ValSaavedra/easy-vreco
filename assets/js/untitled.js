function initMap() {
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 5, /*entre + zoom, + localizado */
			center: {lat: -9.1191427, lng: -77.0349046},
			mapTypeControl: false,
			zoomControl: false,
			streetViewControl: false
		}); /*se muestra en el div id= map */

	function buscar(){ /*obtiene ubicacion actual */
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(functionExito, funcionError);
		} /*exito si usuario autoriza ubicacion, error si no */
	}
	document.getElementById("encuentrame").addEventListener("click", buscar);

	var latitud,longitud;

	var functionExito = function(posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

	var miUbicacion = new google.maps.Marker({
		position: {lat: latitud, lng: longitud},
		animation: google.maps.Animation.DROP,
		map: map
	});
	/*marcador de ubicacion*/

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	} /*aumenta profundidad de ubicacion y asigna un nuevo centro*/

	var funcionError = function (error) {
		alert("Tenemos un problema con encontrar tu ubicación");
	} /*mensaje en caso de fallar geolocation */
	
	//autocompletado
	var partida = document.getElementById("origen");
	var llegada = document.getElementById("destino");

	 new google.maps.places.Autocomplete(partida);
	 new google.maps.places.Autocomplete(llegada);

	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

}
   /* function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'WALKING';
        var originInput = document.getElementById('origin-input');
        var destinationInput = document.getElementById('destination-input');
        var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput, {placeIdOnly: true});
        var destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput, {placeIdOnly: true});

        this.setupClickListener('changemode-walking', 'WALKING');
        this.setupClickListener('changemode-transit', 'TRANSIT');
        this.setupClickListener('changemode-driving', 'DRIVING');


        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
      }*/