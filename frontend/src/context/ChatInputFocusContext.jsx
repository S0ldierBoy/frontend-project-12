import React, { createContext, useRef, useCallback } from 'react';

export const ChatInputFocusContext = createContext();

export const ChatInputFocusProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const setFocus = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  }, []);

  return (
    <ChatInputFocusContext.Provider value={{ scrollRef, setFocus }}>
      {children}
    </ChatInputFocusContext.Provider>
  );
};
