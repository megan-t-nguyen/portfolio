import { useEffect, useRef } from 'react';
import { BouncingStar } from './sketches/BouncingStar';

function App() {
  const sketchRef = useRef(null);

  useEffect(() => {
    const p5Instance = BouncingStar(sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Megan Nguyen</h1>
      <p>software engineer</p>
      <p>⊹₊⟡⋆˚₊‧꒰ა ❤︎ ໒꒱ ‧₊˚⋆⟡₊⊹</p>

      <div ref={sketchRef} />

      <p>
         <a href="https://megan-nguyen-resume.netlify.app/" target="_blank">⋆｡°✩ view my resume!</a><br />
      </p>
    </div>
  );
}

export default App;
