import Calendar from 'react-calendar';
import '../assets/customCSS/calendar.css';

export default function Schduler() {
  return (
    <section className="h-screen bg-mono-100">
      <Calendar
        formatDay={(locale, date) => {
          return date.toLocaleDateString('en-US', {
            day: 'numeric'
          });
        }}
        className="text-mono-700"
      />
    </section>
  );
}
