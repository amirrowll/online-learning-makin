import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className='max-w-[1440px] mx-auto'>
      {children}
    </div>
  );
}

export default Container;
