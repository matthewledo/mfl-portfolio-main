import React, { useState, useEffect } from 'react';

const TypeEfect = () => {
  const words = ['Ecommerce Growth', 'Technical SEO', 'Performance Web'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="font-mono text-xl md:text-3xl font-semibold">
      <span className="text-slate-600">Specialist in </span>
      <span className="text-emerald-600">
        {words[index].substring(0, subIndex)}
        <span className="animate-pulse">_</span>
      </span>
    </div>
  );
};

export default TypeEfect;