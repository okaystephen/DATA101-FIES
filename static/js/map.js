mapboxgl.accessToken = "{{mapbox_token}}";
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iravillanueva/cksx86oy5c8s217rwkevw6ydl',
    center: [122.20, 12.38],
    zoom: 5, // starting zoom,     
    minZoom: 5,
    maxZoom: 22
});