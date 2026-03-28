'use client';

import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-2">Counter Component</h2>
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400" data-testid="counter-value">
        {count}
      </div>
      <div className="flex gap-2">
        <Button label="Decrement" onClick={() => setCount(prev => prev - 1)} />
        <Button label="Increment" onClick={() => setCount(prev => prev + 1)} />
      </div>
    </div>
  );
};

export default Counter;
