import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  btnYellow,
  btnYellowBorder,
  chipsColorPicker,
  smBtnYellow,
  smBtnYellowBorder
} from '../assets/customCSS/designSystem';
import weekmotion_toCalendar from '../assets/images/weekmotion_toCalendar.svg';
import weekmotion_toTrash from '../assets/images/weekmotion_toTrash.svg';
import closeIcon from '../assets/images/closeIcon.svg';
import calendar from '../assets/images/calendar.svg';
import { RootState } from '../redux';
import { tag } from '../redux/types';
import axios from 'axios';
import { BASE_URL } from '../redux/function/url';
import customToast from '../util/toast';

export default function Post() {
  const data = useSelector((state: RootState) => {
    return state.note;
  });
  const emotion = useSelector((state: RootState) => {
    return state.emotion;
  });
  const [isModal, setIsModal] = useState({
    toCalendar: false,
    toTrash: false,
    toDelete: false
  });
  const navigate = useNavigate();

  const requestDiary = async (category: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/diary`,
        {
          title: data.note.title,
          contents: data.note.note,
          calenderYn: category === 'calendar' ? 'Y' : 'N',
          tagSeq: emotion.emotion.map((item: tag) => {
            return item.seq;
          })
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );
      if (response.status === 201) {
        if (category === 'calendar') {
          navigate('/scheduler');
          customToast.success('캘린더에 감정이 등록되었어요!');
        } else if (category === 'trash') {
          navigate('/trash');
          customToast.success('소각장에 감정이 등록되었어요!');
        }
      }
    } catch (error) {
      throw new Error('Error!');
    }
  };

  return (
    <section className="bg-mono-100 gap-2 px-5">
      <div className="flex gap-x-[11px] mt-4">
        <img src={calendar} alt="calendar_icon" />
        <p className="text-mono-700 text-2xl font-bold">{`${data.note.date.slice(
          0,
          10
        )} 의 감정`}</p>
      </div>
      <div className="flex gap-x-2 mt-4">
        {emotion.emotion.map((item: tag, index: number) => (
          <div key={index} className={chipsColorPicker(item.tagCategory.seq)}>
            {item.tagName}
          </div>
        ))}
      </div>
      <div className="text-mono-700 text-2xl font-bold mt-4">
        {data.note.title}
      </div>
      <div className="text-mono-700 text-base mt-4">{data.note.note}</div>
      {/* 캘린더 버튼 */}
      <div className="mt-4">
        <button
          className={btnYellow}
          onClick={() => setIsModal({ ...isModal, toCalendar: true })}
        >
          감정을 캘린더로 보내기
        </button>
      </div>
      <div className="mt-4">
        <button
          className={btnYellowBorder + 'mt-4'}
          onClick={() => setIsModal({ ...isModal, toTrash: true })}
        >
          감정을 소각장으로 보내기
        </button>
      </div>

      <input
        type="checkbox"
        id="toCalendar"
        className="modal-toggle"
        checked={isModal.toCalendar}
        readOnly
      />
      <div className="modal">
        <div className="modal-box p-5 bg-mono-100 mx-9 min-h-[328px] flex flex-col justify-between">
          <label
            htmlFor="toCalendar"
            className="btn absolute right-2 top-2 bg-mono-100 border-none hover:bg-mono-100"
            onClick={() => setIsModal({ ...isModal, toCalendar: false })}
          >
            <img src={closeIcon} alt="close_icon" />
          </label>
          <h3 className="text-2xl font-bold text-mono-700">
            감정을 등록할까요?
            <br />
            등록한 감정은 캘린더에서
            <br />
            확인할 수 있어요!
          </h3>
          <img
            src={weekmotion_toCalendar}
            alt="calendar_icon"
            className="w-full"
          />
          <div className="flex justify-end gap-x-2">
            <label
              htmlFor="toCalendar"
              className={
                'flex justify-center items-center basis-[75px] h-10 rounded-full bg-emotion-yellow border-emotion-yellow font-sans text-mono-100 text-sm font-bold'
              }
              onClick={() => setIsModal({ ...isModal, toCalendar: false })}
            >
              취소
            </label>
            <button
              onClick={() => requestDiary('calendar')}
              className={
                'flex justify-center items-center basis-[100px] h-10 border-2 rounded-full bg-mono-100 border-emotion-yellow font-sans text-emotion-yellow text-sm font-bold'
              }
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
      {/* 소각장 버튼 */}

      <input
        type="checkbox"
        id="toTrash"
        className="modal-toggle"
        checked={isModal.toTrash}
        readOnly
      />
      <div className="modal">
        <div className="modal-box p-5 bg-mono-100 mx-9 min-h-[328px] flex flex-col justify-between">
          <label
            htmlFor="toTrash"
            className="btn absolute right-2 top-2 bg-mono-100 border-none hover:bg-mono-100"
            onClick={() => setIsModal({ ...isModal, toTrash: false })}
          >
            <img src={closeIcon} alt="close_icon" />
          </label>
          <h3 className="text-2xl font-bold text-mono-700">
            감정을 소각장으로
            <br />
            보낼까요?
          </h3>
          <img
            src={weekmotion_toTrash}
            alt="trash_icon"
            className="w-full px-5"
          />
          <div className="flex justify-end gap-x-2">
            <label
              htmlFor="toTrash"
              className={
                'flex justify-center items-center basis-[75px] h-10 rounded-full bg-emotion-yellow border-emotion-yellow font-sans text-mono-100 text-sm font-bold'
              }
              onClick={() => setIsModal({ ...isModal, toTrash: false })}
            >
              취소
            </label>
            <button
              onClick={() => requestDiary('trash')}
              className={
                'flex justify-center items-center basis-[100px] h-10 border-2 rounded-full bg-mono-100 border-emotion-yellow font-sans text-emotion-yellow text-sm font-bold'
              }
            >
              보내기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
