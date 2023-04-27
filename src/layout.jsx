import React from "react";
import Menu from "./components/menu";
import { BottomMenu } from "./components/bottom menu";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Menu />
      <div className="w-full">
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
};
