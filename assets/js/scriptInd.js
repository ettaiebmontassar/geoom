const CONFIG = {
    mapbox: {
        accessToken: 'pk.eyJ1Ijoib2JzdGEiLCJhIjoiY20yMWs4OWR0MHR0OTJqc2dkeW94a3c2MCJ9.RcYdNdW5bA5EKCxVs3Quqg',
        style: 'mapbox://styles/mapbox/satellite-v9'
    },
    airport: {
        center: [10.2217, 36.8517] // Example coordinates (Tunis-Carthage Airport)
    },
    layerSets: {

        


    'postgres-layers': [
    //{ id: 'pg-annotation', url: 'http://localhost:3001/geojson/annotation', color: '#1abc9c' },
    { id: 'pg-ref-lines', url: 'http://localhost:3001/geojson/ref_lines', color: '#9b59b6' },
    //{ id: 'pg-points', url: 'http://localhost:3001/geojson/point', color: '#e74c3c' },
    //{ id: 'pg-polygons', url: 'http://localhost:3001/geojson/polygon', color: '#f39c12' },
    //{ id: 'pg-polyline', url: 'http://localhost:3001/geojson/polyline', color: '#3498db' },
    { id: 'pg-poly-area', url: 'http://localhost:3001/geojson/poly_area', color: '#2ecc71' }
  
  ],




        'initial-approach': [
            { id: 'initial-points', url: 'geojson/initial_points.geojson', color: '#3498db' },
            { id: 'initial-lines', url: 'geojson/initial_lines.json', color: '#e74c3c' },
            { id: 'initial-text', url: 'geojson/initial_text.json', color: '#2ecc71' },
            { id: 'initial-polygon', url: 'geojson/initial_polygon.json', color: '#9b59b6' }
        ],
        'intermediate-approach': [
            { id: 'intermediate-points', url: 'geojson/intermediate_points.geojson', color: '#1abc9c' },
            { id: 'intermediate-lines', url: 'geojson/intermediate_lines.json', color: '#f39c12' },
            { id: 'intermediate-text', url: 'geojson/intermediate_text.json', color: '#d35400' },
            { id: 'intermediate-polygon', url: 'geojson/intermediate_polygon.json', color: '#27ae60' }
        ],
        'final-approach': [
            { id: 'final-points', url: 'geojson/final_points.geojson', color: '#e67e22' },
            { id: 'final-lines', url: 'geojson/final_lines.json', color: '#8e44ad' },
            { id: 'final-text', url: 'geojson/final_text.json', color: '#16a085' },
            { id: 'final-polygon', url: 'geojson/final_polygon.json', color: '#c0392b' }
        ],
        'missed-approach': [
            { id: 'missed-points', url: 'geojson/missed_points.geojson', color: '#3498db' },
            { id: 'missed-lines', url: 'geojson/missed_lines.json', color: '#e74c3c' },
            { id: 'missed-text', url: 'geojson/missed_text.json', color: '#2ecc71' },
            { id: 'missed-polygon', url: 'geojson/missed_polygon.json', color: '#9b59b6' }
        ],
        'arrival-msa': [
            { id: 'msa-points', url: 'geojson/msa_points.geojson', color: '#1abc9c' },
            { id: 'msa-lines', url: 'geojson/msa_lines.json', color: '#f39c12' },
            { id: 'msa-text', url: 'geojson/msa_text.json', color: '#d35400' },
            { id: 'msa-polygon', url: 'geojson/msa_polygon.json', color: '#27ae60' }
        ]
    },
    obstacles: {
        geojson: {
            "type": "FeatureCollection",
            "features": [
                { "type": "Feature", "properties": { "name": "Parc d'attractions", "elevation_m": 35.0, "elevation_ft": 114.829, "markings": "LGTD", "type": "park" }, "geometry": { "type": "Point", "coordinates": [10.227194, 36.831972] } },
                { "type": "Feature", "properties": { "name": "TWR", "elevation_m": 38.0, "elevation_ft": 124.672, "markings": "LGTD", "type": "tower" }, "geometry": { "type": "Point", "coordinates": [10.222139, 36.847417] } },
                { "type": "Feature", "properties": { "name": "Pylône", "elevation_m": 27.0, "elevation_ft": 88.5827, "markings": "LGTD", "type": "pylon" }, "geometry": { "type": "Point", "coordinates": [10.236333, 36.882278] } },
                { "type": "Feature", "properties": { "name": "CRD", "elevation_m": 19.0, "elevation_ft": 62.336, "markings": "LGTD", "type": "building" }, "geometry": { "type": "Point", "coordinates": [10.230528, 36.844417] } },
                { "type": "Feature", "properties": { "name": "Minaret", "elevation_m": 45.9, "elevation_ft": 147.6378, "markings": "LGTD", "type": "minaret" }, "geometry": { "type": "Point", "coordinates": [10.199333, 36.859528] } },
                { "type": "Feature", "properties": { "name": "Aérogare", "elevation_m": 27.0, "elevation_ft": 88.5827, "markings": "LGTD", "type": "building" }, "geometry": { "type": "Point", "coordinates": [10.217861, 36.84775] } },
                { "type": "Feature", "properties": { "name": "Pylône", "elevation_m": 247.0, "elevation_ft": 810.367, "markings": "LGTD", "type": "pylon" }, "geometry": { "type": "Point", "coordinates": [10.149111, 36.876722] } },
                { "type": "Feature", "properties": { "name": "Centre de la Navigation Aérienne", "elevation_m": 38.0, "elevation_ft": 124.672, "markings": "LGTD", "type": "building" }, "geometry": { "type": "Point", "coordinates": [10.212028, 36.84975] } },
                { "type": "Feature", "properties": { "name": "Pylône", "elevation_m": 77.5, "elevation_ft": 252.6247, "markings": "LGTD", "type": "pylon" }, "geometry": { "type": "Point", "coordinates": [10.183694, 36.862306] } },
                { "type": "Feature", "properties": { "name": "Cheminée", "elevation_m": 38.0, "elevation_ft": 124.672, "markings": "LGTD", "type": "chimney" }, "geometry": { "type": "Point", "coordinates": [10.220639, 36.858139] } },
                { "type": "Feature", "properties": { "name": "Bâtiment", "elevation_m": 25.0, "elevation_ft": 82.021, "markings": "LGTD", "type": "building" }, "geometry": { "type": "Point", "coordinates": [10.206694, 36.85825] } },
                { "type": "Feature", "properties": { "name": "Colline", "elevation_m": 115.9, "elevation_ft": 377.29659, "markings": "–", "type": "hill" }, "geometry": { "type": "Point", "coordinates": [10.170361, 36.875222] } },
                { "type": "Feature", "properties": { "name": "Bâtiment", "elevation_m": 116.0, "elevation_ft": 380.577, "markings": "not LGTD", "type": "building" }, "geometry": { "type": "Point", "coordinates": [10.16575, 36.87025] } },
                { "type": "Feature", "properties": { "name": "Colline", "elevation_m": 237.0, "elevation_ft": 777.559, "markings": "–", "type": "hill" }, "geometry": { "type": "Point", "coordinates": [10.149056, 36.876722] } },
                { "type": "Feature", "properties": { "name": "Pylône", "elevation_m": 254.0, "elevation_ft": 833.333, "markings": "LGTD", "type": "pylon" }, "geometry": { "type": "Point", "coordinates": [10.145583, 36.843139] } },
                { "type": "Feature", "properties": { "name": "Anémomètre THR 01", "elevation_m": 13.0, "elevation_ft": 42.6509, "markings": "Marked/LGTD", "type": "equipment" }, "geometry": { "type": "Point", "coordinates": [10.226, 36.840083] } },
                { "type": "Feature", "properties": { "name": "Anémomètre THR 19", "elevation_m": 15.0, "elevation_ft": 49.2126, "markings": "Marked/LGTD", "type": "equipment" }, "geometry": { "type": "Point", "coordinates": [10.232222, 36.86325] } },
                { "type": "Feature", "properties": { "name": "Anémomètre THR 11", "elevation_m": 16.0, "elevation_ft": 52.4934, "markings": "Marked/LGTD", "type": "equipment" }, "geometry": { "type": "Point", "coordinates": [10.2195, 36.855278] } },
                { "type": "Feature", "properties": { "name": "Anémomètre DTHR 29", "elevation_m": 14.0, "elevation_ft": 45.9318, "markings": "Marked/LGTD", "type": "equipment" }, "geometry": { "type": "Point", "coordinates": [10.2435, 36.84725] } },
                { "type": "Feature", "properties": { "name": "Anémomètre", "elevation_m": 15.0, "elevation_ft": 49.2126, "markings": "Marked/LGTD", "type": "equipment" }, "geometry": { "type": "Point", "coordinates": [10.224917, 36.850444] } },
                { "type": "Feature", "properties": { "name": "Capteur RVR THR 19", "elevation_m": 9.0, "elevation_ft": 29.5276, "markings": "Marked/LGTD", "type": "equipment" }, "geometry": { "type": "Point", "coordinates": [10.231917, 36.863278] } },
                { "type": "Feature", "properties": { "name": "Drapeau du Belvédère", "elevation_m": 143.0, "elevation_ft": 469.16, "markings": "LGTD", "type": "flag" }, "geometry": { "type": "Point", "coordinates": [10.171139, 36.824528] } }
            ]
        },
        icons: {
            obstacle: 'https://cdn-icons-png.flaticon.com/512/3177/3177449.png' // Lighter warning icon (yellow)
        }
    }
};

