import React from "react";
import { Link } from "react-router-dom";

export const LoginLogout = () => {
  return (
    <Link className="flex items-center pl-2 hover:cursor-pointer" to="/auth">
      <div className="mr-2 text-white">
        <p className="text-xs md:text-sm text-center py-2 px-4 rounded-md shadow-md bg-gradient-to-b from-primary/80 to-primaryLight shadow-black/20 text-secondary hover:shadow-black/30 hover:bg-white/5 transition-all">
          Registrarse
        </p>
      </div>
    </Link>
  );
};
