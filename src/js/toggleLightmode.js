const toggleLightModeButton = document.querySelector('.toggle-button');

if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
} else {
    console.error('Knappen för light-/darkmode kunde inte hittas');
}

export function toggleLightMode() {
    const isLightMode = document.body.classList.toggle('lightmode');

    toggleLightModeButton.innerHTML = isLightMode ? 'Välj mörkt läge' : 'Välj ljust läge';  
}

export default toggleLightMode;