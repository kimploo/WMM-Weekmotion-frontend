import { useSearchParams } from 'react-router-dom';

import Calendar from 'react-calendar';
import '../assets/customCSS/calendar.css';
import { useEffect } from 'react';

export default function Schduler() {
  const [tabParams, setTabParams] = useSearchParams({ tab: 'calendar' });
  useEffect(() => {
    console.log(tabParams.get('tab'));
  }, [tabParams]);
  return (
    <section className="h-screen bg-mono-100">
      <div className="w-full h-14 flex justify-around items-center">
        <button
          className={
            tabParams.get('tab') === 'calendar'
              ? 'text-lg w-1/2 h-full text-emotion-yellow border-b-4 border-emotion-yellow'
              : 'text-lg w-1/2 h-full text-mono-400'
          }
          onClick={() => setTabParams({ tab: 'calendar' })}
        >
          캘린더
        </button>
        <button
          className={
            tabParams.get('tab') === 'list'
              ? 'text-lg w-1/2 h-full text-emotion-yellow border-b-4 border-emotion-yellow'
              : 'text-lg w-1/2 h-full text-mono-400'
          }
          onClick={() => setTabParams({ tab: 'list' })}
        >
          목록
        </button>
      </div>
      {tabParams.get('tab') === 'calendar' ? (
        <Calendar
          formatDay={(locale, date) => {
            return date.toLocaleDateString('en-US', {
              day: 'numeric'
            });
          }}
          className="text-mono-700"
        />
      ) : (
        <div></div>
      )}
    </section>
  );
}
