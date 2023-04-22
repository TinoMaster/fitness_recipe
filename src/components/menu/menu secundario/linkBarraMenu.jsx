import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export const LinkBarraMenu = () => {
  return (
    <div className="flex w-full md:w-1/2">
      <ul className="flex w-full justify-around md:justify-start items-center">
        <Link className="link-menu" to={"/"}>
          <AiFillHome size={"28px"} />
        </Link>
        <Link className="link-menu" to={"/nutrition"}>
          Nutricion
        </Link>
        <Link className="link-menu" to={"/food"}>
          Alimentos
        </Link>
        <Link className="link-menu" to={"/recipe"}>
          Recetas
        </Link>
      </ul>
    </div>
  );
};
