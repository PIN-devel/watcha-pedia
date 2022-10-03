export const baseURL = import.meta.env.VITE_API_HOST;
const apiKey = import.meta.env.VITE_API_KEY;
const apiVersion = "3";
export function getURL(url: string, params?: string) {
  return `${baseURL}/${apiVersion}${url}?api_key=${apiKey}&language=ko-KR&${params}`;
}
