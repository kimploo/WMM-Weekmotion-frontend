import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';

import { positiveEmotion } from '../assets/strings/emotions';
import { change } from '../redux/slice/noteSlice';
import { Link } from 'react-router-dom';

export default function Diary() {
  const [diaryInfo, setDiaryInfo] = useState({
    title: '',
    note: ''
  });
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.emotion;
  });

  const titleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDiaryInfo({
      ...diaryInfo,
      [name]: value
    });
  };

  const textAreaOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setDiaryInfo({
      ...diaryInfo,
      [name]: value
    });
  };

  return (
    <section className="bg-mono-100 h-screen flex flex-col gap-2 px-16">
      <div className="py-4">
        {state.emotion.map((item: string, index: number) => (
          <div
            key={index}
            className={
              positiveEmotion.includes(item)
                ? 'badge bg-emotion-lightPink border-emotion-lightPink text-mono-700 m-1 p-3'
                : 'badge bg-emotion-lightBlue border-emotion-lightBlue  text-mono-700 m-1 p-3'
            }
          >
            {item}
          </div>
        ))}
      </div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="input input-bordered bg-mono-100 text-mono-700"
        onChange={titleOnChange}
        placeholder="제목을 작성해주세요."
        required
      />
      <label htmlFor="note" className="label">
        Note
      </label>
      <textarea
        name="note"
        id="textarea"
        className="textarea textarea-bordered h-1/2 bg-mono-100 text-mono-700 resize-none"
        onChange={textAreaOnChange}
        placeholder="일기 내용을 작성해주세요."
        required
      />
      <Link to={'/after'}>
        <button
          className="btn w-full my-4 rounded-full bg-emotion-yellow border-emotion-yellow text-mono-100"
          onClick={() => dispatch(change(diaryInfo))}
        >
          다음
        </button>
      </Link>
    </section>
  );
}
