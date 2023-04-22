import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

export const Favoritos = () => {
  return (
    <div className="text-white px-2">
      <MdFavoriteBorder className="text-2xl hover:cursor-pointer hover:scale-105 transition-all" />
    </div>
  );
};
