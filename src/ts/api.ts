import { log } from './consoleLog';

interface Podcast {
    name: string;
    description: string;
    programurl: string;
    socialimage: string;
  }
  
  export async function getPodcasts(): Promise<Podcast[] | null> {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL);

        if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`);
        }

        const data: { programs: Podcast[] } = await response.json();  // Förvänta dig en objektstruktur med en "programs"-nyckel
        return data.programs || [];  // Säkerställ att du alltid returnerar en array
    } catch (error) {
        log('Något blev fel:', error);
        displayErrorMessage("Vi kunde inte hämta podcastinformation just nu. Försök igen senare!");
        return null;
    }
}

/**
 * Funktion för felmeddelande när podcastinformation inte kan visas
 * Dialogen stängs efter 10 sekunder
 * @param {*} message  - Meddelande som visas för användaren
 */
function displayErrorMessage(message: string): void {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    document.body.appendChild(errorMessage);

    setTimeout(() => {
        errorMessage.remove();
    }, 10000);
}

export default getPodcasts;