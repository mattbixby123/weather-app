/** @format */
export function metersToMiles(visibilityInMeters: number): string {
  const visibilityInMiles = visibilityInMeters / 1609.34; // 1 mile = 1609.34 meters
  return `${visibilityInMiles.toFixed(0)} miles`; // Round to 0 decimal places and add 'miles' unit
}