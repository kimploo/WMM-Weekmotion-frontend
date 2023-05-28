import weekmotion from '../assets/images/weekmotion.svg';

export default function SplashScreen() {
  return (
    <section className="bg-mono-100 h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <img src={weekmotion} alt="main_logo" />
    </section>
  );
}
