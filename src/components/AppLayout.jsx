import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";

function AppLayout() {
    return (
        <>
            <header>
                <AppNavBar />
            </header>

            <Outlet />
        </>
    )
}

export default AppLayout