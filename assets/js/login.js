document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer l'élément de l'avion
    const airplane = document.getElementById('airplane');
    const signInButton = document.querySelector('.btn-primary');

    // Positionner l'avion au centre du bouton "Sign In"
    const buttonRect = signInButton.getBoundingClientRect();
    airplane.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
    airplane.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

    // Afficher l'avion
    airplane.style.display = 'block';

    // Déclencher l'animation
    airplane.classList.add('airplane-fly');

    // Ajouter un marqueur sur la carte à la fin de l'animation
    setTimeout(() => {
        // Coordonnées de la Central African Republic
        const destinationCoords = [6.5, 20.5];
        const marker = L.circleMarker(destinationCoords, {
            radius: 10,
            fillColor: '#ff0000', // Rouge pour le marqueur
            color: '#ff0000',
            fillOpacity: 0.8,
            className: 'global-marker'
        }).addTo(map);

        marker.bindTooltip(
            `<strong>HaritaEvi</strong><br>Central African Republic, 2025`,
            { permanent: true, direction: 'top' }
        );

        // Cacher l'avion après l'animation
        airplane.style.display = 'none';
    }, 2000); // 2000ms correspond à la durée de l'animation
});