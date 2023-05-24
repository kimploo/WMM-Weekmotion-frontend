import { Link } from 'react-router-dom';
import weekmotion from '../assets/images/weekmotion.svg';

export default function Menu() {
  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      <div className="py-4">
        <img src={weekmotion} alt="main_logo" />
      </div>
      <div className="flex flex-col gap-4 py-4 w-1/2">
        <Link to={'/before'}>
          <button className="btn btn-wide w-full rounded-full bg-emotion-yellow hover:bg-emotion-lightYellow border-emotion-yellow hover:border-emotion-lightYellow text-mono-100">
            감정을 기록하기
          </button>
        </Link>
        <Link to={'/calendar'}>
          <button className="btn btn-wide w-full rounded-full bg-mono-100 hover:bg-mono-100 border-emotion-yellow hover:border-emotion-yellow text-emotion-yellow">
            감정 지도를 보기
          </button>
        </Link>
      </div>
    </section>
  );
}
