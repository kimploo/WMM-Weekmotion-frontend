import ToastIconWrapper from './ToastIconWrapper';

export default function ToastSuccessIcon() {
  return (
    <ToastIconWrapper>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12C3 7.03228 7.03228 3 12 3C16.9677 3 21 7.03228 21 12C21 16.9677 16.9677 21 12 21C7.03228 21 3 16.9677 3 12Z"
          stroke="#292929"
          stroke-width="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2071 9.29289C16.5976 9.68342 16.5976 10.3166 16.2071 10.7071L11.2071 15.7071C10.8166 16.0976 10.1834 16.0976 9.79289 15.7071L7.29289 13.2071C6.90237 12.8166 6.90237 12.1834 7.29289 11.7929C7.68342 11.4024 8.31658 11.4024 8.70711 11.7929L10.5 13.5858L14.7929 9.29289C15.1834 8.90237 15.8166 8.90237 16.2071 9.29289Z"
          fill="#292929"
        />
      </svg>
    </ToastIconWrapper>
  );
}
