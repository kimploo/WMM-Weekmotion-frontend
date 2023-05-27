import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { chipsColorPicker } from '../assets/customCSS/designSystem';
import { BASE_URL } from '../redux/function/url';
import { diary, diaryTag } from '../redux/types';
import emotion_positive from '../assets/images/emotion_positive.svg';
import emotion_negative from '../assets/images/emotion_negative.svg';
import emotion_etc from '../assets/images/emotion_etc.svg';
import { toast } from '@kimploo/react-toastify';

export default function List({
  yearMonth = new Date()
    .toLocaleDateString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replaceAll('. ', '-')
    .slice(0, -4),
  date = [
    new Date()
      .toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .replaceAll('. ', '-')
      .slice(0, -1),
    new Date()
      .toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .replaceAll('. ', '-')
      .slice(0, -1)
  ]
}: {
  yearMonth: string;
  date: string[];
}) {
  const [diary, setDiary] = useState<diary[]>([]);
  const location = useLocation();

  const requestDiary = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/diary`, {
        params: {
          calenderYn: location.pathname === '/trash' ? 'N' : 'Y',
          yearMonth: yearMonth,
          fromDate: date[0],
          toDate: date[1]
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setDiary(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error('데이터를 불러오지 못했어요.');
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
  }, []);

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
                {new Date(item.modDate)
                  .toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })
                  .split(' ')
                  .join('')
                  .slice(0, -1)}
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
