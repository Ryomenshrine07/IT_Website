// AnimateCursor.js
import AnimatedCursor from "react-animated-cursor";
import './AnimateCursor.css';

function AnimateCursor() {
  return (
    <AnimatedCursor
      classname="AnimatedCursor" 
      innerSize={12}
      outerSize={10}
      color='85, 85, 239'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  );
}

export default AnimateCursor;
