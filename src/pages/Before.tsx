import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { change } from '../redux/slice/emotionSlice';
import weekmotion from '../assets/images/weekmotion.svg';
import { positiveEmotion, negativeEmotion } from '../assets/strings/emotions';

export default function Before() {
  const [emotion, setEmotion] = useState<string[]>([]);
  const dispatch = useDispatch();

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = event.target;
    if (!emotion.includes(innerText) && emotion.length < 3) {
      setEmotion([...emotion, innerText]);
    } else {
      setEmotion(emotion.filter((item: string) => item !== innerText));
    }
  };

  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      <div className="py-4">
        <img src={weekmotion} alt="main_logo" />
      </div>
      <article className="w-1/2">
        <h1 className="text-2xl text-mono-700 font-bold">
          오늘의 감정을 선택하세요.
        </h1>
        <div className="my-4">
          {positiveEmotion.map((item: string, index: number) => (
            <div
              key={index}
              className={
                emotion.includes(item)
                  ? 'badge bg-emotion-lightPink border-emotion-lightPink text-mono-700 cursor-pointer m-1 p-3'
                  : 'badge badge-outline border-emotion-lightPink text-mono-700 cursor-pointer m-1 p-3'
              }
              onClick={onClick}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="my-4">
          {negativeEmotion.map((item: string, index: number) => (
            <div
              key={index}
              className={
                emotion.includes(item)
                  ? 'badge bg-emotion-lightBlue border-emotion-lightBlue cursor-pointer text-mono-700 m-1 p-3'
                  : 'badge badge-outline border-emotion-lightBlue cursor-pointer text-mono-700 m-1 p-3'
              }
              onClick={onClick}
            >
              {item}
            </div>
          ))}
        </div>
        <Link to={'/diary'} onClick={() => dispatch(change(emotion))}>
          <button className="btn w-full rounded-full bg-emotion-yellow border-emotion-yellow text-mono-100">
            일기 쓰러가기
          </button>
        </Link>
      </article>
    </section>
  );
}
