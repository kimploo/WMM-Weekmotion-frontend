import Calendar from 'react-calendar';
import RightIcon from '../items/RightIcon';
import LeftIcon from '../items/LeftIcon';
import { ReactComponent as WMMLogo } from '../assets/images/weekmotion_logo_1.svg';
import { format } from 'date-fns';
import { TileClassNameFunc } from 'react-calendar/dist/cjs/shared/types';
import './WMMCalendar.css';
import CalendarDropdownIcon from '../items/CalendarDropdownIcon';
import WMMCalendarTile from './WMMCalendarTile';

interface Props {
  value: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
}

export default function WMMCalendar({ value, onChange }: Props) {
  const tileClassName: TileClassNameFunc = ({
    activeStartDate,
    date,
    view
  }) => {
    // 해당 달의 날짜가 아닌 경우 흐리게
    if (view === 'month' && activeStartDate.getMonth() !== date.getMonth()) {
      return 'opacity-50';
    }
    // 일요일 빨간색 표시
    if (view === 'month' && date.getDay() === 0) {
      return 'text-[#E20823]';
    }
    // TODO: class 이름으로 positive, negative, dontknow 구분하기
  };

  return (
    <Calendar
      value={value}
      className={'wmm-calendar-view'}
      onChange={onChange}
      navigationLabel={({ date, label, locale, view }) => (
        <div className="flex justify-center">
          <WMMLogo />
          <span>{format(date, 'yyyy년 M월')}</span>
          <CalendarDropdownIcon></CalendarDropdownIcon>
        </div>
      )}
      prevLabel={<LeftIcon />}
      nextLabel={<RightIcon />}
      prev2Label={null}
      next2Label={null}
      calendarType={'US'}
      formatDay={(locale, date) => {
        return date.toLocaleDateString('en-US', {
          day: 'numeric'
        });
      }}
      tileContent={<WMMCalendarTile />}
      tileClassName={tileClassName}
      // className="text-mono-700"
    />
  );
}
