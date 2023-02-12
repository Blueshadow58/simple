/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_ASTRO_API_KEY: string;
  readonly PUBLIC_ASTRO_PROJECT_ID: string;
  readonly PUBLIC_ASTRO_STORAGE_BUCKET: string;
  readonly PUBLIC_ASTRO_APP_ID: string;
  readonly PUBLIC_AUTHORIZATION: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
