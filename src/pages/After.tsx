import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { change } from '../redux/slice/emotionSlice';
import weekmotion from '../assets/images/weekmotion.svg';
import { positiveEmotion, negativeEmotion } from '../assets/strings/emotions';
import { RootState } from '../redux';

export default function After() {
  const state = useSelector((state: RootState) => {
    return state.emotion;
  });
  const [emotion, setEmotion] = useState<string[]>(state.emotion);
  const dispatch = useDispatch();

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = event.target as HTMLDivElement;
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
      <article className="w-4/5">
        <h1 className="text-2xl text-mono-700 font-bold">
          일기를 쓰고 난 후,
          <br />
          오늘의 감정이 바뀌었나요?
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
        <Link to={'/post'} onClick={() => dispatch(change(emotion))}>
          <button className="btn w-full rounded-full bg-emotion-yellow border-emotion-yellow text-mono-100">
            감정 선택하기
          </button>
        </Link>
      </article>
    </section>
  );
}
