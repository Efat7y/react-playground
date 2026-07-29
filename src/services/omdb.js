export const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
export const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

if (!API_KEY || !BASE_URL) {
  console.error(
    "[OMDb] Missing env vars. Ensure VITE_OMDB_API_KEY and VITE_OMDB_BASE_URL are set in .env, then restart the Vite dev server.",
  );
}
