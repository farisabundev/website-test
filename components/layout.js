import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="container-fluid layout-full-height">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
