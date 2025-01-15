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
        return null;
    }
}

export default getPodcasts;