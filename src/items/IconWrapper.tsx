import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function IconWrapper({ children }: Props) {
  return <div className="relative inline-flex">{children}</div>;
}
