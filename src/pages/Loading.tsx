import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../assets/images/weekmotion.svg';

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('accessToken')) {
        navigate('/scheduler');
      } else {
        navigate('/register');
      }
    }, 1500);
  }, []);

  return (
    <section className="bg-mono-100 h-screen flex flex-col justify-center items-center">
      <div className="py-4">
        <img src={mainLogo} alt="main_logo" />
      </div>
    </section>
  );
}
