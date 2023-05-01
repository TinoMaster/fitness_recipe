import React from "react";
import { LoginLogout } from "./loginLogout";
import { BtnMenulogo } from "./btnMenu_logo";

import { Favoritos } from "./favoritos";
import { MenuSecundario } from "./menuSecundario";
import { Settings } from "./settings";

function Menu() {
  return (
    <div className="flex flex-wrap relative bg-gradient-to-r from-primary to-primaryLight z-40 items-center w-full text-sm">
      <div className="w-full flex relative justify-between">
        <BtnMenulogo />

        <div className="flex items-center">
          <Favoritos />
          <Settings />
          <LoginLogout />
        </div>
      </div>
      <MenuSecundario />
    </div>
  );
}

export default Menu;
