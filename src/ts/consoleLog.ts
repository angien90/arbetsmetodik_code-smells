export function log(...args: any[]): void {
    if (import.meta.env.VITE_APP_ENV === 'production') {
        console.log(...args);  
    }
}