// ✅ Version robuste : évite les erreurs si ligne trop courte
function createPerpendicularLine(baseLine, projected, length = 2) {
    let coords = baseLine.geometry.coordinates;

    // Corriger si MultiLineString
    if (baseLine.geometry.type === "MultiLineString") {
        coords = coords.flat();
    }

    if (!coords || coords.length < 2) {
        console.warn("⛔ Ligne trop courte ou invalide");
        return null;
    }

    const segment = turf.nearestPointOnLine(turf.lineString(coords), projected, { units: 'kilometers' });
    const index = segment.properties.index;

    if (index === undefined || index >= coords.length - 1) {
        console.warn("⛔ Index hors limites pour ligne perpendiculaire");
        return null;
    }

    const A = coords[index];
    const B = coords[index + 1];
    const bearing = turf.bearing(A, B);

    const perp1 = turf.destination(projected, length, bearing + 90, { units: 'kilometers' });
    const perp2 = turf.destination(projected, length, bearing - 90, { units: 'kilometers' });

    return turf.lineString([perp1.geometry.coordinates, perp2.geometry.coordinates]);
}




function extend(line, distanceKm) {
    const coords = line.type === 'Feature' ? line.geometry.coordinates : line.coordinates;
    if (!coords || coords.length < 2) {
      throw new Error("La ligne doit comporter au moins deux points.");
    }
  
    const start = coords[0];
    const end = coords[coords.length - 1];
    const second = coords[1];
    const secondLast = coords[coords.length - 2];
  
    const bearingStart = turf.bearing(turf.point(second), turf.point(start));
    const bearingEnd = turf.bearing(turf.point(secondLast), turf.point(end));
  
    const extendedStart = turf.destination(turf.point(start), distanceKm, bearingStart, { units: 'kilometers' });
    const extendedEnd = turf.destination(turf.point(end), distanceKm, bearingEnd, { units: 'kilometers' });
  
    return turf.lineString([
      extendedStart.geometry.coordinates,
      ...coords,
      extendedEnd.geometry.coordinates
    ]);
  }
  


