import { log } from './consoleLog';

export interface IPodcast {
    name: string;
    description: string;
    programurl: string;
    socialimage: string;
  }
  
  export async function getPodcasts(): Promise<IPodcast[] | null> {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        console.log("Fetching from:", apiUrl);  // Debugga API-länken
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`);
        }

        const data: { programs: IPodcast[] } = await response.json();
        return data.programs || [];
    } catch (error) {
        console.error("Fel vid hämtning:", error);
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