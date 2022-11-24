import React from "react";
import Navbar from "../navber/nevbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-200 grid grid-cols-6 gap-2 h-[100vh]">
        <div className="col-span-1 bg-black text-white font-bold text-center ">
          <Navbar />
        </div>
        <div className="col-span-5 p-5">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
