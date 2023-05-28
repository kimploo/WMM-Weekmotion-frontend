import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../assets/customCSS/calendar.css';
import {
  tab,
  tabActive,
  smBtnYellowBorder,
  smBtnYellow
} from '../assets/customCSS/designSystem';
import weekmotion_ask from '../assets/images/weekmotion_ask.svg';
import checkBoxEnable from '../assets/images/checkBoxEnable.svg';
import checkBoxChecked from '../assets/images/checkBoxSelected.svg';
import closeIcon from '../assets/images/closeIcon.svg';

import WMMCalendar from '../components/WMMCalendar';
import List from '../components/List';
import DateRangePicker from '../components/DateRangePicker';

import axios from 'axios';
import { BASE_URL } from '../redux/function/url';
import devConsoleLog from '../util/log/devConsoleLog';
import { Range, Value } from 'react-calendar/dist/cjs/shared/types';

export default function Scheduler() {
  const currentDate = new Date();
  const [date, setDate] = useState<Value>(currentDate);
  const [range, setRange] = useState<Value>([currentDate, currentDate]);
  const [tabParams, setTabParams] = useSearchParams({ tab: 'calendar' });
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedToday, setIsCheckedToday] = useState(false);
  const [diaries, setDiaries] = useState([]);

  const handleDatePicker = (range: Value) => {
    devConsoleLog('handleDatePicker', range);
    setRange(range);
  };

  const handleCalendar = (
    date: Value,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDate(date);
    setTabParams({ tab: 'list' });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/diary`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((data) => {
        devConsoleLog('data', data);
        setDiaries(data.data.data);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('today') !== 'checked') {
      setIsChecked(true);
    }
  }, []);

  return (
    <section className="h-screen bg-mono-100">
      <div className="w-full h-14 flex justify-around items-center">
        <button
          className={
            tabParams.get('tab') === 'calendar'
              ? 'text-lg w-1/2 h-full text-emotion-yellow border-b-4 border-emotion-yellow'
              : 'text-lg w-1/2 h-full text-mono-400 border-b-[1px] border-mono-300'
          }
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
      {/* modal box */}
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        checked={isChecked}
        readOnly
      />
      <div className="modal">
        <div className="modal-box relative bg-mono-100">
          <label
            htmlFor="my-modal-3"
            className="btn absolute right-2 top-2 bg-mono-100 border-none hover:bg-mono-100"
            onClick={() => setIsChecked(!isChecked)}
          >
            <img src={closeIcon} alt="close_icon" />
          </label>
          <h3 className="text-lg font-bold text-mono-700">
            오늘의 감정을
            <br />
            기록하러 갈까요?
          </h3>
          <img src={weekmotion_ask} alt="ask_icon" className="w-full px-5" />
          <div className="flex justify-end gap-x-[7px] pr-1 pb-[9px]">
            <span className="text-mono-700">오늘 하루 보지않기</span>
            <label
              htmlFor="checkToday"
              onClick={() => setIsCheckedToday(!isCheckedToday)}
            >
              {!isCheckedToday ? (
                <img src={checkBoxEnable} alt="enable_icon" />
              ) : (
                <img src={checkBoxChecked} alt="checked_icon" />
              )}
            </label>
            <input
              type="checkbox"
              name="checkToday"
              id="checkToday"
              className="hidden"
              readOnly
            />
          </div>
          <div className="flex justify-end gap-x-2">
            <label
              htmlFor="my-modal-3"
              className={smBtnYellowBorder}
              onClick={() => {
                if (isCheckedToday) {
                  localStorage.setItem('today', 'checked');
                }
                setIsChecked(!isChecked);
              }}
            >
              안할래요
            </label>
            <Link to={'/before'}>
              <button className={smBtnYellow}>기록하기</button>
            </Link>
          </div>
        </div>
      </div>
      {tabParams.get('tab') === 'calendar' ? (
        <WMMCalendar
          date={date}
          handleCalendar={handleCalendar}
          diaries={diaries}
        />
      ) : (
        <>
          <DateRangePicker range={range} setRange={handleDatePicker} />
          <List range={range} />
        </>
      )}
    </section>
  );
}
