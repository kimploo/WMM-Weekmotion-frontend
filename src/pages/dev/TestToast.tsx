import customToast from '../../util/toast';

// TODO: height가 잘 안맞음
// import './TestToast.css';

export default function TestToast() {
  const errorToastHandler = () => {
    return customToast.error('Error!');
  };

  const successToastHandler = () => {
    return customToast.success('성공!');
  };

  return (
    <>
      <button onClick={errorToastHandler}>error toast!</button>;
      <button onClick={successToastHandler}>success toast!</button>;
    </>
  );
}
