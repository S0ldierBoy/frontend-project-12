import React, { createContext, useRef, useCallback } from 'react';

export const ChatInputFocusContext = createContext();

export const ChatInputFocusProvider = ({ children }) => {
  const inputRef = useRef(null);

  const setFocus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <ChatInputFocusContext.Provider value={{ inputRef, setFocus }}>
      {children}
    </ChatInputFocusContext.Provider>
  );
};
