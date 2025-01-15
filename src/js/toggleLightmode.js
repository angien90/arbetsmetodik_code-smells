const toggleLightModeButton = document.querySelector('.toggle-btn');

if (toggleLightModeButton) {
    console.log(toggleLightModeButton);
    toggleLightModeButton.addEventListener('click', toggleLightMode);
} else {
    console.error('Knappen för ligt-/darkmode kunde inte hittas');
}

export function toggleLightMode() {
    document.body.classList.toggle('darkmode');

    if (document.body.classList.contains('darkmode')) {
        toggleLightModeButton.innerHTML = 'Välj mörkt läge';
        console.log('Mörkt läge');
    } else {
        toggleLightModeButton.innerHTML = 'Välj ljust läge';
        console.log('Ljust läge');
    }   
}

export default toggleLightMode;