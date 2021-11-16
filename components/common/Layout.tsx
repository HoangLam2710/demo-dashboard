import React, { useContext, useEffect } from "react";
import { OpenSidebarContext } from "../../lib/context/OpenSidebarContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import checkLogin from "../../lib/utils/checkLogin";
import Router from "next/dist/client/router";

const Layout = ({ children }: any) => {
  const { isActive } = useContext(OpenSidebarContext);

  useEffect(() => {
    const currentUser = window.localStorage.getItem("user");
    const isLoggedIn = checkLogin(currentUser);
    if (!isLoggedIn) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className={`mainContent ${!isActive && `sidebarClose`}`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
