import DateRangePicker from '../components/DateRangePicker';
import List from '../components/List';
import backIcon from '../assets/images/back.svg';
import { useNavigate } from 'react-router-dom';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { BASE_URL } from '../redux/function/url';
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { diary } from '../redux/types';
import customToast from '../util/toast';

export default function Trash() {
  const navigate = useNavigate();
  const currentDate = new Date();
  const [diaries, setDiaries] = useState([]);
  const [range, setRange] = useState<Value>([currentDate, currentDate]);
  const [diary, setDiary] = useState<diary[]>([]);

  const handleDatePicker = (range: Value) => {
    setRange(range);
  };

  const requestDiary = async () => {
    try {
      if (range && !(range instanceof Date)) {
        const response = await axios.get(`${BASE_URL}/diary`, {
          params: {
            calenderYn: location.pathname === '/trash' ? 'N' : 'Y',
            yearMonth: format(range[0] as Date, 'yyyy-MM'),
            fromDate: format(range[0] as Date, 'yyyy/MM/dd'),
            toDate: format(range[1] as Date, 'yyyy/MM/dd')
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setDiary(response.data.data);
      }
    } catch (error) {
      console.error(error);
      customToast.error('데이터를 불러오지 못했어요.');
    }
  };

  useEffect(() => {
    requestDiary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <section className="bg-mono-100 min-h-screen h-auto max-h-full flex flex-col items-center">
      <nav className="flex w-full h-12 justify-between items-center">
        <img
          src={backIcon}
          alt="back_icon"
          className="flex-none cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl text-mono-700 justify-self-center">소각장</h1>
        <div></div>
      </nav>
      <>
        <DateRangePicker range={range} setRange={handleDatePicker} />
        <List range={range} />
      </>
    </section>
  );
}
