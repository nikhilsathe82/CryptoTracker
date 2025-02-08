// import { useCallback } from "react";

import { useContext, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
// import { currencyContext } from "../../context/CurrencyContext";
import currencyStore from "../../state/store.js";

function CoinTable() {
   const {currency} = currencyStore();

  // const {currency} = useContext(currencyContext);

  const [page, setPage] = useState(1);
  //use query we can pass three parametsrs, coin is query name, page is state variable and fetchCoinData is function which will be called when page value changes.
  //we can store the return data in many variables
  const {data, isLoading, isError, error} = useQuery(['coin',page,currency], () => fetchCoinData(page, currency), {
    // retry: 0,
    // retryDelay: 1000,
       cacheTime: 1000 * 60 * 2,
       staleTime: 1000 * 60 * 2, //indicates for how long we will consider data fresh. then do not make api call.
  });

  // useEffect(() => {
  //   console.log("component cointable Mount");
  //   console.log(data);  
  // }, [data]);

  // if(isLoading) {
  //   return <div>Loading...</div>;
  // }

  if(isError) {
    return <div>Error: {error.message}</div>;
  }

  
  // useEffect(() => {
  //   console.log("component cointable Mount");
  //   fetchCoinData(1, "usd");
  // }, []);

  return (
  <>
   {currency}
    {/* Cointable <button onClick={() => setPage(page+1)}> Click </button> {page} */}
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
       <div className="w-full bg-yellow-300 text-black flex py-4 px-2 font-semibold align-items-center justify-center">
        {/* {Header of table} */}
          <div className="basis-[35%]">
            Coin
          </div>
          <div className="basis-[25%]">
            Price
          </div>
          <div className="basis-[20%]">
            24 hr Change  
          </div>
          <div className="basis-[20%]">
            Market Cap
          </div>
       </div>

       <div className="flex flex-col w-[80vw] mx-auto">
          {isLoading && <div>Loading...</div>}
          {data && data.map((coin) => { 
            return (
                <div key={coin.id} className="w-full bg-transparent text-black flex py-4 px-2 font-semibold align-items-center justify-between">
                    <div className="flex items-center justify-start gap-3 basis-[35%]">

                        <div className="w-[5rem] h-[5rem]"> 
                          <img src={coin.image} className="w-full h-full" />
                        </div>

                        <div className="flex flex-col">
                          <div className="text-3xl">{coin.name}</div>
                          <div className="text-xl">{coin.symbol}</div>
                          
                        </div>

                    </div>

                    <div className="basis-[25%]">
                      {coin.current_price}
                    </div>
                    <div className="basis-[20%]">
                      {coin.price_change_24h}
                    </div>
                    <div className="basis-[20%]">
                      {coin.market_cap}
                    </div>
                </div>

            );
          })}
       </div>

       <div className="flex gap-4 justify-center items-center">
        <button
         disabled={page == 1}
         onClick={() => setPage(page-1)}
         className="btn btn-primary btn-wide text-white text-2xl"
        >
          Previous
        </button>
        <button 
        onClick={() => setPage(page+1)}
        className="btn btn-secondary btn-wide text-white text-2xl"
        >
          Next
        </button>
       </div>
    </div>
  </>);
  // const [count, setCount] = useState(0);
  // const [flag, setFlag] = useState(false);
  // async function download() {
  //   const response = await fetch(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
  //   );
  //   console.log(response);
  //   const result = await response.json();
  //   console.log(result);
  // }
  // useEffect(() => {
  //   //useeffects runs this callback when cointable component mounts. [] is include so that callback is run only once when component gets mounted.
  //   download();
  // }, [count]);
  // useEffect(() => {
  //   //useeffects runs this callback when cointable component mounts. [] is include so that callback is run only once when component gets mounted.
  //   download();
  // }, [flag]);
  // useEffect(() => {
  //   //useeffects runs this callback when cointable component mounts. [] is include so that callback is run only once when component gets mounted.
  //   download();
  // }, [count, flag]);
  // return (
  //   <>
  //     <br />
  //     <button className="btn btn-primary">CoinTable</button>
  //     {count}
  //     <br />
  //     <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
  //       Increment
  //     </button>
  //     {flag && <div>Flag is true</div>}
  //     <br />
  //     <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
  //   </>
  // );
}

export default CoinTable;
