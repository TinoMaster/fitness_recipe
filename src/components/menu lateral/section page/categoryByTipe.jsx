import React from "react";

export const CategoryByTipe = ({ titulo, imagen }) => {
  return (
    <div className="w-5/12 h-36 flex flex-col items-center lg:hover:cursor-pointer lg:hover:scale-105 transition-transform">
      <div className="w-full h-3/4">
        <img
          className="w-full h-full object-cover rounded shadow-md"
          src={imagen}
          alt="tipo de accesorio"
        />
      </div>
      <h3 className="h-1/4 font-medium text-primary font-serif">{titulo}</h3>
    </div>
  );
};
