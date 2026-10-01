import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is preferred
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Track hoverable targets
    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [data-interactive="true"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, [isVisible]);

  // Smooth lagging follower
  useEffect(() => {
    if (isTouchDevice) return;
    let animId: number;
    const followSpeed = 0.18;

    const followLoop = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * followSpeed,
        y: prev.y + (position.y - prev.y) * followSpeed,
      }));
      animId = requestAnimationFrame(followLoop);
    };

    animId = requestAnimationFrame(followLoop);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central pointer dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isHovered ? 1.4 : 1})`,
          width: '8px',
          height: '8px',
          backgroundColor: '#38bdf8',
        }}
      />

      {/* Trailing glow ring */}
      <div
        className="fixed pointer-events-none z-40 rounded-full transition-[width,height,transform,border-color] duration-200 ease-out"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          border: isHovered ? '1.5px solid rgba(6, 182, 212, 0.7)' : '1px solid rgba(139, 92, 246, 0.4)',
          background: isHovered ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(6, 182, 212, 0.25)' : 'none'
        }}
      />
    </>
  );
};
