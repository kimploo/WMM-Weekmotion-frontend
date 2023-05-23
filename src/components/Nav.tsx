import { Link } from 'react-router-dom';

import weekmotionTitle from '../assets/images/weekmotion_title.svg';
import hamburger from '../assets/images/hamburger.svg';

export default function Nav() {
  return (
    <div className="navbar bg-mono-100">
      <div className="flex-1 pl-4">
        <Link to={'/'}>
          <img src={weekmotionTitle} alt="title" />
        </Link>
      </div>
      <div className="flex-none pr-4">
        <img src={hamburger} alt="menu" className="cursor-pointer" />
      </div>
    </div>
  );
}
