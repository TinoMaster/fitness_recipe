import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { motion } from "framer-motion";

export const LinkBarraMenu = () => {
  return (
    <div className="flex w-full">
      <motion.ul
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        /* transition={{ duration: 0.5 }} */
        className="flex w-full justify-center items-center"
      >
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
      </motion.ul>
    </div>
  );
};
