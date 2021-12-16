import { useRef } from 'react';

export const LogCounter = () => {
  const counterRef = useRef(0);

  const handleIncrement = () => {
    counterRef.current += 1;

    console.log(`current count ${counterRef.current}`);
  };
  const handleDecrement = () => {
    counterRef.current -= 1;

    console.log(`current count ${counterRef.current}`);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
