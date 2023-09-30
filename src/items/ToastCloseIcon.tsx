import ToastIconWrapper from './ToastIconWrapper';

export default function ToastCloseIcon() {
  return (
    <ToastIconWrapper>
      <div className="pr-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5171 15.7452C14.8568 16.0849 15.4056 16.0849 15.7452 15.7452C16.0762 15.4056 16.0762 14.8481 15.7452 14.5171L13.2281 12L15.7452 9.48285C16.0849 9.14317 16.0849 8.59445 15.7452 8.25476C15.4056 7.91508 14.8568 7.91508 14.5171 8.25476L12 10.7719L9.48285 8.25476C9.14317 7.91508 8.59445 7.91508 8.25476 8.25476C7.91508 8.59445 7.91508 9.14317 8.25476 9.48285L10.7719 12L8.25476 14.5171C7.91508 14.8568 7.91508 15.4056 8.25476 15.7452C8.59445 16.0849 9.14317 16.0849 9.48285 15.7452L12 13.2281L14.5171 15.7452Z"
            fill="#292929"
          />
        </svg>
      </div>
    </ToastIconWrapper>
  );
}
