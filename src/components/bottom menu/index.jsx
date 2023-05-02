import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Icons */
import { MdFastfood } from "react-icons/md";
import { GiHealing, GiCampCookingPot } from "react-icons/gi";
import AppContext from "../../contexts/AppContext";
import { motion } from "framer-motion";

const links = [
  {
    name: "Nutrition",
    path: "/nutrition",
    hash: "nutrition",
    icon: <GiHealing title="Nutrition" size={"28px"} />,
  },
  {
    name: "Foods",
    path: "/food",
    hash: "food",
    icon: <MdFastfood title="food" size={"28px"} />,
  },
  {
    name: "Recipe",
    path: "/recipe",
    hash: "recipe",
    icon: <GiCampCookingPot title="recipe" size={"28px"} />,
  },
];

export const BottomMenu = () => {
  const { states_App } = useContext(AppContext);
  const { setCurrentRoute, currentRoute } = states_App;

  return (
    <div className="flex justify-around w-full bg-gradient-to-r from-primary to-primaryLight text-lightMode p-2 rounded-t-md overflow-hidden">
      {links.map((link) => (
        <div className="flex flex-col justify-normal items-center">
          <p className="text-xs font-serif mb-1 font-semibold">{link.name}</p>
          <Link
            to={link.path}
            onClick={() => setCurrentRoute(link.hash)}
            key={link.name}
            className="flex flex-col justify-center items-center relative"
          >
            {link.hash === currentRoute && (
              <motion.div
                layoutId="active-link"
                className="absolute w-full h-full bg-white rounded-md"
              ></motion.div>
            )}
            <div
              className={
                link.hash === currentRoute
                  ? "shadow-md p-2 rounded-md text-primaryLight z-20"
                  : "shadow-md p-2 rounded-md hover:bg-black/5 transition-all"
              }
            >
              {link.icon}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
