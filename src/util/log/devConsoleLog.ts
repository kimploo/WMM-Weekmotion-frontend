export default function devConsoleLog(...args: unknown[]) {
  if (import.meta.env.DEV) {
    return console.log(...args);
  }
  return;
}
