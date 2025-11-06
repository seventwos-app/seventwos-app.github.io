function toggleInfo() {
    const infoPanel = document.getElementById('infoPanel');
    if (infoPanel.style.display === 'none' || infoPanel.style.display === '') {
        infoPanel.style.display = 'block';
    } else {
        infoPanel.style.display = 'none';
    }
}

// Adjust position for responsiveness
window.addEventListener('resize', () => {
    const infoPanel = document.getElementById('infoPanel');
    const infoButton = document.getElementById('infoButton');
    const heroContainer = document.querySelector('.hero-container');
    const buttonRect = infoButton.getBoundingClientRect();

    // Use visualViewport for accurate dimensions on iOS
    const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;

    // Keep the width fixed at 300 px for all screens
    infoPanel.style.width = '300px';

    if (viewportWidth < 500) { // Mobile
        infoPanel.style.top = `${buttonRect.bottom + 10}px`;
        infoPanel.style.right = '10px';
    } else if (viewportWidth >= 500 && viewportWidth < 1024) { // Tablet
        // Position relative to hero container
        infoPanel.style.position = 'absolute';
        infoPanel.style.top = '20px';
        infoPanel.style.right = '20px';

        // Append to hero container if not already
        if (infoPanel.parentElement !== heroContainer) {
            heroContainer.appendChild(infoPanel);
        }
    } else { // Desktop
        infoPanel.style.position = 'fixed';
        infoPanel.style.top = '20px';
        infoPanel.style.right = '20px';

        // Move back to the body if needed
        if (infoPanel.parentElement !== document.body) {
            document.body.appendChild(infoPanel);
        }
    }
});

document.addEventListener('click', function(event) {
    const infoPanel = document.getElementById('infoPanel');
    const infoButton = document.getElementById('infoButton');

    if (infoPanel.style.display === 'block' &&
        !infoPanel.contains(event.target) &&
        !infoButton.contains(event.target)) {
        infoPanel.style.display = 'none';
    }
});

// Run on the load
window.addEventListener('load', () => {
    window.dispatchEvent(new Event('resize'));
});