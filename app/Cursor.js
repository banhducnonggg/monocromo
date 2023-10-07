"use client";

import { useEffect, useState } from 'react';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
      setCursorPosition({ x: -20, y: -20 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    >
      <div className="glowing-circle"></div>
    </div>
  );
};

export default Cursor;
