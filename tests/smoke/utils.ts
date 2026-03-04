/**
 * Formats a duration in milliseconds as mm:ss.ss.
 * e.g. 75_430 ms → "01:15.43"
 */
export function formatDuration(ms: number): string {
  const totalSeconds = ms / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${seconds.toFixed(2).padStart(5, '0')}`;
}
