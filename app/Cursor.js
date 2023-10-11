"use client"

import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -30, y: -30 });
  const [isClicking, setClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
      setCursorPosition({ x: -30, y: -30 });
    };

    const handleMouseDown = () => {
      setClicking(true);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicking ? 'clicking' : ''}`}
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    >
      <div className={`glowing-circle ${isClicking ? 'clicking' : ''}`}></div>
    </div>
  );
};

export default Cursor;

