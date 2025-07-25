import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import StarRun from '../sketches/StarRun';

export default function StarRunPage() {
  const sketchRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    p5InstanceRef.current = new p5(StarRun, sketchRef.current);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>⋆˚꩜｡ star run.ᐟ ⟢ </h1>
      <div ref={sketchRef} />
      <p>
        <a href="/portfolio/">← back to home</a>
      </p>
    </div>
  );
}
