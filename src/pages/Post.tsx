import { useSelector } from 'react-redux';
import { btnYellow, btnYellowBorder } from '../assets/customCSS/designSystem';
import calendar from '../assets/images/calendar.svg';
import { RootState } from '../redux';

export default function Post() {
  const data = useSelector((state: RootState) => {
    return state.note;
  });
  return (
    <section className="bg-mono-100 w-full h-screen flex flex-col gap-2 px-5">
      <div className="flex gap-x-[11px]">
        <img src={calendar} alt="calendar_icon" />
        <p className="text-mono-700 text-2xl font-bold">{`${data.note.date} 의 감정`}</p>
      </div>
      <div>감정 나열</div>
      <div>일기 내용</div>
      <button className={btnYellow}>감정을 캘린더로 보내기</button>
      <button className={btnYellowBorder}>감정을 소각장으로 보내기</button>
    </section>
  );
}
