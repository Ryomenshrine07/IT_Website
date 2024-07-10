import { useEffect, useRef } from 'react';
import './IntersectionObserverComponent.css'; // Import your CSS file

const IntersectionObserverComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('comeFromLeftShow');
          } else {
            entry.target.classList.remove('comeFromLeftShow');
          }
        });
      },
      { threshold: 1 }
    );

    const element = elementRef.current;
    if (element instanceof Element) {
      observer.observe(element);
    }

    return () => {
      if (element instanceof Element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="observed-element" ref={elementRef}>
      {/* Your content goes here */}
      Hello, I am an element being observed!
    </div>
  );
};

export default IntersectionObserverComponent;
