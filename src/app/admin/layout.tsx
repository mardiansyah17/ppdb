import React, {ReactNode} from 'react';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div>

            <Navbar/>
            <div className={`flex`}>
                <Sidebar/>
                <div className={`xl:ml-72 sm:p-3 min-h-screen`}>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;