/** @format */
export function convertWindSpeed(speedInMetersPerSecond: number): string {
  const speedInMilesPerHour = speedInMetersPerSecond * 2.237; // Conversion from m/s to mph
  return `${speedInMilesPerHour.toFixed(0)} mph`;
}