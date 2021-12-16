import { useState, useEffect, useCallback } from 'react';
import { Button } from './Button';

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleStatus = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  const clearStatus = useCallback(() => {
    setCurrentTime(0);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1e3);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <main>
      <p>{currentTime}</p>
      <Button onClick={toggleStatus}>
        {isRunning ? 'stop' : 'start'}
      </Button>
      <Button onClick={clearStatus}>Clear</Button>
    </main>
  );
};
