import { useParams } from 'react-router-dom';
import { btnYellow } from '../assets/customCSS/designSystem';
import DiaryPost from '../components/DiaryPost';

export default function SchedulerPost() {
  const params = useParams();

  return (
    <section className="bg-mono-100 h-screen flex flex-col p-5">
      <DiaryPost params={params.id} />
      <div className="pt-10">
        {/* 버튼에 소각장 카테고리로 수정 기능 추가해야함 */}
        <button className={`${btnYellow} mb-4`}>
          감정을 소각장으로 보내기
        </button>
      </div>
    </section>
  );
}