// LayerManager class
class LayerManager {
    constructor(map, config) {
        this.map = map;
        this.config = config;
        this.layers = new Map();
        this.currentZoomedLayer = null;
        this.surfaceControls = document.getElementById('surface-controls');
        this.loadedLayerSets = new Set();
        this.obstaclesVisible = false;
        this.is3D = true;
        this.loadedObstacleIcons = new Set();
        this.surfaceLayerIds = new Set();
        this.importedLayers = new Set(); // Track imported KML layers
        this.setupMapInteractions();
        this.setupLayerControls();
        this.setupAdditionalControls();
    }

    setupLayerControls() {
        Object.keys(this.config.layerSets).forEach(layerSetId => {
            const checkbox = document.getElementById(layerSetId);
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.loadLayerSet(layerSetId);
                } else {
                    this.hideLayerSet(layerSetId);
                }
            });
        });
    }

    setupAdditionalControls() {
        document.getElementById('toggle-all').addEventListener('click', () => this.toggleAllLayers());
        document.getElementById('save-view').addEventListener('click', () => this.saveView());
        document.getElementById('toggle-3d').addEventListener('click', () => this.toggle3D());
        document.getElementById('mini-map').addEventListener('click', () => this.toggleMiniMap());
        document.getElementById('zoom-in').addEventListener('click', () => this.map.zoomIn());
        document.getElementById('zoom-out').addEventListener('click', () => this.map.zoomOut());
        document.getElementById('obstacles-toggle').addEventListener('click', () => this.toggleObstacles());







       
        






        // Add event listeners for KML import with debugging
        const importKMLButton = document.getElementById('import-kml');
        const kmlFileInput = document.getElementById('kml-file-input');

        if (importKMLButton) {
            importKMLButton.addEventListener('click', () => {
                console.log('Import KML button clicked');
                this.triggerKMLImport();
            });
        } else {
            console.error('Import KML button not found in the DOM');
        }

        if (kmlFileInput) {
            kmlFileInput.addEventListener('change', (e) => {
                console.log('File input changed, processing KML file');
                this.importKML(e);
            });
        } else {
            console.error('KML file input not found in the DOM');
        }
    }

    toggleAllLayers() {
        const checkboxes = document.querySelectorAll('.layer-checkbox');
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        checkboxes.forEach(checkbox => {
            checkbox.checked = !allChecked;
            const event = new Event('change');
            checkbox.dispatchEvent(event);
        });
    }

    saveView() {
        const center = this.map.getCenter();
        const zoom = this.map.getZoom();
        const pitch = this.map.getPitch();
        const bearing = this.map.getBearing();
        const viewState = { center, zoom, pitch, bearing };
        localStorage.setItem('savedView', JSON.stringify(viewState));
        alert('View saved!');
    }

    toggle3D() {
        this.is3D = !this.is3D;
        this.map.setPitch(this.is3D ? 45 : 0);
    }

    toggleMiniMap() {
        // Placeholder for mini-map functionality
        alert('Mini Map functionality not implemented yet.');
    }

    toggleObstacles() {
        if (!this.obstaclesVisible) {
            this.loadObstacles();
        } else {
            this.hideObstacles();
        }
        this.obstaclesVisible = !this.obstaclesVisible;
    }

    async loadObstacleIcons() {
        const iconUrl = this.config.obstacles.icons.obstacle;
        return new Promise((resolve, reject) => {
            this.map.loadImage(iconUrl, (error, image) => {
                if (error) {
                    console.error(`Failed to load obstacle icon:`, error);
                    reject(error);
                    return;
                }
                const iconId = `obstacle-icon`;
                if (!this.map.hasImage(iconId)) {
                    this.map.addImage(iconId, image);
                }
                this.loadedObstacleIcons.add('obstacle');
                resolve();
            });
        });
    }

    async loadObstacles() {
        const obstaclesId = 'obstacles-layer';
        
        if (!this.map.getSource(obstaclesId)) {
            this.map.addSource(obstaclesId, {
                type: 'geojson',
                data: this.config.obstacles.geojson
            });

            await this.loadObstacleIcons();

            this.map.addLayer({
                id: obstaclesId,
                type: 'symbol',
                source: obstaclesId,
                layout: {
                    'icon-image': 'obstacle-icon',
                    'icon-size': 0.05,
                    'icon-allow-overlap': true,
                    'icon-offset': [0, -10]
                },
                paint: {
                    'icon-color': '#FFD700' // Lighter color (yellow) to match the icon
                }
            });

            this.map.addLayer({
                id: `${obstaclesId}-labels`,
                type: 'symbol',
                source: obstaclesId,
                layout: {
                    'text-field': ['get', 'name'],
                    'text-size': 12,
                    'text-offset': [0, 1.5],
                    'text-anchor': 'top',
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-max-width': 8
                },
                paint: {
                    'text-color': '#ffffff',
                    'text-halo-color': '#FFD700', // Match the lighter icon color
                    'text-halo-width': 1.5,
                    'text-halo-blur': 1
                }
            });
        } else {
            this.map.setLayoutProperty(obstaclesId, 'visibility', 'visible');
            this.map.setLayoutProperty(`${obstaclesId}-labels`, 'visibility', 'visible');
        }

        const bounds = new mapboxgl.LngLatBounds();
        this.config.obstacles.geojson.features.forEach(feature => {
            bounds.extend(feature.geometry.coordinates);
        });
        this.map.fitBounds(bounds, { padding: 50 });
    }

    hideObstacles() {
        const obstaclesId = 'obstacles-layer';
        if (this.map.getLayer(obstaclesId)) {
            this.map.setLayoutProperty(obstaclesId, 'visibility', 'none');
            this.map.setLayoutProperty(`${obstaclesId}-labels`, 'visibility', 'none');
        }
    }

    // Trigger the hidden file input click
    triggerKMLImport() {
        console.log('Triggering KML file input');
        const fileInput = document.getElementById('kml-file-input');
        if (fileInput) {
            fileInput.click();
        } else {
            console.error('KML file input element not found');
        }
    }

    // Handle KML file import
    async importKML(event) {
        console.log('Importing KML file...');
        const file = event.target.files[0];
        if (!file) {
            console.log('No file selected');
            return;
        }

        console.log('Selected file:', file.name);

        try {
            // Check if toGeoJSON is available
            if (typeof toGeoJSON === 'undefined') {
                throw new Error('toGeoJSON library is not loaded');
            }

            let kml;
if (file.name.endsWith('.kmz')) {
    const zip = await JSZip.loadAsync(file);
    const kmlFile = Object.keys(zip.files).find(name => name.endsWith('.kml'));
    if (!kmlFile) throw new Error("Fichier KML non trouvé dans le KMZ");
    const kmlText = await zip.files[kmlFile].async("text");
    kml = new DOMParser().parseFromString(kmlText, 'text/xml');
} else {
    const text = await file.text();
    kml = new DOMParser().parseFromString(text, 'text/xml');
}


            const geojson = toGeoJSON.kml(kml);
            console.log('Converted GeoJSON:', geojson);

            if (!geojson || !geojson.features || geojson.features.length === 0) {
                throw new Error('No valid features found in the KML file');
            }

            const layerId = `kml-layer-${Date.now()}`; // Unique ID for the imported layer
            this.addImportedLayer(layerId, geojson);
            this.importedLayers.add(layerId);

            // Zoom to the imported layer
            this.zoomToImportedLayer(geojson);

            alert('KML file imported successfully!');
        } catch (error) {
            console.error('Error importing KML file:', error);
            alert(`Failed to import KML file: ${error.message}`);
        }

        // Reset the file input
        event.target.value = '';
    }

    addImportedLayer(id, geojson) {
        console.log('Adding imported layer:', id);
        if (!this.map.getSource(id)) {
            this.map.addSource(id, {
                type: 'geojson',
                data: geojson
            });
        }

        // Determine the geometry type to decide how to style the layer
        const geometryType = geojson.features[0]?.geometry?.type;
        console.log('Geometry type:', geometryType);
        let layerType, paint;

        if (geometryType === 'Point' || geometryType === 'MultiPoint') {
            layerType = 'circle';
            paint = {
                'circle-color': '#00FF00', // Green for points
                'circle-radius': 5,
                'circle-opacity': 0.8
            };

            this.map.addLayer({
                id: id,
                type: layerType,
                source: id,
                paint: paint
            });

            // Add labels for points
            this.map.addLayer({
                id: `${id}-label`,
                type: 'symbol',
                source: id,
                layout: {
                    'text-field': ['get', 'name'],
                    'text-size': 12,
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-allow-overlap': false
                },
                paint: {
                    'text-color': '#ffffff',
                    'text-halo-color': '#00FF00',
                    'text-halo-width': 1
                }
            });
        } else if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
            layerType = 'line';
            paint = {
                'line-color': '#00FF00', // Green for lines
                'line-width': 3
            };

            this.map.addLayer({
                id: id,
                type: layerType,
                source: id,
                paint: paint
            });

            // Add labels for lines
            this.map.addLayer({
                id: `${id}-label`,
                type: 'symbol',
                source: id,
                layout: {
                    'text-field': ['get', 'name'],
                    'text-size': 12,
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                    'text-allow-overlap': false,
                    'symbol-placement': 'line'
                },
                paint: {
                    'text-color': '#ffffff',
                    'text-halo-color': '#00FF00',
                    'text-halo-width': 1
                }
            });
        } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
            layerType = 'fill';
            paint = {
                'fill-color': '#00FF00', // Green for polygons
                'fill-opacity': 0.3
            };

            this.map.addLayer({
                id: id,
                type: layerType,
                source: id,
                paint: paint
            });

            // Add outline for polygons
            this.map.addLayer({
                id: `${id}-outline`,
                type: 'line',
                source: id,
                paint: {
                    'line-color': '#00FF00',
                    'line-width': 2
                }
            });
        } else {
            console.error('Unsupported geometry type:', geometryType);
            return;
        }

        this.layers.set(id, { visible: true });
        console.log('Imported layer added successfully:', id);
    }

    zoomToImportedLayer(geojson) {
        console.log('Zooming to imported layer');
        const bounds = new mapboxgl.LngLatBounds();
        let hasValidBounds = false;

        geojson.features.forEach(feature => {
            if (this.extendBounds(bounds, feature.geometry)) {
                hasValidBounds = true;
            }
        });

        if (hasValidBounds) {
            this.map.fitBounds(bounds, {
                padding: 50,
                pitch: 45,
                duration: 2000
            });
            console.log('Zoomed to bounds:', bounds);
        } else {
            console.log('No valid bounds found for zooming');
        }
    }










    calculateMOCSecondaire(clickedPoint, refLine, boardInfLine, boardSupLine, mocPrimaire) {
        try {
            const projected = turf.nearestPointOnLine(refLine, clickedPoint);
            const lineClikedToProjected = turf.lineString([clickedPoint.geometry.coordinates, projected.geometry.coordinates]);
    
            // Trouver l’intersection avec le bord inférieur
            const intersection = turf.lineIntersect(lineClikedToProjected, boardInfLine);
            if (!intersection.features.length) return null;
    
            const interPoint = intersection.features[0];
            const d = turf.distance(clickedPoint, interPoint, { units: 'meters' });
            const largeurTotale = turf.distance(
                turf.nearestPointOnLine(boardInfLine, projected),
                turf.nearestPointOnLine(boardSupLine, projected),
                { units: 'meters' }
            );
    
            const mocSecondaire = mocPrimaire * (1 - d / largeurTotale);
            return mocSecondaire.toFixed(2);
        } catch (err) {
            console.warn("Erreur calcul MOC secondaire:", err);
            return null;
        }
    }
    


    

    async loadLayerSet(layerSetId) {
        if (this.loadedLayerSets.has(layerSetId)) {
            this.config.layerSets[layerSetId].forEach(layer => {
                if (this.map.getLayer(layer.id)) {
                    this.map.setLayoutProperty(layer.id, 'visibility', 'visible');
                    const labelLayerId = `${layer.id}-label`;
                    if (this.map.getLayer(labelLayerId)) {
                        this.map.setLayoutProperty(labelLayerId, 'visibility', 'visible');
                    }
                }
            });
            this.zoomToLayerSet(layerSetId);
            return;
        }

        try {
            const layerPromises = this.config.layerSets[layerSetId].map(async layer => {
                const response = await fetch(layer.url);
                if (!response.ok) throw new Error(`Failed to fetch ${layer.url}`);
                const geojson = await response.json();
                this.addLayer(layer.id, geojson, layer.color);
            });

            await Promise.all(layerPromises);
            this.loadedLayerSets.add(layerSetId);
            this.zoomToLayerSet(layerSetId);
        } catch (error) {
            console.error(`Error loading layer set ${layerSetId}:`, error);
        }
    }

    hideLayerSet(layerSetId) {
        this.config.layerSets[layerSetId].forEach(layer => {
            if (this.map.getLayer(layer.id)) {
                this.map.setLayoutProperty(layer.id, 'visibility', 'none');
                const labelLayerId = `${layer.id}-label`;
                if (this.map.getLayer(labelLayerId)) {
                    this.map.setLayoutProperty(labelLayerId, 'visibility', 'none');
                }
            }
        });
    }

    zoomToLayerSet(layerSetId) {
        const bounds = new mapboxgl.LngLatBounds();
        let hasValidBounds = false;

        this.config.layerSets[layerSetId].forEach(layer => {
            const source = this.map.getSource(layer.id);
            if (source) {
                const data = source._data;
                if (data.type === 'FeatureCollection') {
                    data.features.forEach(feature => {
                        if (this.extendBounds(bounds, feature.geometry)) {
                            hasValidBounds = true;
                        }
                    });
                } else if (data.type === 'Feature') {
                    if (this.extendBounds(bounds, data.geometry)) {
                        hasValidBounds = true;
                    }
                }
            }
        });

        if (hasValidBounds) {
            this.map.fitBounds(bounds, {
                padding: 50,
                pitch: 45,
                duration: 2000
            });
        }
    }

    extendBounds(bounds, geometry) {
        if (!geometry || !geometry.coordinates) return false;
        const coords = geometry.coordinates;

        if (geometry.type === 'Point') {
            bounds.extend(coords);
            return true;
        } else if (geometry.type === 'LineString') {
            coords.forEach(coord => bounds.extend(coord));
            return true;
        } else if (geometry.type === 'Polygon') {
            coords[0].forEach(coord => bounds.extend(coord));
            return true;
        }
        return false;
    }

    addLayer(id, geojson, color) {
        if (!geojson || (!geojson.geometry && geojson.type !== 'FeatureCollection')) {
            console.error(`Invalid GeoJSON for layer ${id}:`, geojson);
            return;
        }

        if (!this.map.getSource(id)) {
            this.map.addSource(id, {
                type: 'geojson',
                data: geojson
            });
        }

        const geometryType = geojson.type === 'FeatureCollection' ? 
            geojson.features[0]?.geometry?.type : geojson.geometry?.type;
        let layerType, paint;

        if (geometryType === 'Point' || geometryType === 'MultiPoint') {
            layerType = 'circle';
            paint = {
                'circle-color': color,
                'circle-radius': 5,
                'circle-opacity': 0.8
            };
        } else if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
            layerType = 'line';
            paint = {
                'line-color': color,
                'line-width': 3
            };
        } else {
            layerType = 'fill';
            paint = {
                'fill-color': color,
                'fill-opacity': 0.3
            };
        }

        this.map.addLayer({
            id: id,
            type: layerType,
            source: id,
            paint: paint
        });

        this.map.addLayer({
            id: `${id}-label`,
            type: 'symbol',
            source: id,
            layout: {
                'text-field': ['get', 'Text'],
                'text-size': 12,
                'text-offset': [0, 1],
                'text-anchor': 'top',
                'text-allow-overlap': false,
                'symbol-placement': geometryType === 'LineString' || geometryType === 'MultiLineString' ? 'line' : 'point'
            },
            paint: {
                'text-color': '#ffffff',
                'text-halo-color': color,
                'text-halo-width': 1
            }
        });

        this.surfaceLayerIds.add(id);
        this.layers.set(id, { visible: true });
    }

    setupMapInteractions() {
        const mapDetails = document.getElementById('map-details');
        
        this.map.on('move', () => {
            const center = this.map.getCenter();
            const zoom = this.map.getZoom().toFixed(2);
            const elevation = this.getElevation(center); // Placeholder
            mapDetails.innerHTML = `
                <div>Zoom: ${zoom}</div>
                <div>Lat: ${center.lat.toFixed(4)} | Lon: ${center.lng.toFixed(4)}</div>
                <div><i class="fas fa-exclamation-triangle"></i> Elevation: ${elevation} m</div>
            `;
        });

        document.getElementById('reset-view').addEventListener('click', () => {
            this.resetView();
        });

        document.getElementById('airport-zoom').addEventListener('click', () => {
            this.zoomToAirport();
        });

        this.setupMapClickHandler();
    }
    setupMapClickHandler() {
        this.map.on('click', async (e) => {
            const lngLat = e.lngLat;
            const clickedPoint = turf.point([lngLat.lng, lngLat.lat]);
    
            let popupContent = `<strong>Coordonnées</strong><br>Lat: ${lngLat.lat.toFixed(6)}<br>Lng: ${lngLat.lng.toFixed(6)}`;
    
            try {
                // 1. Vérifier si le point est dans une zone enregistrée
                const response = await fetch(`http://localhost:3001/api/check-area?lat=${lngLat.lat}&lng=${lngLat.lng}`);
                const result = await response.json();
    
                if (result.areaClass === 'Primary') {
                    // ... votre code existant ...
                } 
                else if (result.areaClass === 'Secondary') {
                    popupContent += `<br><em>🟠 Ce point se trouve dans une <strong>Secondary Area</strong></em>`;
                    
                    // 2. Utiliser le endpoint /geojson/ref_lines qui est fonctionnel plutôt que les endpoints individuels
                    const refLinesResponse = await fetch('http://localhost:3001/geojson/ref_lines');
                    
                    if (!refLinesResponse.ok) {
                        throw new Error(`Impossible de récupérer les lignes de référence: ${refLinesResponse.status}`);
                    }
                    
                    const refLinesData = await refLinesResponse.json();
                    
                    // Filtrer les lignes par type
                    const nominalLines = refLinesData.features.filter(f => 
                        f.properties.RefLine_Type && 
                        f.properties.RefLine_Type.toLowerCase().includes('nominal'));
                        
                    const borderInfLines = refLinesData.features.filter(f => 
                        f.properties.RefLine_Type && 
                        f.properties.RefLine_Type.toLowerCase().includes('bord_inf'));
                        
                    const borderSupLines = refLinesData.features.filter(f => 
                        f.properties.RefLine_Type && 
                        f.properties.RefLine_Type.toLowerCase().includes('bord_sup'));
                    
                    // Vérification de la validité des données
                    if (nominalLines.length > 0 && borderInfLines.length > 0 && borderSupLines.length > 0) {
                        const nominalLine = nominalLines[0];
                        const borderInfLine = borderInfLines[0];
                        const borderSupLine = borderSupLines[0];
                        
                        // Vérifier la validité des géométries
                        if (!nominalLine.geometry?.coordinates || nominalLine.geometry.coordinates.length < 2) {
                            throw new Error("Ligne nominale invalide: pas assez de coordonnées");
                        }
                        
                        if (!borderInfLine.geometry?.coordinates || borderInfLine.geometry.coordinates.length < 2) {
                            throw new Error("Ligne bord_inf invalide: pas assez de coordonnées");
                        }
                        
                        if (!borderSupLine.geometry?.coordinates || borderSupLine.geometry.coordinates.length < 2) {
                            throw new Error("Ligne bord_sup invalide: pas assez de coordonnées");
                        }
                        
                        // Convertir en objets turf pour les calculs
                        const nominalTurf = turf.lineString(nominalLine.geometry.coordinates);
                        const borderInfTurf = turf.lineString(borderInfLine.geometry.coordinates);
                        const borderSupTurf = turf.lineString(borderSupLine.geometry.coordinates);
                        
                        // 5. Calcul du MOC secondaire
                        const projected = turf.nearestPointOnLine(nominalTurf, clickedPoint);
                        const projectionLine = turf.lineString([clickedPoint.geometry.coordinates, projected.geometry.coordinates]);
                        
                        // Intersections avec les bords
                        const intersectionInf = turf.lineIntersect(projectionLine, borderInfTurf);
                        const intersectionSup = turf.lineIntersect(projectionLine, borderSupTurf);
                        
                        if (intersectionInf.features.length > 0 && intersectionSup.features.length > 0) {
                            const infPoint = intersectionInf.features[0];
                            const supPoint = intersectionSup.features[0];
                            
                            // Distances pour le calcul
                            const distanceToInf = turf.distance(clickedPoint, infPoint, { units: 'meters' });
                            const totalWidth = turf.distance(infPoint, supPoint, { units: 'meters' });
                            
                            // Calcul MOC secondaire
                            const MOC_primaire = result.data.MOC_m || 300; // Valeur de la BDD ou par défaut
                            const MOC_secondaire = MOC_primaire * (1 - distanceToInf / totalWidth);
                            
                            // Visualiser la projection pour débugger
                            this.visualizeProjection(clickedPoint, projected, infPoint, supPoint);
                            
                            popupContent += `<br><strong>🧮 MOC secondaire calculée :</strong><br>
                                Distance au bord inf: ${distanceToInf.toFixed(2)} m<br>
                                Largeur totale: ${totalWidth.toFixed(2)} m<br>
                                MOC primaire: ${MOC_primaire} m<br>
                                <span style="color:#FF9900; font-weight:bold">MOC secondaire: ${MOC_secondaire.toFixed(2)} m</span>`;
                        } else {
                            popupContent += '<br><em>❌ Impossible de calculer les intersections avec les bords</em>';
                        }
                    } else {
                        popupContent += '<br><em>❌ Lignes de référence manquantes dans les données</em>';
                        if (nominalLines.length === 0) popupContent += '<br>- Ligne nominale manquante';
                        if (borderInfLines.length === 0) popupContent += '<br>- Ligne bord_inf manquante';
                        if (borderSupLines.length === 0) popupContent += '<br>- Ligne bord_sup manquante';
                    }
                } else {
                    popupContent += `<br><em>❓ Ce point ne se trouve dans aucune zone définie</em>`;
                }
            } catch (err) {
                console.error('Erreur lors du calcul MOC:', err);
                popupContent += `<br><em>⚠️ Erreur technique: ${err.message}</em>`;
            }
    
            new mapboxgl.Popup()
                .setLngLat(lngLat)
                .setHTML(popupContent)
                .addTo(this.map);
        });
    }
    
    
    
    // Méthode auxiliaire pour visualiser la projection
    visualizeProjection(clickedPoint, projectedPoint, borderInfPoint, borderSupPoint) {
        // Supprimer les visualisations précédentes
        ['projection-line', 'points-markers'].forEach(id => {
            if (this.map.getLayer(id)) this.map.removeLayer(id);
            if (this.map.getSource(id)) this.map.removeSource(id);
        });
    
        // 1. Ligne de projection
        const visualizationLines = {
            type: 'FeatureCollection',
            features: [
                // Ligne de projection du point cliqué vers la ligne nominale
                turf.lineString([
                    clickedPoint.geometry.coordinates,
                    projectedPoint.geometry.coordinates
                ]),
                // Ligne entre les bords pour montrer la largeur totale
                turf.lineString([
                    borderInfPoint.geometry.coordinates,
                    borderSupPoint.geometry.coordinates
                ])
            ]
        };
    
        // 2. Points importants du calcul
        const points = {
            type: 'FeatureCollection',
            features: [
                {...clickedPoint, properties: {type: 'clicked'}},
                {...projectedPoint, properties: {type: 'projected'}},
                {...borderInfPoint, properties: {type: 'border-inf'}},
                {...borderSupPoint, properties: {type: 'border-sup'}}
            ]
        };
    
        // Ajouter les sources
        this.map.addSource('projection-line', {
            type: 'geojson',
            data: visualizationLines
        });
    
        this.map.addSource('points-markers', {
            type: 'geojson',
            data: points
        });
    
        // Ajouter les couches
        this.map.addLayer({
            id: 'projection-line',
            type: 'line',
            source: 'projection-line',
            paint: {
                'line-color': ['match', 
                    ['array-index', ['get', 'coordinates'], 0],
                    0, '#FF0000', // Ligne de projection en rouge
                    '#0088FF'  // Ligne de largeur en bleu
                ],
                'line-width': 2,
                'line-dasharray': [2, 2]
            }
        });
    
        this.map.addLayer({
            id: 'points-markers',
            type: 'circle',
            source: 'points-markers',
            paint: {
                'circle-radius': 5,
                'circle-color': [
                    'match',
                    ['get', 'type'],
                    'clicked', '#FF0000',    // Point cliqué en rouge
                    'projected', '#00FF00',  // Point projeté en vert
                    'border-inf', '#0088FF', // Bord inf en bleu clair
                    'border-sup', '#0044AA', // Bord sup en bleu foncé
                    '#FFFF00'  // Par défaut en jaune
                ],
                'circle-stroke-width': 2,
                'circle-stroke-color': '#FFFFFF'
            }
        });
    }
        
    
    isPointLeftOfLine(start, end, point) {
        // Vérification des paramètres
        if (!start || !end || !point) {
            console.warn("Coordonnées manquantes pour le calcul de position");
            return false;
        }

        // S'assurer que les coordonnées sont des tableaux avec au moins 2 éléments
        if (!Array.isArray(start) || !Array.isArray(end) || !Array.isArray(point) ||
            start.length < 2 || end.length < 2 || point.length < 2) {
            console.warn("Format de coordonnées invalide");
            return false;
        }

        return ((end[0] - start[0]) * (point[1] - start[1]) - 
                (end[1] - start[1]) * (point[0] - start[0])) > 0;
    }
    

    getElevation(lngLat) {
        // Placeholder: Replace with real elevation data source if available
        return 100; // Example elevation in meters
    }



    extendLineSegment(line, km = 1) {
        if (!line || line.geometry.type !== "LineString") return line;
        const coords = line.geometry.coordinates;
        if (coords.length < 2) return line;
    
        const [start, next] = coords;
        const [prev, end] = coords.slice(-2);
    
        const bearingStart = turf.bearing(start, next);
        const bearingEnd = turf.bearing(prev, end);
    
        const extendedStart = turf.destination(start, km, bearingStart - 180, { units: 'kilometers' });
        const extendedEnd = turf.destination(end, km, bearingEnd, { units: 'kilometers' });
    
        const extendedCoords = [
            extendedStart.geometry.coordinates,
            ...coords,
            extendedEnd.geometry.coordinates
        ];
    
        return turf.lineString(extendedCoords);
    }
    
    
    











    getLayerSetName(layerId) {
        for (const [setId, layers] of Object.entries(this.config.layerSets)) {
            if (layers.some(layer => layer.id === layerId)) {
                return setId.replace(/-/g, ' ');
            }
        }
        return 'Unknown';
    }

    determineArea(feature) {
        return 'N/A'; // Placeholder: Implement area calculation if needed
    }

    getMOC(feature) {
        return 0; // Placeholder: Define Minimum Obstacle Clearance based on layer type if needed
    }

    resetView() {
        this.map.flyTo({
            center: this.config.airport.center,
            zoom: 12,
            pitch: 0,
            bearing: 0,
            duration: 2000
        });
    }

    zoomToAirport() {
        this.map.flyTo({
            center: this.config.airport.center,
            zoom: 14,
            pitch: 45,
            duration: 2000
        });
    }
}

// Initialize Mapbox map
mapboxgl.accessToken = CONFIG.mapbox.accessToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: CONFIG.mapbox.style,
    center: CONFIG.airport.center,
    zoom: 12,
    pitch: 45
});

// Instantiate LayerManager when map is loaded
map.on('load', () => {
    const layerManager = new LayerManager(map, CONFIG);
});