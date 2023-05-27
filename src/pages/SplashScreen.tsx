import weekmotion from '../assets/images/weekmotion.svg';

export default function SplashScreen() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="py-4">
        <img src={weekmotion} alt="main_logo" />
      </div>
    </div>
  );
}
