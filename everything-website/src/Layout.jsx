import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout(){

    return(<>
        <Navbar/>
        <br/>
        <main>
            <Outlet/>
        </main>
    </>);

}