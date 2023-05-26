import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { change } from '../redux/slice/emotionSlice';
import weekmotion from '../assets/images/weekmotion.svg';
import { positiveEmotion, negativeEmotion } from '../assets/strings/emotions';
import {
  btnYellow,
  chipsBlue,
  chipsBlueBorder,
  chipsPink,
  chipsPinkBorder
} from '../assets/customCSS/designSystem';

export default function Before() {
  const [emotion, setEmotion] = useState<string[]>([]);
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
          오늘의 감정을 선택하세요.
        </h1>
        <div className="my-4">
          {positiveEmotion.map((item: string, index: number) => (
            <div
              key={index}
              className={emotion.includes(item) ? chipsPink : chipsPinkBorder}
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
              className={emotion.includes(item) ? chipsBlue : chipsBlueBorder}
              onClick={onClick}
            >
              {item}
            </div>
          ))}
        </div>
        <Link to={'/diary'} onClick={() => dispatch(change(emotion))}>
          <button className={btnYellow}>일기 쓰러가기</button>
        </Link>
      </article>
    </section>
  );
}
