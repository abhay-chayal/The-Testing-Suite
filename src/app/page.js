'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';
import Counter from '@/components/Counter';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <main className="min-h-screen p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-blue-600 dark:text-blue-400">
            Frontend Testing Suite
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A comprehensive example of Unit and Component testing with Jest & React Testing Library.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b pb-2">1. Reusable Components</h2>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-500">Button Component</h3>
              <div className="flex gap-2">
                <Button label="Primary Button" onClick={() => alert('Clicked!')} />
                <Button label="Secondary Action" onClick={() => console.log('Log')} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-500">Input Component</h3>
              <Input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Type something here..." 
              />
              <p className="text-sm text-gray-400">Current Value: {inputValue || '(empty)'}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-500">Card Component</h3>
              <Card 
                title="React Testing Library" 
                description="Testing library that encourages good testing practices by avoiding implementation details." 
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b pb-2">2. Functional Component</h2>
            <div className="pt-4">
              <Counter />
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-blue-700 dark:text-blue-300">Testing Tip:</h4>
              <p className="text-sm mt-1">
                Use <code>userEvent</code> instead of <code>fireEvent</code> for more realistic interaction testing. It simulates full browser events!
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center pt-12 text-gray-400 text-sm">
          Run <code>npm test</code> to see the testing magic in action.
        </footer>
      </div>
    </main>
  );
}
