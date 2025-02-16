import { defineConfig } from 'vite';

export default defineConfig({
  base: '/arbetsmetodik_code-smells/',
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false')
  }
});