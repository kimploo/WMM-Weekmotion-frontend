import DateRangePicker from '../components/DateRangePicker';
import List from '../components/List';

export default function Trash() {
  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      <DateRangePicker />
      <List />
    </section>
  );
}
