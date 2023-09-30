import { Link, useNavigate } from 'react-router-dom';
import back from '../assets/images/back.svg';
import closeIcon from '../assets/images/closeIcon.svg';

export default function NavNoLogo() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center h-[3.5rem] px-5 bg-mono-100">
      <button onClick={() => navigate(-1)}>
        <img src={back} alt="trash" className="cursor-pointer" />
      </button>
      <Link to={'/scheduler'}>
        <img src={closeIcon} alt="add" className="cursor-pointer" />
      </Link>
    </div>
  );
}
