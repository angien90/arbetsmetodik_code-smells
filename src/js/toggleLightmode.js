const toggleLightModeButton = document.querySelector('.toggle-button');

if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
} else {
    console.error('Knappen för light-/darkmode kunde inte hittas');
}

export function toggleLightMode() {
    const isDarkMode = document.body.classList.toggle('darkmode');

    toggleLightModeButton.innerHTML = isDarkMode ? 'Välj ljust läge' : 'Välj mörkt läge';  
}

export default toggleLightMode;