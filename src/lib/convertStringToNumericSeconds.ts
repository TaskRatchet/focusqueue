/**
 * Format of s is "mm:ss"
 * @param s
 * @returns seconds: number
 */
export default function convertStringToNumericSeconds(s: string): number {
  const minuteSeconds = 60;
  const [minute, seconds] = s.split(":").map(Number);
  return minute * minuteSeconds + seconds;
}
