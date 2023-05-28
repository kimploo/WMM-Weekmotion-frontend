import { useNavigate, useParams } from 'react-router-dom';
import DiaryUpdate from '../components/DiaryUpdate';
import backIcon from '../assets/images/back.svg';
import closeIcon from '../assets/images/closeIcon.svg';

export default function EditPost() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <section className="bg-mono-100 h-screen flex flex-col">
      <nav className="w-full h-12 flex justify-between items-center">
        <img src={backIcon} alt="back_icon" onClick={() => navigate(-1)} />
        <img
          src={closeIcon}
          alt="close_icon"
          onClick={() => navigate('/scheduler')}
        />
      </nav>
      <DiaryUpdate params={params.id || '0'} />
    </section>
  );
}
