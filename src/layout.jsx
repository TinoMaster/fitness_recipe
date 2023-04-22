import React from "react";
import Menu from "./components/menu";
import { BottomMenu } from "./components/bottom menu";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Menu />
      <div className="w-full">{children}</div>
      <BottomMenu />
    </div>
  );
};
