import { useRef, useCallback } from 'react';

const useAutoFocus = () => {
  const focusRef = useRef(null);
  const setFocusRef = useCallback(() => {
    focusRef.current && focusRef.current.focus();
  }, []);
  return [focusRef, setFocusRef];
};

export default useAutoFocus;
