export async function getPodcasts() {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL);

        if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Något blev fel:', error);
        displayErrorMessage("Vi kunde inte hämta podcastinformation just nu. Försök igen senare!");
        return null;
    }
}

/**
 * Funktion för felmeddelande när podcastinformation inte kan visas
 * Dialogen stängs efter 10 sekunder
 * @param {*} message  - Meddelande som visas för användaren
 */
function displayErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    document.body.appendChild(errorMessage);

    setTimeout(() => {
        errorMessage.remove();
    }, 10000);
}

export default getPodcasts;