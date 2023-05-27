import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  btnYellow,
  btnYellowBorder,
  chipsBlue,
  chipsPink,
  smBtnYellow,
  smBtnYellowBorder
} from '../assets/customCSS/designSystem';
import weekmotion_toCalendar from '../assets/images/weekmotion_toCalendar.svg';
import weekmotion_toTrash from '../assets/images/weekmotion_toTrash.svg';
import closeIcon from '../assets/images/closeIcon.svg';
import calendar from '../assets/images/calendar.svg';
import { RootState } from '../redux';

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
  return (
    <section className="bg-mono-100 w-full h-screen flex flex-col gap-2 px-5">
      <div className="flex gap-x-[11px]">
        <img src={calendar} alt="calendar_icon" />
        <p className="text-mono-700 text-2xl font-bold">{`${data.note.date} 의 감정`}</p>
      </div>
      <div>
        {emotion.emotion.map((item: string, index: number) => (
          <div
            key={index}
            // className={positiveEmotion.includes(item) ? chipsPink : chipsBlue}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="text-mono-700 text-2xl font-bold">{data.note.title}</div>
      <div className="text-mono-700 text-base">{data.note.note}</div>
      {/* 캘린더 버튼 */}
      <button
        className={btnYellow}
        onClick={() => setIsModal({ ...isModal, toCalendar: true })}
      >
        감정을 캘린더로 보내기
      </button>
      <input
        type="checkbox"
        id="toCalendar"
        className="modal-toggle"
        checked={isModal.toCalendar}
        readOnly
      />
      <div className="modal">
        <div className="modal-box relative bg-mono-100">
          <label
            htmlFor="toCalendar"
            className="btn absolute right-2 top-2 bg-mono-100 border-none hover:bg-mono-100"
            onClick={() => setIsModal({ ...isModal, toCalendar: false })}
          >
            <img src={closeIcon} alt="close_icon" />
          </label>
          <h3 className="text-lg font-bold text-mono-700">
            감정을 등록할까요?
            <br />
            등록한 감정은 캘린더에서
            <br />
            확인할 수 있어요!
          </h3>
          <img
            src={weekmotion_toCalendar}
            alt="calendar_icon"
            className="w-full px-5"
          />
          <div className="flex justify-end gap-x-2">
            <label
              htmlFor="toCalendar"
              className={smBtnYellowBorder}
              onClick={() => setIsModal({ ...isModal, toCalendar: false })}
            >
              취소
            </label>
            <Link to={'/scheduler'}>
              <button className={smBtnYellow}>등록하기</button>
            </Link>
          </div>
        </div>
      </div>
      {/* 소각장 버튼 */}
      <button
        className={btnYellowBorder}
        onClick={() => setIsModal({ ...isModal, toTrash: true })}
      >
        감정을 소각장으로 보내기
      </button>
      <input
        type="checkbox"
        id="toTrash"
        className="modal-toggle"
        checked={isModal.toTrash}
        readOnly
      />
      <div className="modal">
        <div className="modal-box relative bg-mono-100">
          <label
            htmlFor="toTrash"
            className="btn absolute right-2 top-2 bg-mono-100 border-none hover:bg-mono-100"
            onClick={() => setIsModal({ ...isModal, toTrash: false })}
          >
            <img src={closeIcon} alt="close_icon" />
          </label>
          <h3 className="text-lg font-bold text-mono-700">
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
              className={smBtnYellowBorder}
              onClick={() => setIsModal({ ...isModal, toTrash: false })}
            >
              취소
            </label>
            {/* 차후 소각장으로 연결 */}
            <Link to={'/scheduler'}>
              <button className={smBtnYellow}>보내기</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
