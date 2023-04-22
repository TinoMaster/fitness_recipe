import React from "react";
import { BiSearch } from "react-icons/bi";

export const BarraBusqueda = () => {
  return (
    <form
      action=""
      className="bg-primary shadow my-1 shadow-black/40 text-secondary rounded-lg w-full md:w-1/2 flex max-w-lg"
    >
      <label htmlFor="search" className="p-2 lg:p-2 ">
        Buscar
      </label>
      <input
        type="search"
        placeholder="Realize una busqueda..."
        className="p-1 lg:p-2 w-full focus:outline-none"
      />
      <span className="flex justify-center items-center px-2 lg:p-2 hover:cursor-pointer">
        <BiSearch className="text-2xl" />
      </span>
    </form>
  );
};
