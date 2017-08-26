export const USE_API = 'USE_API';

export function useApi(config) {
  return { type: USE_API, api: config };
}
