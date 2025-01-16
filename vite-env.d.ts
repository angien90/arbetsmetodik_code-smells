interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_ENV: string;  // Lägg till denna rad
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}