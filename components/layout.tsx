import React, { Component } from "react";
import CheckoutDetails from "./checkout/checkout-details";
import { RiCloseFill } from 'react-icons/ri';

const Layout = ({ children }: { children: any }) => {
  return (
    <main className="main-wrapper">
      <div className="close-btn">
      <RiCloseFill size={"1.3em"} />
      </div>
      <section className="wrapper">{children}</section>
      <section className="checkout-details">
        <CheckoutDetails />
      </section>
    </main>
  );
};

export default Layout;
