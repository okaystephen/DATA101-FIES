mapboxgl.accessToken = '{{mapbox_token}}';

d3.json('/token').then(function (data) {
    data.forEach(function (elem) {
        data_select.append('<option value="' + elem.value + '">' + elem.label + '</option>');
    });
});

var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/iravillanueva/cksx86oy5c8s217rwkevw6ydl',
    style: 'mapbox://styles/mujisteph/ckrx14qoi1qt917t64gi3439a',
    center: [120.99, 14.56],
    zoom: 12, // starting zoom,     
    minZoom: 2,
    maxZoom: 22
});