import { Id, toast, ToastOptions } from '@kimploo/react-toastify';
import ToastErrorIcon from '../../items/ToastErrorIcon';
import ToastSuccessIcon from '../../items/ToastSuccessIcon';
import ToastCloseIcon from '../../items/ToastCloseIcon';

// TODO: height가 잘 안맞음
const customToast = {
  success: (msg: string, args?: ToastOptions): Id =>
    toast.success(msg, {
      icon: ToastSuccessIcon,
      closeButton: ToastCloseIcon,
      ...args
    }),

  error: (msg: string, args?: ToastOptions): Id =>
    toast.error(msg, {
      icon: ToastErrorIcon,
      closeButton: ToastCloseIcon,
      ...args
    })
};

export default customToast;
