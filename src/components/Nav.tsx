import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to={'/'}>
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/diary'}>일</Link>
          </li>
          <li>
            <Link to={'/calendar'}>켈린더</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
