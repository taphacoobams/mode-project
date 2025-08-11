import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element is visible in the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {Number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {String} options.root - Element that is used as the viewport for checking visibility
 * @param {String} options.rootMargin - Margin around the root element
 * @returns {Array} [ref, isIntersecting, entry] - Ref to attach to element, boolean if visible, and the IntersectionObserverEntry
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      { threshold, root, rootMargin }
    );

    // Observe element if it exists
    const element = elementRef.current;
    if (element) {
      observerRef.current.observe(element);
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, root, rootMargin]); // Re-run if these options change

  return [elementRef, isIntersecting, entry];
};

export default useIntersectionObserver;
