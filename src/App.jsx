import React, { useRef, useEffect } from 'react';
import { BouncingStar } from './sketches/BouncingStar';
import Home from './components/Home';

export default function App() {
  const sketchRef = useRef(null);

  useEffect(() => {
    const p5Instance = BouncingStar(sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <Home />
      <div ref={sketchRef} />
      <p>
        <a href="/portfolio/#/star-run"> ᯓ☆ play star run →</a>
      </p>
    </div>
  );
}
