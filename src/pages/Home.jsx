import Banner from "../components/Banner/Banner";
import CoinTable from "../components/CoinTable/CoinTable";
import Navbar from "../components/NavBar/NavBar";

function Home() {
    return(
        <main>
            
            <Navbar />
            <Banner />
            <CoinTable />
        </main>
    );
}

export default Home;