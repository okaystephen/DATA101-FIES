mapboxgl.accessToken = 'pk.eyJ1IjoibXVqaXN0ZXBoIiwiYSI6ImNrcnU3cGZhbDAyOGUyeG8zNjBraGQ4ZGoifQ.K6GH5JMv3x8pFQGah822HQ';

// pk.eyJ1IjoibXVqaXN0ZXBoIiwiYSI6ImNrcnU3cGZhbDAyOGUyeG8zNjBraGQ4ZGoifQ.K6GH5JMv3x8pFQGah822HQ

var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/iravillanueva/cksx86oy5c8s217rwkevw6ydl',
    style: 'mapbox://styles/mujisteph/ckrx14qoi1qt917t64gi3439a',
    center: [120.99, 14.56],
    zoom: 12, // starting zoom,     
    minZoom: 2,
    maxZoom: 22
});