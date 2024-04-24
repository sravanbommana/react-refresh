import React, { createContext} from 'react';

export const ThemeContext = createContext({
  color: "",
  setColor: () => {}
});