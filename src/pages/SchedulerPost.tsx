import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { btnYellow } from '../assets/customCSS/designSystem';
import DiaryPost from '../components/DiaryPost';
import { BASE_URL } from '../redux/function/url';
import backIcon from '../assets/images/back.svg';
import editIcon from '../assets/images/edit.svg';
import customToast from '../util/toast';

export default function SchedulerPost() {
  const params = useParams();
  const navigate = useNavigate();

  const requestToTrash = async () => {
    try {
      const response = axios.patch(
        `${BASE_URL}/diary/${Number(params.id)}`,
        {
          calenderYn: 'N'
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );
      navigate(`/trash/${params.id}`);
      customToast.success('일기가 소각장으로 옮겨졌어요.');
    } catch (error) {
      customToast.error('처리하지 못했어요.');
    }
  };

  return (
    <section className="bg-mono-100 h-screen flex flex-col">
      <nav className="w-full h-12 flex justify-between items-center">
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back_icon" />
        </button>
        <Link to={`/edit/${params.id}`}>
          <button>
            <img src={editIcon} alt="edit_icon" />
          </button>
        </Link>
      </nav>
      <DiaryPost params={params.id || '0'} />
      <div className="pt-10">
        {/* 버튼에 소각장 카테고리로 수정 기능 추가해야함 */}
        <button className={`${btnYellow} mb-4`} onClick={requestToTrash}>
          감정을 소각장으로 보내기
        </button>
      </div>
    </section>
  );
}
