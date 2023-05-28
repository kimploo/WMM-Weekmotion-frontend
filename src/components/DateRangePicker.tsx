import DRP from '@wojtekmaj/react-daterange-picker';

import type {
  LooseValue,
  Range,
  TileClassNameFunc
} from 'react-calendar/dist/cjs/shared/types';

import './DateRangePicker.css';
import './DateRangePickerCalendar.css';
import { ReactComponent as CalIcon } from '../assets/images/date_range_picker_toggle.svg';
import { ReactComponent as WMMLogo } from '../assets/images/weekmotion_logo_1.svg';

import RightIcon from '../items/RightIcon';
import LeftIcon from '../items/LeftIcon';
import devConsoleLog from '../util/log/devConsoleLog';

interface Props {
  range: LooseValue;
  setRange: (range: Range<Date>) => void;
}

export default function DateRangePicker({ range, setRange }: Props) {
  // TODO: useCallback 적용
  // https://github.com/wojtekmaj/react-calendar/wiki/Recipes#selectively-style-tiles
  const selectedTile: TileClassNameFunc = ({ activeStartDate, date, view }) => {
    // 해당 달의 날짜가 아닌 경우 흐리게
    if (view === 'month' && activeStartDate.getMonth() !== date.getMonth()) {
      return 'opacity-50';
    }
    // 일요일 빨간색 표시
    if (view === 'month' && date.getDay() === 0) {
      return 'text-[#E20823]';
    }
  };

  return (
    <>
      <DRP
        value={range}
        onChange={(range) => {
          setRange(range);
        }}
        calendarType={'US'}
        calendarIcon={<CalIcon />}
        clearIcon={<WMMLogo />}
        prevLabel={<LeftIcon />}
        nextLabel={<RightIcon />}
        prev2Label={null}
        next2Label={null}
        format={'y.MM.dd'}
        className={'wmm-date-range-picker'}
        formatDay={(_: never, date: Date) => date.getDate()}
        tileClassName={selectedTile}
      ></DRP>
    </>
  );
}
