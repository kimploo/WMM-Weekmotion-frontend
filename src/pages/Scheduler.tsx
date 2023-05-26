import { useSearchParams } from 'react-router-dom';

import Calendar from 'react-calendar';
import '../assets/customCSS/calendar.css';
import { useEffect } from 'react';
import { tab, tabActive } from '../assets/customCSS/designSystem';

export default function Schduler() {
  const [tabParams, setTabParams] = useSearchParams({ tab: 'calendar' });
  useEffect(() => {
    console.log(tabParams.get('tab'));
  }, [tabParams]);
  return (
    <section className="h-screen bg-mono-100">
      <div className="w-full h-14 flex justify-around items-center">
        <button
          className={tabParams.get('tab') === 'calendar' ? tabActive : tab}
          onClick={() => setTabParams({ tab: 'calendar' })}
        >
          캘린더
        </button>
        <button
          className={tabParams.get('tab') === 'list' ? tabActive : tab}
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
