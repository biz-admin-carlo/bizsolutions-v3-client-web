import React, { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ targetValue, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // Prevent re-triggering
          let start = 0;
          const end = targetValue;
          const duration = 2000; // 2 seconds animation
          const stepTime = 20; // Update every 20ms
          const increment = (end - start) / (duration / stepTime);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div className="flex flex-col px-4 py-8 text-center" ref={ref}>
      <dt className="order-last text-lg font-medium text-gray-500">{label}</dt>
      <dd className="text-4xl font-extrabold text-orange-400 md:text-5xl">
        {count}+
      </dd>
    </div>
  );
};

export default AnimatedCounter;
