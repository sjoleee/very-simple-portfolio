import { useCallback, useEffect, useRef, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;
    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="w-full h-1 fixed top-0 left-0 z-10" ref={progressRef}>
      <div
        className="h-full bg-gradient-to-r from-lime-500 to-cyan-500"
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
