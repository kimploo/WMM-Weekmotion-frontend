import { Link, useNavigate, useParams } from 'react-router-dom';
import backIcon from '../assets/images/back.svg';
import editIcon from '../assets/images/edit.svg';

export default function NavWIthEditIcon() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <nav className="w-full h-14 flex justify-between items-center px-5">
      <button onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back_icon" />
      </button>
      <Link to={`/edit/${params.id}`}>
        <button>
          <img src={editIcon} alt="edit_icon" />
        </button>
      </Link>
    </nav>
  );
}
