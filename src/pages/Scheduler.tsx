import Calendar from 'react-calendar';
import '../assets/customCSS/calendar.css';

export default function Schduler() {
  return (
    <section className="h-screen bg-mono-100">
      <div className="w-full h-14 flex justify-around items-center">
        <button className="text-lg text-mono-400">캘린더</button>
        <button className="text-lg text-mono-400">목록</button>
      </div>
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
