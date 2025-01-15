
export async function getPodcasts() {
    try {
        const response = await fetch('https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false');
        
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
