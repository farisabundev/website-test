import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="layout spacer-header">
      <Navbar />
      <div className="container-fluid">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
