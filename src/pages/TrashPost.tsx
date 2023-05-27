import { toast } from '@kimploo/react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import {
  btnYellow,
  btnYellowBorder,
  smBtnYellow,
  smBtnYellowBorder
} from '../assets/customCSS/designSystem';
import closeIcon from '../assets/images/closeIcon.svg';
import backIcon from '../assets/images/back.svg';
import editIcon from '../assets/images/edit.svg';
import DiaryPost from '../components/DiaryPost';
import { BASE_URL } from '../redux/function/url';

export default function TrashPost() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const requestDelete = async () => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/diary/${Number(params.id)}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );
      if (response.status === 200) {
        navigate(location.pathname);
      }
    } catch (error) {
      console.error(error);
      toast.error('문제가 생겼어요.');
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
      <DiaryPost params={params.id} />
      <div className="pt-10">
        <button className={`${btnYellow} mb-4`}>감정을 캘린더로 보내기</button>
        <button
          onClick={() => setDeleteModal(true)}
          className={btnYellowBorder}
        >
          감정을 완전 소각하기
        </button>
        <input
          type="checkbox"
          id="toCalendar"
          className="modal-toggle"
          checked={deleteModal}
          readOnly
        />
        <div className="modal">
          <div className="modal-box relative bg-mono-100">
            <label
              htmlFor="toCalendar"
              className="btn absolute right-2 top-2 bg-mono-100 border-none hover:bg-mono-100"
              onClick={() => setDeleteModal(false)}
            >
              <img src={closeIcon} alt="close_icon" />
            </label>
            <h3 className="text-lg font-bold text-mono-700">
              감정을 소각할까요?
              <br />
              완전 소각한 감정은 다시는 볼 수 없어요.
            </h3>
            <div className="flex justify-end gap-x-2">
              <label
                htmlFor="toCalendar"
                className={smBtnYellowBorder}
                onClick={() => setDeleteModal(false)}
              >
                취소
              </label>
              <button onClick={requestDelete} className={smBtnYellow}>
                소각하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
