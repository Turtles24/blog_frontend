// Tabs.jsx
import React, { useState } from 'react';
import '@/styles/tabs.css';

interface TabsProps {
  items: string[];
  initialActiveIndex?: number;
  styleVariant?: 'rectangular' | 'rounded' | 'underline';
}

export const Tabs: React.FC<TabsProps> = ({ 
  items, 
  initialActiveIndex = 0, 
  styleVariant = 'rounded' 
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const handleTabClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className={`tabs tabs--${styleVariant}`}>
      <div 
        className="sliding-background" 
        style={{ 
          transform: `translateX(${activeIndex * 111}px)` 
        }}
      />
      {items.map((item, index) => (
        <button
          key={index}
          className={`tab ${index === activeIndex ? 'tab--active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
