import { isSameDay, isSameMonth, isSameYear } from 'date-fns';

export default function isSameDMY(left: Date, right: Date): boolean {
  return (
    isSameDay(left, right) &&
    isSameMonth(left, right) &&
    isSameYear(left, right)
  );
}
