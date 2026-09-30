/**
 * Helper class / fungsi utility spasial (Turf.js & Geometri).
 * Digunakan untuk perhitungan jarak, buffer, dan kalkulasi geometri peta.
 */

export interface Coordinates {
  longitude: number;
  latitude: number;
}

/**
 * Menghitung jarak Euclidean sederhana antara dua titik koordinat (dalam km pendekatan haversine).
 */
export function calculateDistanceKm(from: Coordinates, to: Coordinates): number {
  const R = 6371; // Radius bumi dalam km
  const dLat = ((to.latitude - from.latitude) * Math.PI) / 180;
  const dLon = ((to.longitude - from.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((from.latitude * Math.PI) / 180) *
      Math.cos((to.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Format koordinat menjadi string tampilan human-readable
 */
export function formatCoordinates(coords: Coordinates): string {
  return `${coords.latitude.toFixed(6)}, ${coords.longitude.toFixed(6)}`;
}
