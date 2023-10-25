export function useRandomintFrominterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function useFormattedTime(time: number): string {
  return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
}