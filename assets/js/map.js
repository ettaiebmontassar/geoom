// Initialize the map
var map = L.map('map', {
    center: [20, 0],
    zoom: 2,
    worldCopyJump: true,
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    boxZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false
});

// Add country borders layer
var countryBordersLayer = L.tileLayer.wms('https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv', {
    layers: 'GEBCO_LATEST',
    format: 'image/png',
    transparent: true,
    opacity: 1.0, // Augmenté pour plus de clarté
    attribution: 'Boundaries © GEBCO'
}).addTo(map);

// Add terrain base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 3,
    minZoom: 2,
    opacity: 1.0 // Augmenté pour plus de clarté
}).addTo(map);

// Disable interactions
map.touchZoom.disable();
map.keyboard.disable();

// Global presence locations
const markerLocations = [
    {coords: [40.7128, -74.0060], name: "New York", color: "#64b5f6", 
     details: "North American HQ, Technology Center"},
    {coords: [35.6762, 139.6503], name: "Tokyo", color: "#81c784", 
     details: "Asia-Pacific Regional Office"},
    {coords: [-33.8688, 151.2093], name: "Sydney", color: "#ff8a65", 
     details: "Oceania Research & Development Hub"},
    {coords: [51.5074, -0.1278], name: "London", color: "#ba68c8", 
     details: "European Operations Center"},
    {coords: [4.7110, -74.0721], name: "Bogota", color: "#ffb74d", 
     details: "Latin American Innovation Lab"}
];

// Add markers
markerLocations.forEach(location => {
    const marker = L.circleMarker(location.coords, {
        radius: 10,
        fillColor: location.color,
        color: location.color,
        fillOpacity: 0.8,
        className: 'global-marker'
    }).addTo(map);

    marker.bindTooltip(
        `<strong>${location.name}</strong><br>${location.details}`,
        { permanent: false, direction: 'top' }
    );
});