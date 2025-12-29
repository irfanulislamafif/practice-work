import React from "react";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen max-w-9xl m-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
