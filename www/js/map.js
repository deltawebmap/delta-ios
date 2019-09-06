var map = {};

map.init = function() {
    //Create map
    map.map = L.map('map_part', {
        crs: L.CRS.Simple,
        minZoom: 0,
        /*maxBounds:L.latLngBounds(L.latLng(-256, 0), L.latLng(0, 256))*/
    }).setView([-128, 128], 2);

    //Temp
    map.addGameMapLayer({
        "url":"https://tile-assets.deltamap.net/extinction/v1/0/{z}_{x}_{y}.png"
    });
}

map.getBounds = function() {
    return [
        [-256, 0],
        [0, 256]
    ];
}

map.addGameMapLayer = function(data) {
    //Create main tile layer
    map.game_map_data = data;
    map.game_map = L.tileLayer(data.url, {
        attribution: 'Studio Wildcard',
        maxNativeZoom: data.maximumZoom,
        maxZoom:12,
        id: 'ark_map',
        opacity: 1,
        zIndex: 1,
        bounds:map.getBounds()
    }).addTo(map.map);
}

map.init();