import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
// import { currencyContext } from "./context/CurrencyContext"; 

export default function App() {

  // const [currency, setCurrency] = useState('usd')

  return (
    // <currencyContext.Provider value={ {currency,setCurrency} }>
      <Home />
    // </currencyContext.Provider>
    
  );
}
