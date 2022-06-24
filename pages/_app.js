import "../styles/globals.scss";
import { useState } from "react";
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  const [totalAmount, setTotalAmount] = useState();
  const [hasError, setHasError] = useState(false);

    const getLayout = Component.getLayout || ((page) => page);


  return getLayout (

      <AppProvider
          value={{
            state: {
              totalAmount: totalAmount,
              hasError: hasError,
            },
            setTotalAmount: setTotalAmount,
            setHasError: setHasError,
          }}
      >
      <Component {...pageProps} />
      </AppProvider>)
}

export default MyApp
