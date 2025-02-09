import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";

function MainLayout() {

    return(
        <>
            <Navbar /> {/* {this navbar is the shared ui that we want across pages} */}
            <Outlet /> 
            {/* thei actual page that will be rendered alowng with navbar. It acts as placholder for remaining part of UI} */}

        </>
    )

}

export default MainLayout;