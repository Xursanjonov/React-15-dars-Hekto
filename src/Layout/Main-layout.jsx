import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from './Header/Header'
import {Footer} from './Footer/Footer'

export const MainLayout = () => {
    return (
        <div className="wrapper">
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};
