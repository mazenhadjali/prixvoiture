import { useRef } from "react";
import { connect } from "react-redux";
import { Location, NavLink, useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import { DASHBOARD, MARQUES, MODELES, USERS } from "../../routeConstants";
import { hideSidebar, showSidebar } from "../../store/actions/system";
import { RootState } from "../../store/reducers";


interface HeaderProps {
    sidebarOpen: boolean;
    hideSidebar: () => void;
}


function SideBar({ sidebarOpen, hideSidebar }: HeaderProps) {

    const location: Location = useLocation();
    const { pathname } = location;

    const sidebar = useRef(null);
    const trigger = useRef(null);

    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
            >
                <div className="mb-2 pr-3 sm:px-2">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={hideSidebar}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}

                </div>
                <NavLink end to="/" className="block">
                    <div className="flex content-center justify-center">
                        <h1 className="font-bold text-amber-50 ml-2">PrixVoiture BackOffice</h1>
                    </div>
                </NavLink>


                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <ul className="mt-3">
                        {/* Inbox */}
                        <li className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 ${pathname == DASHBOARD && 'bg-main'}`}>
                            <NavLink
                                end
                                to={DASHBOARD}
                                className={`block text-slate-200 truncate transition duration-150 ${pathname == DASHBOARD ? 'hover:text-slate-200' : 'hover:text-white'}`}
                            >
                                <div className="flex items-center">
                                    <span
                                        className="text-white font-medium ml-3">Dashboard</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 ${pathname == MARQUES && 'bg-main'}`}>
                            <NavLink
                                end
                                to={MARQUES}
                                className={`block text-slate-200 truncate transition duration-150 ${pathname == MARQUES ? 'hover:text-slate-200' : 'hover:text-white'}`}
                            >
                                <div className="flex items-center">
                                    <span
                                        className="text-white font-medium ml-3">Marques</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 ${pathname == MODELES && 'bg-main'}`}>
                            <NavLink
                                end
                                to={MODELES}
                                className={`block text-slate-200 truncate transition duration-150 ${pathname == MODELES ? 'hover:text-slate-200' : 'hover:text-white'}`}
                            >
                                <div className="flex items-center">
                                    <span
                                        className="text-white font-medium ml-3">Modeles</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        sidebarOpen: state.system.sidebarOpen
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        showSidebar: () => dispatch(showSidebar()),
        hideSidebar: () => dispatch(hideSidebar()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
