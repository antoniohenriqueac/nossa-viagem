const baseUrl = import.meta.env.BASE_URL;

/** Public asset path with Vite `base` prefix (GitHub Pages `/nossa-viagem/`). */
export function withBase(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${normalized}`;
}
