/**
 * Formats a duration in milliseconds as mm:ss.ss.
 * e.g. 75_430 ms → "01:15.43"
 */
export function formatDuration (ms: number): string {
  const totalSeconds = ms / 1000
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${seconds.toFixed(2).padStart(5, '0')}`
}

/**
 * Formats a byte count using the nearest appropriate unit (KB or MB).
 * e.g. 512_000 bytes → "500.0 KB", 1_572_864 bytes → "1.5 MB"
 */
export function formatFileSize (bytes: number): string {
  const MB = 1024 * 1024
  if (bytes >= MB) {
    return `${(bytes / MB).toFixed(1)} MB`
  }
  return `${(bytes / 1024).toFixed(1)} KB`
}
