import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';

import { positiveEmotion } from '../assets/strings/emotions';
import { change } from '../redux/slice/noteSlice';

export default function Diary() {
  const [note, setNote] = useState<string>('');
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.emotion;
  });

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setNote(value);
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
      <label htmlFor="textarea" className="label">
        Note
      </label>
      <textarea
        name="textarea"
        id="textarea"
        className="textarea textarea-bordered h-1/2 bg-mono-100 text-mono-700 resize-none"
        onChange={onChange}
        required
      />
      <button
        className="btn w-full my-4 rounded-full bg-emotion-yellow border-emotion-yellow text-mono-100"
        onClick={() => dispatch(change(note))}
      >
        다음
      </button>
    </section>
  );
}
