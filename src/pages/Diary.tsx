import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';

import { change } from '../redux/slice/noteSlice';
import { Link } from 'react-router-dom';
import { btnYellow, chipsColorPicker } from '../assets/customCSS/designSystem';
import calendar from '../assets/images/calendar.svg';
import { tag } from '../redux/types';
import { format } from 'date-fns';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import customToast from '../util/toast';

export default function Diary() {
  const [diaryInfo, setDiaryInfo] = useState({
    title: '',
    note: '',
    date: new Date().toISOString()
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
    <section className="bg-mono-100 flex flex-col gap-2 mx-5">
      <div className="flex gap-x-[11px] mt-4">
        <img src={calendar} alt="calendar_icon" />
        <p className="text-mono-700 text-2xl font-bold">
          {format(new Date(diaryInfo.date), 'yyyy.MM.dd')}
        </p>
      </div>
      <div className="flex gap-x-2 mt-4">
        {state.emotion.map((item: tag, index: number) => (
          <div key={index} className={chipsColorPicker(item.tagCategory.seq)}>
            {item.tagName}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Input
          type="text"
          name="title"
          id="title"
          label="Title"
          onChange={titleOnChange}
          placeholder="제목을 작성해주세요."
          required={true}
        />
      </div>
      <Textarea
        name="note"
        id="textarea"
        label="Note"
        onChange={textAreaOnChange}
        placeholder="일기 내용을 작성해주세요."
        required
      ></Textarea>
      <div className="mt-5">
        <Link
          to={'/after'}
          onClick={(event) => {
            if (diaryInfo.title.length === 0 || diaryInfo.note.length === 0) {
              event.preventDefault();
              customToast.error('제목이나 일기 내용을 작성해주세요.');
            }
          }}
        >
          <button
            className={btnYellow}
            onClick={() => dispatch(change(diaryInfo))}
          >
            다음
          </button>
        </Link>
      </div>
    </section>
  );
}
