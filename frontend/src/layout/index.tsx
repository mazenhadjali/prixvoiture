import ToastProvider from "../toast/ToastProvider";
import Header from "./header";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <ToastProvider variant={"top_middle"}>

            <div className="flex h-screen overflow-hidden">
                <SideBar />
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <main>
                        <div className="container mt-5 max-w-9xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </ToastProvider>
    )
}

export default DashboardLayout;