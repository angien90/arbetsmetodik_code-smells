interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Lägg till fler miljövariabler här om det behövs
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }