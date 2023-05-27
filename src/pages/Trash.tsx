import DateRangePicker from '../components/DateRangePicker';
import List from '../components/List';
import backIcon from '../assets/images/back.svg';
import { useNavigate } from 'react-router-dom';

export default function Trash() {
  const navigate = useNavigate();
  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      <nav className="flex w-full h-12 justify-between items-center">
        <img
          src={backIcon}
          alt="back_icon"
          className="flex-none cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl text-mono-700 justify-self-center">소각장</h1>
        <div></div>
      </nav>
      <List />
    </section>
  );
}
