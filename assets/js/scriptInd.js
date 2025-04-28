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

//  Version robuste : évite les erreurs si ligne trop courte
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

// Fonction d'inspection profonde pour déboguer les données
function inspectGeometry(data, name = "Données") {
  console.log(`===== INSPECTION: ${name} =====`);
  
  // Si c'est un tableau de features, examiner la première
  if (data && Array.isArray(data) && data.length > 0) {
    console.log(`Type de données: Array de ${data.length} éléments`);
    
    // Examiner le premier élément
    const item = data[0];
    console.log("Premier élément:", item);
    
    if (item && item.geometry) {
      console.log("Type de géométrie:", item.geometry.type);
      console.log("Propriétés:", item.properties);
      
      // Examiner les coordonnées
      if (item.geometry.coordinates) {
        console.log("Coordonnées brutes:", JSON.stringify(item.geometry.coordinates));
        
        // Pour MultiLineString, examiner la première ligne
        if (item.geometry.type === "MultiLineString" && Array.isArray(item.geometry.coordinates) && item.geometry.coordinates.length > 0) {
          console.log("Première ligne du MultiLineString:", item.geometry.coordinates[0]);
          
          // Examiner les coordonnées individuelles
          if (Array.isArray(item.geometry.coordinates[0]) && item.geometry.coordinates[0].length > 0) {
            console.log("Premier point dans la première ligne:", item.geometry.coordinates[0][0]);
            
            // Vérifier le type de chaque coordonnée
            const point = item.geometry.coordinates[0][0];
            if (Array.isArray(point) && point.length >= 2) {
              console.log(`Longitude: ${point[0]} (${typeof point[0]})`);
              console.log(`Latitude: ${point[1]} (${typeof point[1]})`);
              
              // Tester la conversion en nombre
              console.log(`Conversion Number(longitude): ${Number(point[0])}`);
              console.log(`isNaN check: ${isNaN(Number(point[0]))}`);
            }
          }
        }
      }
    }
  } else if (data && data.geometry) {
    console.log("Type de géométrie:", data.geometry.type);
    console.log("Coordonnées brutes:", JSON.stringify(data.geometry.coordinates));
  } else {
    console.log("Données invalides ou format non reconnu:", data);
  }
  
  console.log(`===== FIN INSPECTION: ${name} =====`);
}

