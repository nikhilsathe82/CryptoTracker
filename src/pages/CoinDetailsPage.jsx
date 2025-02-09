import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {fetchCoinDetails} from "../services/fetchCoinDetails.js";
import { useEffect } from "react";

function CoinDetailsPage() {
    const { coinId } = useParams();
    const {data, isLoading, isError, error} = useQuery(['coin',coinId], () => fetchCoinDetails(coinId), {
    //     // retry: 0,
    //     // retryDelay: 1000,
    //        cacheTime: 1000 * 60 * 2,
    //        staleTime: 1000 * 60 * 2, //indicates for how long we will consider data fresh. then do not make api call.
    });

    useEffect(() => {
        console.log(data);   
    },[data]);

    if(isLoading) {
        return <div>Loading..</div>
    }
    
    if(isError) {
        return <div>Error: {error.message}</div>;
    }
    
    return(

        <div>
            {/* {isLoading && <div>Loading...</div>} */}
            {/* {data} */}
            <h1>Coin Details Page {coinId}
            </h1>
        </div>
     );
}

export default CoinDetailsPage;