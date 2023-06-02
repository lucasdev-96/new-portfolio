/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';


const defaultValue = {
  language: '',
  setLanguage: () => {}
};

export const ResumeContext = createContext(defaultValue);

export const ResumeContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  return (
    <ResumeContext.Provider value={{ language, setLanguage }}>{children}</ResumeContext.Provider>
  );
};