// Solution de contournement robuste pour créer une ligne avec des points valides
function createSafeLine(startPoint, endPoint) {
  // Utiliser des coordonnées par défaut sûres
  const defaultStart = [10.20, 36.85];
  const defaultEnd = [10.22, 36.86];
  
  let validStart = defaultStart;
  let validEnd = defaultEnd;
  
  // Tenter de valider le point de départ
  if (startPoint && Array.isArray(startPoint) && startPoint.length >= 2) {
    const lng = parseFloat(String(startPoint[0]).replace(',', '.').trim());
    const lat = parseFloat(String(startPoint[1]).replace(',', '.').trim());
    
    if (!isNaN(lng) && !isNaN(lat) && isFinite(lng) && isFinite(lat)) {
      validStart = [lng, lat];
    }
  }
  
  // Tenter de valider le point de fin
  if (endPoint && Array.isArray(endPoint) && endPoint.length >= 2) {
    const lng = parseFloat(String(endPoint[0]).replace(',', '.').trim());
    const lat = parseFloat(String(endPoint[1]).replace(',', '.').trim());
    
    if (!isNaN(lng) && !isNaN(lat) && isFinite(lng) && isFinite(lat)) {
      validEnd = [lng, lat];
    }
  }
  
  // Créer et retourner une ligne sûre
  return [validStart, validEnd];
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

    // Fonction améliorée pour créer une ligne valide
    createValidLine(coordinates) {
      try {
        // Paramètres d'entrée invalides
        if (!coordinates) {
          console.warn("createValidLine: Coordonnées manquantes");
          return [[10.20, 36.85], [10.22, 36.86]];
        }
        
        // Afficher les coordonnées d'entrée pour déboguer
        console.log("createValidLine input:", JSON.stringify(coordinates));
        
        // Gérer les différents types de géométries
        if (Array.isArray(coordinates)) {
          // Cas 1: MultiLineString [[point1, point2...], [point1, point2...]]
          if (coordinates.length > 0 && Array.isArray(coordinates[0]) && Array.isArray(coordinates[0][0])) {
            console.log("Détecté format MultiLineString");
            
            // Prendre la première ligne du MultiLineString
            const firstLine = coordinates[0];
            if (firstLine.length >= 2) {
              return createSafeLine(firstLine[0], firstLine[1]);
            }
          } 
          // Cas 2: LineString [point1, point2...]
          else if (coordinates.length >= 2 && Array.isArray(coordinates[0])) {
            console.log("Détecté format LineString");
            return createSafeLine(coordinates[0], coordinates[1]);
          }
          // Cas 3: Point unique
          else if (coordinates.length === 1 && Array.isArray(coordinates[0])) {
            console.log("Détecté point unique");
            const point = coordinates[0];
            return createSafeLine(point, [Number(point[0]) + 0.001, Number(point[1]) + 0.001]);
          }
        }
        
        // Si on arrive ici, aucun format reconnu
        console.warn("Format de coordonnées non reconnu:", coordinates);
        return [[10.20, 36.85], [10.22, 36.86]];
      } catch (error) {
        console.error("Erreur dans createValidLine:", error);
        return [[10.20, 36.85], [10.22, 36.86]];
      }
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
        // Ajouter cette ligne pour le mode debug
        if (document.getElementById('debug-mode')) {
            document.getElementById('debug-mode').addEventListener('click', () => this.toggleDebugMode());
        }

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

    // Fonction pour activer/désactiver le mode débogage
    toggleDebugMode() {
        const isDebugMode = localStorage.getItem('debugMode') === 'true';
        localStorage.setItem('debugMode', (!isDebugMode).toString());
        alert(`Mode débogage ${!isDebugMode ? 'activé' : 'désactivé'}`);
        return !isDebugMode;
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

    calculateMOCSecondaire(clickedPoint, nominalTrack, boardInfLine, boardSupLine, mocPrimaire) {
        try {
            // 1. Projection orthogonale du point cliqué sur la route nominale
            const projected = turf.nearestPointOnLine(nominalTrack, clickedPoint);
            
            // 2. Créer la ligne entre le point cliqué et sa projection
            const projectionLine = turf.lineString([
                clickedPoint.geometry.coordinates, 
                projected.geometry.coordinates
            ]);
            
            // 3. Trouver l'intersection avec le bord inférieur (board_inf)
            const intersectionInf = turf.lineIntersect(projectionLine, boardInfLine);
            if (!intersectionInf.features.length) {
                console.warn("Pas d'intersection avec le bord inférieur trouvée");
                return null;
            }
            
            // 4. Trouver l'intersection avec le bord supérieur (board_sup)
            const intersectionSup = turf.lineIntersect(projectionLine, boardSupLine);
            if (!intersectionSup.features.length) {
                console.warn("Pas d'intersection avec le bord supérieur trouvée");
                return null;
            }
            
            // 5. Point d'intersection avec le bord inférieur
            const infPoint = intersectionInf.features[0];
            
            // 6. Calculer la distance d entre le point cliqué et l'intersection avec bord_inf
            const d = turf.distance(clickedPoint, infPoint, { units: 'meters' });
            
            // 7. Calculer la largeur totale entre board_inf et board_sup
            const largeurTotale = turf.distance(
                intersectionInf.features[0],
                intersectionSup.features[0],
                { units: 'meters' }
            );
            
            // 8. S'assurer que le ratio est entre 0 et 1
            const ratio = Math.min(1, Math.max(0, d / largeurTotale));
            
            // 9. Appliquer la formule MOC Secondaire = MOC primaire * [1-(d/largeur totale)]
            const mocSecondaire = mocPrimaire * (1 - ratio);
            
            // 10. Visualiser les points clés du calcul
            this.visualizeCalculation(clickedPoint, projected, infPoint, intersectionSup.features[0]);
            
            // 11. Retourner le résultat avec 2 décimales
            return {
                mocSecondaire: mocSecondaire.toFixed(2),
                distance: d.toFixed(2),
                largeurTotale: largeurTotale.toFixed(2),
                ratio: (ratio * 100).toFixed(1) // en pourcentage
            };
        } catch (err) {
            console.error("Erreur calcul MOC secondaire:", err);
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

    // Fonction améliorée pour la gestion des clics sur la carte
    setupMapClickHandler() {
        this.map.on('click', async (e) => {
            const lngLat = e.lngLat;
            const clickedPoint = turf.point([lngLat.lng, lngLat.lat]);
            
            let popupContent = `<strong>Coordonnées</strong><br>Lat: ${lngLat.lat.toFixed(6)}<br>Lng: ${lngLat.lng.toFixed(6)}`;
            
            try {
                // 1. Vérifier si le point est dans une zone enregistrée
                const response = await fetch(`http://localhost:3001/api/check-area?lat=${lngLat.lat}&lng=${lngLat.lng}`);
                
                if (!response.ok) {
                    throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
                }
                
                const result = await response.json();
                console.log("Résultat check-area:", result);
                
                // Cas de l'aire primaire - simple
                if (result.areaClass === 'Primary') {
                    popupContent += `<br><em>🟢 Ce point se trouve dans une <strong>Primary Area</strong></em>`;
                    if (result.data && result.data.MOC_m) {
                        popupContent += `<br>MOC primaire: ${result.data.MOC_m} m`;
                    }
                } 
                // Cas de l'aire secondaire - avec calcul précis du MOC
                else if (result.areaClass === 'Secondary') {
                    popupContent += `<br><em>🟠 Ce point se trouve dans une <strong>Secondary Area</strong></em>`;
                    
                    try {
                        // Récupérer les données de la zone
                        const procedureName = result.data.Procedure_Name;
                        const areaType = result.data.Area_Type;
                        
                        // Récupérer le MOC primaire
                        let mocPrimaire = 0;
                        
                        // Récupérer les zones
                        const polyAreaResponse = await fetch(`http://localhost:3001/geojson/poly_area`);
                        if (!polyAreaResponse.ok) {
                            throw new Error(`Erreur récupération zones: ${polyAreaResponse.status}`);
                        }
                        const polyAreasData = await polyAreaResponse.json();
                        
                        // Trouver la zone primaire correspondante
                        const primaryArea = polyAreasData.features.find(
                            feature => feature.properties.Procedure_Name === procedureName && 
                                       feature.properties.Area_Type === 'Primary Area'
                        );
                        
                        if (primaryArea && primaryArea.properties.MOC_m) {
                            mocPrimaire = parseFloat(primaryArea.properties.MOC_m);
                        } else {
                            // Valeur par défaut basée sur le type de procédure
                            if (procedureName.toLowerCase().includes('final')) {
                                mocPrimaire = 90;
                            } else {
                                mocPrimaire = 165;
                            }
                        }
                        
                        console.log("MOC primaire:", mocPrimaire);
                        
                        // Déterminer le type de secteur secondaire
                        const isArea1 = areaType.includes('Area1');
                        const isArea2 = areaType.includes('Area2');
                        const isFinal = procedureName.toLowerCase().includes('final');
                        
                        // Récupérer toutes les lignes de référence pour une recherche plus flexible
                        const refLinesResponse = await fetch(`http://localhost:3001/geojson/ref_lines`);
                        if (!refLinesResponse.ok) {
                            throw new Error(`Erreur récupération lignes: ${refLinesResponse.status}`);
                        }
                        const refLinesData = await refLinesResponse.json();
                        
                        console.log("Lignes disponibles:", refLinesData.features.map(f => f.properties.RefLine_Type));
                        
                        // Trouver la route nominale
                        const nominalTrack = refLinesData.features.find(
                            feature => feature.properties.RefLine_Type === 'Nominal Track'
                        );
                        
                        if (!nominalTrack) {
                            throw new Error("Route nominale non trouvée");
                        }
                        
                        // Chercher les lignes de bord avec une correspondance partielle
                        const areaSuffix = isArea1 ? '1' : '2';
                        const procSuffix = isFinal ? 'final' : 'inter';
                        
                        // Patterns de recherche plus flexibles
                        const infPattern = `inf${areaSuffix}${procSuffix}`.toLowerCase();
                        const supPattern = `sup${areaSuffix}${procSuffix}`.toLowerCase();
                        
                        console.log("Recherche de patterns:", infPattern, supPattern);
                        
                        // Chercher avec correspondance partielle, plus tolérante
                        let boardInfLine = refLinesData.features.find(
                            feature => feature.properties.RefLine_Type && 
                                     feature.properties.RefLine_Type.toLowerCase().includes(infPattern)
                        );
                        
                        let boardSupLine = refLinesData.features.find(
                            feature => feature.properties.RefLine_Type && 
                                     feature.properties.RefLine_Type.toLowerCase().includes(supPattern)
                        );
                        
                        // Vérifier si on a trouvé les lignes
                        if (!boardInfLine || !boardSupLine) {
                            console.error("Lignes non trouvées:", { 
                                "infPattern": infPattern, 
                                "supPattern": supPattern,
                                "boardInfLine": boardInfLine ? boardInfLine.properties.RefLine_Type : "non trouvé",
                                "boardSupLine": boardSupLine ? boardSupLine.properties.RefLine_Type : "non trouvé"
                            });
                            
                            // Essayer une recherche encore plus large
                            if (!boardInfLine) {
                                boardInfLine = refLinesData.features.find(
                                    feature => feature.properties.RefLine_Type && 
                                             feature.properties.RefLine_Type.toLowerCase().includes('inf')
                                );
                            }
                            
                            if (!boardSupLine) {
                                boardSupLine = refLinesData.features.find(
                                    feature => feature.properties.RefLine_Type && 
                                             feature.properties.RefLine_Type.toLowerCase().includes('sup')
                                );
                            }
                            
                            if (!boardInfLine || !boardSupLine) {
                                throw new Error(`Limites non trouvées malgré recherche élargie`);
                            }
                        }
                        
                        console.log("Lignes trouvées:", boardInfLine.properties.RefLine_Type, boardSupLine.properties.RefLine_Type);
                        
                        // Calculer la distance précise pour un MOC variable
                        // 1. Projection orthogonale sur la route nominale
                        const projected = turf.nearestPointOnLine(nominalTrack, clickedPoint);
                        
                        // 2. Créer une ligne entre le point cliqué et sa projection
                        const projectionLine = turf.lineString([
                            clickedPoint.geometry.coordinates,
                            projected.geometry.coordinates
                        ]);
                        
                        // 3. Trouver l'intersection avec les limites
                        const intersectionInf = turf.lineIntersect(projectionLine, boardInfLine);
                        const intersectionSup = turf.lineIntersect(projectionLine, boardSupLine);
                        
                        let distance, largeurTotale;
                        
                        // Si on trouve les intersections
                        if (intersectionInf.features.length > 0 && intersectionSup.features.length > 0) {
                            const ptInf = intersectionInf.features[0];
                            const ptSup = intersectionSup.features[0];
                            
                            // Distance du point au bord intérieur (limite avec la zone primaire)
                            distance = turf.distance(ptInf, clickedPoint, { units: 'meters' });
                            
                            // Largeur totale (distance entre les deux limites)
                            largeurTotale = turf.distance(ptInf, ptSup, { units: 'meters' });
                        } else {
                            // Méthode alternative - points les plus proches
                            const ptInfProche = turf.nearestPointOnLine(boardInfLine, projected);
                            const ptSupProche = turf.nearestPointOnLine(boardSupLine, projected);
                            
                            // Distance au bord intérieur
                            distance = turf.distance(ptInfProche, clickedPoint, { units: 'meters' });
                            
                            // Largeur totale
                            largeurTotale = turf.distance(ptInfProche, ptSupProche, { units: 'meters' });
                        }
                        
                        // Calculer le ratio (position relative dans la zone secondaire)
                        // 0 = limite avec la zone primaire, 1 = limite extérieure
                        const ratio = Math.min(1, Math.max(0, distance / largeurTotale));
                        
                        // Calculer le MOC secondaire
                        const mocSecondaire = mocPrimaire * (1 - ratio);
                        
                        // Visualiser seulement le point rouge
                        this.visualizeSimplePoint(clickedPoint);
                        
                        // Afficher les résultats
                        popupContent += `<br><strong>🧮 MOC secondaire calculée:</strong><br>
                            Distance : ${distance.toFixed(2)} m<br>
                            Largeur totale: ${largeurTotale.toFixed(2)} m<br>
                            <span style="color:#FF9900; font-weight:bold">MOC secondaire: ${mocSecondaire.toFixed(2)} m</span>`;
                    } catch (error) {
                        console.error("Erreur lors du calcul:", error);
                        popupContent += `<br><em>⚠️ Erreur de calcul: ${error.message}</em>`;
                        
                        // Méthode de secours - estimation
                        const isArea1 = result.data.Area_Type.includes('Area1');
                        let positionRelativeEstimee = isArea1 ? 0.3 : 0.7;
                        
                        // Estimer le MOC primaire
                        // Estimer le MOC primaire
let mocPrimaireEstime = 0;
if (result.data.Procedure_Name) {
    if (result.data.Procedure_Name.toLowerCase().includes('final')) {
        mocPrimaireEstime = 90;
    } else {
        mocPrimaireEstime = 165;
    }
} else if (result.data.Area_Type) {
    // Essayer de déduire à partir du type de zone
    if (result.data.Area_Type.toLowerCase().includes('final')) {
        mocPrimaireEstime = 90;
    } else {
        mocPrimaireEstime = 165;
    }
} else {
    // Utiliser la valeur la plus conservatrice si aucune information n'est disponible
    mocPrimaireEstime = 165;
}
                        
                        // Calculer le MOC secondaire estimé
                        const mocSecondaireEstime = mocPrimaireEstime * (1 - positionRelativeEstimee);
                        
                        popupContent += `<br><strong>⚠️ MOC secondaire estimée:</strong><br>
                            MOC primaire (estimé): ${mocPrimaireEstime} m<br>
                            Position relative estimée: ${(positionRelativeEstimee * 100).toFixed(1)}%<br>
                            <span style="color:#FF9900">MOC secondaire: ${mocSecondaireEstime.toFixed(2)} m</span><br>
                            <em>(Estimation basée sur le type de zone secondaire)</em>`;
                    }
                } else {
                    popupContent += `<br><em>❓ Ce point ne se trouve dans aucune zone définie</em>`;
                }
            } catch (err) {
                console.error('Erreur:', err);
                popupContent += `<br><em>⚠️ Erreur technique: ${err.message}</em>`;
            }
            
            // Afficher le popup
            new mapboxgl.Popup()
                .setLngLat(lngLat)
                .setHTML(popupContent)
                .addTo(this.map);
        });
    }
    
    // Fonction simplifiée pour visualiser uniquement le point cliqué
    visualizeSimplePoint(clickedPoint) {
        try {
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
            
            // Créer uniquement le point
            const points = {
                type: 'FeatureCollection',
                features: [
                    {...clickedPoint, properties: {type: 'clicked'}}
                ]
            };
            
            // Ajouter la source
            this.map.addSource('points-markers', {
                type: 'geojson',
                data: points
            });
            
            // Ajouter la couche
            this.map.addLayer({
                id: 'points-markers',
                type: 'circle',
                source: 'points-markers',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#FF0000',    // Point en rouge
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
        }
    }
    
    // Visualiser uniquement le point cliqué (en rouge)
    visualizeSimplePoint(clickedPoint) {
        try {
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
            
            // Créer uniquement le point
            const points = {
                type: 'FeatureCollection',
                features: [
                    {...clickedPoint, properties: {type: 'clicked'}}
                ]
            };
            
            // Ajouter la source
            this.map.addSource('points-markers', {
                type: 'geojson',
                data: points
            });
            
            // Ajouter la couche
            this.map.addLayer({
                id: 'points-markers',
                type: 'circle',
                source: 'points-markers',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#FF0000',    // Point en rouge
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
        }
    }
    
    // Fonction simplifiée pour visualiser uniquement le point cliqué
    visualizeSimplePoint(clickedPoint) {
        try {
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
            
            // Créer uniquement le point
            const points = {
                type: 'FeatureCollection',
                features: [
                    {...clickedPoint, properties: {type: 'clicked'}}
                ]
            };
            
            // Ajouter la source
            this.map.addSource('points-markers', {
                type: 'geojson',
                data: points
            });
            
            // Ajouter la couche
            this.map.addLayer({
                id: 'points-markers',
                type: 'circle',
                source: 'points-markers',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#FF0000',    // Point en rouge
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
        }
    }
    // Amélioration de la fonction de calcul du MOC secondaire
    calculateMOCSecondaire(clickedPoint, nominalTrack, boardInfLine, boardSupLine, mocPrimaire) {
        try {
            console.log("Calcul MOC secondaire avec:", {
                mocPrimaire,
                "nominalTrack": !!nominalTrack,
                "boardInfLine": !!boardInfLine,
                "boardSupLine": !!boardSupLine
            });
            
            // Vérifier les entrées
            if (!clickedPoint || !nominalTrack || !boardInfLine || !boardSupLine || !mocPrimaire) {
                console.error("Paramètres manquants", {
                    clickedPoint: !!clickedPoint,
                    nominalTrack: !!nominalTrack,
                    boardInfLine: !!boardInfLine,
                    boardSupLine: !!boardSupLine,
                    mocPrimaire: mocPrimaire
                });
                throw new Error("Paramètres manquants pour le calcul");
            }
            
            // Si mocPrimaire n'est pas un nombre, le convertir ou utiliser une valeur par défaut
            if (isNaN(parseFloat(mocPrimaire))) {
                console.warn("MOC primaire invalide:", mocPrimaire);
                mocPrimaire = 150; // Valeur par défaut
            } else {
                mocPrimaire = parseFloat(mocPrimaire);
            }
            
            // 1. Projection orthogonale du point cliqué sur la route nominale
            const projected = turf.nearestPointOnLine(nominalTrack, clickedPoint);
            
            // 2. Créer la ligne entre le point cliqué et sa projection
            const projectionLine = turf.lineString([
                clickedPoint.geometry.coordinates, 
                projected.geometry.coordinates
            ]);
            
            // 3. Créer des représentations linéaires des limites si ce sont des polygones
            let infLineString, supLineString;
            
            if (boardInfLine.geometry.type === 'Polygon' || boardInfLine.geometry.type === 'MultiPolygon') {
                infLineString = turf.polygonToLine(boardInfLine);
            } else {
                infLineString = boardInfLine;
            }
            
            if (boardSupLine.geometry.type === 'Polygon' || boardSupLine.geometry.type === 'MultiPolygon') {
                supLineString = turf.polygonToLine(boardSupLine);
            } else {
                supLineString = boardSupLine;
            }
            
            // 4. Trouver les intersections avec les bords
            const intersectionInf = turf.lineIntersect(projectionLine, infLineString);
            
            if (!intersectionInf.features.length) {
                console.warn("Pas d'intersection avec le bord inférieur trouvée, utilisant la distance directe");
                
                // Alternative: utiliser la distance directe à la ligne
                const infPoint = turf.nearestPointOnLine(infLineString, clickedPoint);
                const supPoint = turf.nearestPointOnLine(supLineString, clickedPoint);
                
                const d = turf.distance(clickedPoint, infPoint, { units: 'meters' });
                const largeurTotale = turf.distance(infPoint, supPoint, { units: 'meters' });
                
                // S'assurer que le ratio est entre 0 et 1
                const ratio = Math.min(1, Math.max(0, d / largeurTotale));
                
                // Appliquer la formule
                const mocSecondaire = mocPrimaire * (1 - ratio);
                
                // Visualiser le point
                this.visualizeSimplePoint(clickedPoint);
                
                return {
                    mocSecondaire: mocSecondaire.toFixed(2),
                    distance: d.toFixed(2),
                    largeurTotale: largeurTotale.toFixed(2),
                    ratio: (ratio * 100).toFixed(1)
                };
            }
            
            // 5. Point d'intersection avec le bord inférieur
            const infPoint = intersectionInf.features[0];
            
            // 6. Calculer la distance d entre le point cliqué et l'intersection avec bord_inf
            const d = turf.distance(clickedPoint, infPoint, { units: 'meters' });
            
            // 7. Calculer la largeur totale entre les bords
            let largeurTotale;
            
            const intersectionSup = turf.lineIntersect(projectionLine, supLineString);
            if (intersectionSup.features.length) {
                largeurTotale = turf.distance(
                    infPoint,
                    intersectionSup.features[0],
                    { units: 'meters' }
                );
            } else {
                // Si pas d'intersection avec le bord supérieur, estimer avec le point le plus proche
                const supPoint = turf.nearestPointOnLine(supLineString, projected);
                largeurTotale = turf.distance(infPoint, supPoint, { units: 'meters' });
            }
            
            // 8. S'assurer que le ratio est entre 0 et 1
            const ratio = Math.min(1, Math.max(0, d / largeurTotale));
            
            // 9. Appliquer la formule MOC Secondaire = MOC primaire * [1-(d/largeur totale)]
            const mocSecondaire = mocPrimaire * (1 - ratio);
            
            // 10. Visualiser seulement le point cliqué
            this.visualizeSimplePoint(clickedPoint);
            
            // 11. Retourner le résultat avec 2 décimales
            return {
                mocSecondaire: mocSecondaire.toFixed(2),
                distance: d.toFixed(2),
                largeurTotale: largeurTotale.toFixed(2),
                ratio: (ratio * 100).toFixed(1)
            };
        } catch (err) {
            console.error("Erreur calcul MOC secondaire:", err);
            return null;
        }
    }
    
    // Fonction simplifiée pour visualiser uniquement le point cliqué
    visualizeSimplePoint(clickedPoint) {
        try {
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
            
            // Créer uniquement le point
            const points = {
                type: 'FeatureCollection',
                features: [
                    {...clickedPoint, properties: {type: 'clicked'}}
                ]
            };
            
            // Ajouter la source
            this.map.addSource('points-markers', {
                type: 'geojson',
                data: points
            });
            
            // Ajouter la couche
            this.map.addLayer({
                id: 'points-markers',
                type: 'circle',
                source: 'points-markers',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#FF0000',    // Point en rouge
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
        }
    }

    // Méthode pour visualiser les calculs
    visualizeCalculation(clickedPoint, projectedPoint, infPoint, supPoint) {
        try {
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
            
            // Créer uniquement la ligne de projection orthogonale
            const lineFeatures = [
                turf.lineString([
                    clickedPoint.geometry.coordinates,
                    projectedPoint.geometry.coordinates
                ], {type: 'projection'})
            ];
            
            // Créer seulement le point cliqué (rouge)
            const pointsFeatures = [
                {...clickedPoint, properties: {type: 'clicked'}}
            ];
            
            // Créer les collections GeoJSON
            const points = {
                type: 'FeatureCollection',
                features: pointsFeatures
            };
            
            const lines = {
                type: 'FeatureCollection',
                features: lineFeatures
            };
            
            // Ajouter les sources
            this.map.addSource('points-markers', {
                type: 'geojson',
                data: points
            });
            
            this.map.addSource('projection-line', {
                type: 'geojson',
                data: lines
            });
            
            // Ajouter seulement le point rouge (point cliqué)
            this.map.addLayer({
                id: 'points-markers',
                type: 'circle',
                source: 'points-markers',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#FF0000',  // Point cliqué en rouge
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
            
            // Ajouter la ligne de projection (mais en pointillés rouge)
            this.map.addLayer({
                id: 'projection-line',
                type: 'line',
                source: 'projection-line',
                paint: {
                    'line-color': '#FF0000',
                    'line-width': 2,
                    'line-dasharray': [2, 2]
                }
            });
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
            // Visualisation de secours
            this.visualizeSimplePoint(clickedPoint);
        }
    }
    // Fonction simplifiée pour visualiser uniquement le point cliqué
    // Fonction simplifiée pour visualiser uniquement le point cliqué
    visualizeSimplePoint(clickedPoint) {
        try {
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
            
            // 1. Créer uniquement un point
            const points = {
                type: 'FeatureCollection',
                features: [
                    {...clickedPoint, properties: {type: 'clicked'}}
                ]
            };
            
            // Ajouter la source
            this.map.addSource('points-markers', {
                type: 'geojson',
                data: points
            });
            
            // Ajouter la couche
            this.map.addLayer({
                id: 'points-markers',
                type: 'circle',
                source: 'points-markers',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#FF0000',    // Point en rouge
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
        }
    }

    // Méthode améliorée pour visualiser la projection (ancienne méthode conservée pour référence)
    visualizeProjection(clickedPoint, projectedPoint, borderInfPoint, borderSupPoint) {
        try {
            // S'assurer que tous les points sont valides
            const isValidPoint = (point) => {
                return point && point.geometry && point.geometry.coordinates && 
                       Array.isArray(point.geometry.coordinates) && 
                       point.geometry.coordinates.length >= 2;
            };
            
            // Si certains points sont invalides, essayer de les réparer
            if (!isValidPoint(clickedPoint)) {
                console.warn("Point cliqué invalide");
                return;
            }
            
            if (!isValidPoint(projectedPoint)) {
                console.warn("Point projeté invalide, création d'une alternative");
                projectedPoint = turf.point([clickedPoint.geometry.coordinates[0], clickedPoint.geometry.coordinates[1] + 0.001]);
            }
            
            if (!isValidPoint(borderInfPoint)) {
                console.warn("Point de bord inférieur invalide, création d'une alternative");
                borderInfPoint = turf.point([projectedPoint.geometry.coordinates[0] - 0.001, projectedPoint.geometry.coordinates[1] - 0.001]);
            }
            
            if (!isValidPoint(borderSupPoint)) {
                console.warn("Point de bord supérieur invalide, création d'une alternative");
                borderSupPoint = turf.point([projectedPoint.geometry.coordinates[0] + 0.001, projectedPoint.geometry.coordinates[1] + 0.001]);
            }
            
            // Supprimer les visualisations précédentes
            ['projection-line', 'points-markers'].forEach(id => {
                if (this.map.getLayer(id)) this.map.removeLayer(id);
                if (this.map.getSource(id)) this.map.removeSource(id);
            });
        
            // 1. Créer les lignes de visualisation
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
        } catch (error) {
            console.error("Erreur lors de la visualisation:", error);
        }
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