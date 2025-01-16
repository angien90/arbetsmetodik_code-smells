import { log } from './consoleLog';

const toggleLightModeButton = document.querySelector('.toggle-button') as HTMLButtonElement | null;

if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
} else {
    log('Knappen för light-/darkmode kunde inte hittas');
}

export function toggleLightMode(): void {
    const isLightMode = document.body.classList.toggle('lightmode');

    if (toggleLightModeButton) {
        toggleLightModeButton.innerHTML = isLightMode ? 'Välj mörkt läge' : 'Välj ljust läge';
    }
}

export default toggleLightMode;