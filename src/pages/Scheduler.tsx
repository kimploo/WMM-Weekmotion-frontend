import { Link, useSearchParams } from 'react-router-dom';

import Calendar from 'react-calendar';
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
import { useState } from 'react';

export default function Schduler() {
  const [tabParams, setTabParams] = useSearchParams({ tab: 'calendar' });
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedToday, setIsCheckedToday] = useState(false);

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
              onClick={() => setIsChecked(!isChecked)}
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
        <Calendar
          formatDay={(locale, date) => {
            return date.toLocaleDateString('en-US', {
              day: 'numeric'
            });
          }}
          className="text-mono-700"
        />
      ) : (
        <div>List here</div>
      )}
    </section>
  );
}
