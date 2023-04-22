import React from "react";
import { LinkBarraMenu } from "./menu secundario/linkBarraMenu";

export const MenuSecundario = () => {
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row bg-gradient-to-r from-primary to-primaryLight w-full p-2 justify-between text-sm rounded-b-md overflow-hidden">
      <LinkBarraMenu />
    </div>
  );
};
