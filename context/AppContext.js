import React, { useState, createContext, useContext } from 'react';

export const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
}

export const AppProvider = ({children}) => {


  const [totalAmount, setTotalAmount] = useState(0);
  const [hasError, setHasError] = useState(false);


  return (
      <AppContext.Provider value={{totalAmount, setTotalAmount, hasError, setHasError}}>
        {children}
      </AppContext.Provider>
  )

}

