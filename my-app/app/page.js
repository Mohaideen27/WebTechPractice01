import React from "react";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
const page = () => {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="body">
        <Body />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default page;
