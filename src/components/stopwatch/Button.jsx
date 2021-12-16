import { memo } from 'react';

export const Button = memo(({ children, onClick }) => (
  <button onClick={onClick}>
    {children}
  </button>
));