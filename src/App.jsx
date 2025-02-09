import { useState } from "react";
import "./App.css";
import Routing from './components/Routing/Routing';

import Home from "./pages/Home";
// import { currencyContext } from "./context/CurrencyContext"; 

export default function App() {

  // const [currency, setCurrency] = useState('usd')

  return (
    // <currencyContext.Provider value={ {currency,setCurrency} }>
    // <Home />
      <Routing />
    // </currencyContext.Provider>
    
  );
}

//https://crypto-tracker-seven-henna.vercel.app/