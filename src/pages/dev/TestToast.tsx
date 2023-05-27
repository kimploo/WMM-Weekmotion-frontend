import { toast } from 'react-toastify';
import ToastErrorIcon from '../../items/ToastErrorIcon';
import ToastSuccessIcon from '../../items/ToastSuccessIcon';
import ToastCloseIcon from '../../items/ToastCloseIcon';

// TODO: height가 잘 안맞음
import './TestToast.css';

export default function TestToast() {
  const errorToastHandler = () => {
    return toast.error('Error!', {
      icon: ToastErrorIcon,
      closeButton: ToastCloseIcon
    });
  };

  const successToastHandler = () => {
    return toast.success('회원가입이 완료되었어요!', {
      icon: ToastSuccessIcon,
      closeButton: ToastCloseIcon
    });
  };

  return (
    <>
      <button onClick={errorToastHandler}>error toast!</button>;
      <button onClick={successToastHandler}>success toast!</button>;
    </>
  );
}
