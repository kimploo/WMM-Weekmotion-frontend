import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ToastIconWrapper({ children }: Props) {
  return (
    <div className="relative inline-flex justify-center items-center">
      {children}
    </div>
  );
}
