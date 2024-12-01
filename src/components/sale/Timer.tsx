import React, { useState, useEffect } from 'react';

interface TimerProps {
  endDate: string;
}

export function Timer({ endDate }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const end = new Date(endDate).getTime();
      const now = new Date().getTime();
      const distance = end - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl mb-4">Sale Ends In:</h3>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <span className="text-3xl font-bold">{timeLeft.days}</span>
              <p className="text-sm">Days</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">{timeLeft.hours}</span>
              <p className="text-sm">Hours</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">{timeLeft.minutes}</span>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">{timeLeft.seconds}</span>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}