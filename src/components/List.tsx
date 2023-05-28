import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { chipsColorPicker } from '../assets/customCSS/designSystem';
import { BASE_URL } from '../redux/function/url';
import { diary, diaryTag } from '../redux/types';
import emotion_positive from '../assets/images/emotion_positive.svg';
import emotion_negative from '../assets/images/emotion_negative.svg';
import emotion_etc from '../assets/images/emotion_etc.svg';
import { format } from 'date-fns';
import customToast from '../util/toast';
import { Value } from 'react-calendar/dist/cjs/shared/types';

const currentDate = new Date();

interface Props {
  range: Value;
}

export default function List({ range = [currentDate, currentDate] }: Props) {
  const [diary, setDiary] = useState<diary[]>([]);
  const location = useLocation();

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

  const iconPicker = (tagSeq: string) => {
    if (tagSeq === '1') {
      return (
        <img
          src={emotion_positive}
          alt="emotion_positive"
          className="w-3 h-3"
        />
      );
    } else if (tagSeq === '2') {
      return (
        <img
          src={emotion_negative}
          alt="emotion_negative"
          className="w-3 h-3"
        />
      );
    } else {
      return <img src={emotion_etc} alt="emotion_etc" className="w-3 h-3" />;
    }
  };

  useEffect(() => {
    requestDiary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <div className="w-full">
      {diary.map((item: diary, index) => (
        <Link
          to={`${location.pathname === '/' ? '' : location.pathname}/${
            item.seq
          }`}
          key={index}
        >
          <div key={index} className="px-5 pt-4">
            <div className="flex h-4 items-center">
              <p className="mr-2 text-mono-500 leading-4">
                {format(new Date(item.modDate), 'yyyy/MM/dd')}
              </p>
              <div className="flex gap-x-1">
                {item.tags.map((tag: diaryTag, index) => (
                  <div key={index}>{iconPicker(tag.tag.tagCategorySeq)}</div>
                ))}
              </div>
            </div>
            <h1 className="py-2 text-2xl text-mono-700 font-bold">
              {item.title}
            </h1>
            <div className="flex justify-end pt-1 gap-x-2 pb-4 border-b-[1px] border-mono-300 border-solid">
              {item.tags.map((tag: diaryTag, index) => (
                <div
                  key={index}
                  className={chipsColorPicker(tag.tag.tagCategorySeq)}
                >
                  {tag.tag.tagName}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
