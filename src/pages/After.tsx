import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { change } from '../redux/slice/emotionSlice';
import weekmotion_logo_select from '../assets/images/weekmotion_logo_select.svg';
import { RootState } from '../redux';
import axios from 'axios';
import { BASE_URL } from '../redux/function/url';
import { tag } from '../redux/types';
import {
  btnYellow,
  chipsBlue,
  chipsBlueBorder,
  chipsColorPicker,
  chipsPink,
  chipsPinkBorder,
  chipsYellow,
  chipsYellowBorder
} from '../assets/customCSS/designSystem';
import customToast from '../util/toast';

export default function After() {
  const state = useSelector((state: RootState) => {
    return state.emotion;
  });
  const [emotion, setEmotion] = useState<tag[]>([]);
  const [checkedEmotion, setCheckedEmotion] = useState<any[]>(state.emotion);
  const dispatch = useDispatch();

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = event.target as HTMLDivElement;
    if (
      !checkedEmotion.includes(
        emotion.find((item: tag) => item.tagName === innerText)
      ) &&
      checkedEmotion.length < 3
    ) {
      setCheckedEmotion([
        ...checkedEmotion,
        emotion.find((item: tag) => item.tagName === innerText)
      ]);
    } else {
      setCheckedEmotion(
        checkedEmotion.filter((item: tag) => item.tagName !== innerText)
      );
    }
  };

  const requestEmotion = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tag`);
      setEmotion(response.data.data);
    } catch (error) {
      throw new Error('Error!');
    }
  };

  useEffect(() => {
    requestEmotion();
  }, []);

  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      <div className="mt-4">
        <img src={weekmotion_logo_select} alt="main_logo" />
      </div>
      <article className="px-5 mt-10">
        <h1 className="text-2xl text-mono-700 font-bold">
          일기를 쓰고 난 후,
          <br />
          오늘의 감정이 바뀌었나요?
        </h1>
        <div className="flex flex-wrap mt-10 gap-2">
          {emotion
            .filter((data) => data.tagCategory.seq === '1')
            .map((item: tag, index: number) => (
              <div
                key={index}
                className={
                  checkedEmotion.find(
                    (tag: tag) => tag.tagName === item.tagName
                  )
                    ? 'h-7 px-3 rounded-full border-[1px] bg-emotion-lightPink border-x-transparent border-y-transparent text-mono-700 cursor-pointer'
                    : 'h-7 px-3 rounded-full border-[1px] border-emotion-lightPink text-mono-700 cursor-pointer'
                }
                onClick={onClick}
              >
                {item.tagName}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          {emotion
            .filter((data: tag) => data.tagCategory.seq === '2')
            .map((item: tag, index: number) => (
              <div
                key={index}
                className={
                  checkedEmotion.find(
                    (tag: tag) => tag.tagName === item.tagName
                  )
                    ? 'h-7 px-3 rounded-full border-[1px] bg-emotion-lightBlue border-x-transparent border-y-transparent text-mono-700 cursor-pointer'
                    : 'h-7 px-3 rounded-full border-[1px] border-emotion-lightBlue text-mono-700 cursor-pointer'
                }
                onClick={onClick}
              >
                {item.tagName}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          {emotion
            .filter((data: tag) => data.tagCategory.seq === '3')
            .map((item: tag, index: number) => (
              <div
                key={index}
                className={
                  checkedEmotion.find(
                    (tag: tag) => tag.tagName === item.tagName
                  )
                    ? 'h-7 px-3 rounded-full border-[1px] bg-emotion-yellow2 border-x-transparent border-y-transparent text-mono-700 cursor-pointer'
                    : 'h-7 px-3 rounded-full border-[1px] border-emotion-yellow2 text-mono-700 cursor-pointer'
                }
                onClick={onClick}
              >
                {item.tagName}
              </div>
            ))}
        </div>
        <div className="mt-10">
          <Link
            to={'/post'}
            onClick={(event) => {
              if (checkedEmotion.length === 0) {
                event.preventDefault();
                customToast.error('하나 이상의 감정을 선택해주세요.');
              }
              dispatch(change(checkedEmotion));
            }}
          >
            <button className={btnYellow}>감정 선택하기</button>
          </Link>
        </div>
      </article>
    </section>
  );
}
