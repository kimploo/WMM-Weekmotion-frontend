import ToastIconWrapper from './ToastIconWrapper';

export default function ToastErrorIcon() {
  return (
    <ToastIconWrapper>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="#292929" stroke-width="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8902 16.3C15.2802 16.69 15.9102 16.69 16.3002 16.3C16.6802 15.91 16.6802 15.27 16.3002 14.89L13.4102 12L16.3002 9.10997C16.6902 8.71997 16.6902 8.08997 16.3002 7.69997C15.9102 7.30997 15.2802 7.30997 14.8902 7.69997L12.0002 10.59L9.11021 7.69997C8.72021 7.30997 8.09021 7.30997 7.70021 7.69997C7.31021 8.08997 7.31021 8.71997 7.70021 9.10997L10.5902 12L7.70021 14.89C7.31021 15.28 7.31021 15.91 7.70021 16.3C8.09021 16.69 8.72021 16.69 9.11021 16.3L12.0002 13.41L14.8902 16.3Z"
          fill="#292929"
        />
      </svg>
    </ToastIconWrapper>
  );
}
