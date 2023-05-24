import { Link } from 'react-router-dom';

import weekmotionTitle from '../assets/images/weekmotion_title.svg';
import trash from '../assets/images/trash.svg';
import add from '../assets/images/add.svg';

export default function Nav() {
  return (
    <div className="navbar bg-mono-100">
      <div className="flex-1 pl-4">
        <Link to={'/'}>
          <img src={weekmotionTitle} alt="title" />
        </Link>
      </div>
      <div className="flex-none pr-4 gap-6">
        <img src={trash} alt="trash" className="cursor-pointer" />
        <img src={add} alt="add" className="cursor-pointer" />
      </div>
    </div>
  );
}
