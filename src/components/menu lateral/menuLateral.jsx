import React, { useState } from "react";
import SectionHelp from "./sectionHelp";
import SectionPage from "./sectionPage";
import { CategoryProduct } from "./categoryProduct";

const MenuLateral = ({ menuActive, setMenuActive }) => {
  const [optionTipeProduct, setOptionTipeProduct] = useState("audiovisuales");

  return (
    <section
      onClick={() => setMenuActive(false)}
      className={menuActive ? "menu-active" : "menu-desactive"}
    >
      <div
        onClick={() => setMenuActive(false)}
        className={
          menuActive
            ? "flex flex-col w-4/5 md:w-2/6 max-w-xs lg:w-1/5 bg-white h-full ease-linear translate-x-0 transition-transform shadow-md shadow-black/70 overflow-auto "
            : "flex flex-col w-4/5 md:w-2/6 max-w-xs lg:w-1/5 bg-white h-full ease-linear -translate-x-full transition-transform shadow-md shadow-black/70 overflow-auto "
        }
      >
        <div className="flex h-16 justify-between border-b-2 bg-primaryLight border-primary/10 items-center">
          <CategoryProduct setOptionTipeProduct={setOptionTipeProduct} />
        </div>
        <SectionPage optionTipeProduct={optionTipeProduct} />
        <SectionHelp />
      </div>
    </section>
  );
};

export default MenuLateral;
