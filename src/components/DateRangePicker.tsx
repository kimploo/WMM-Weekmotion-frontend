import { useState } from 'react';
import DRP from '@wojtekmaj/react-daterange-picker';
import {
  isSameDay,
  isSameMonth,
  isSameYear,
  isAfter,
  isBefore,
  startOfDay,
  endOfDay
} from 'date-fns';

import type {
  Range,
  TileClassNameFunc
} from 'react-calendar/dist/cjs/shared/types';

import './Calendar.css';
import './DateRangePicker.css';
import { ReactComponent as CalIcon } from '../assets/images/date_range_picker_toggle.svg';
import { ReactComponent as WMMLogo } from '../assets/images/weekmotion_logo_1.svg';

export default function DateRangePicker() {
  const currentDate = new Date();
  const [value, onChange] = useState<Range<Date>>([currentDate, currentDate]);

  const isSameDMY = (left: Date, right: Date): boolean => {
    return (
      isSameDay(left, right) &&
      isSameMonth(left, right) &&
      isSameYear(left, right)
    );
  };

  const selectedTile: TileClassNameFunc = ({ date, view }) => {
    if (!value) return;
    const [start, end] = value;

    if (view === 'month' && start.getMonth() === date.getMonth()) {
      if (isSameDMY(start, date)) {
        console.log('start', start.getDate());
        return 'wmm-calendar__tile--start';
      }
      if (isAfter(date, endOfDay(start)) && isBefore(date, startOfDay(end))) {
        console.log('middle', date.getDate());
        return 'wmm-calendar__tile--middle';
      }
      if (isSameDMY(end, date)) {
        console.log('end', start.getDate());
        return 'wmm-calendar__tile--end';
      }
    }
  };

  return (
    <>
      <DRP
        onChange={onChange}
        value={value}
        name={'wmm-date-range-picker'}
        calendarType={'US'}
        calendarIcon={<CalIcon></CalIcon>}
        clearIcon={<WMMLogo></WMMLogo>}
        format={'y.MM.dd'}
        formatDay={(_: any, date: Date) => date.getDate()}
        tileClassName={selectedTile}
      ></DRP>
    </>
  );
}
// .react-calendar__tile--rangeStart,
// .react-calendar__tile--hoverStart {
//   background: linear-gradient(to right, white 50%, #FFE388 50%) !important;
// }
