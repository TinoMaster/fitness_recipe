import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { motion } from "framer-motion";
import AppContext from "../../../contexts/AppContext";

const links = [
  {
    name: "Home",
    path: "/",
    hash: "",
    icon: <AiFillHome size={28} />,
  },
  {
    name: "Fitness",
    path: "/fitness",
    hash: "fitness",
  },
  {
    name: "Health",
    path: "/health",
    hash: "health",
  },
  {
    name: "Blog",
    path: "/blog",
    hash: "blog",
  },
];

export const LinkBarraMenu = () => {
  const { states_App } = useContext(AppContext);
  const { currentRoute, setCurrentRoute } = states_App;
  return (
    <div className="flex w-full">
      <ul className="flex w-full justify-center items-center">
        {links.map((link) => (
          <div key={link.name} className="">
            <Link
              onClick={() => setCurrentRoute(link.hash)}
              to={link.path}
              className="flex relative py-2 px-3 justify-center text-lightMode items-center font-serif hover:text-secondary hover:cursor-pointer transition-all"
            >
              {currentRoute === link.hash && (
                <motion.div
                  layoutId="active-linkMenu"
                  className="absolute w-full h-full bg-white rounded-md rounded-tr-sm rounded-bl-sm"
                ></motion.div>
              )}
              <p className={`z-10 ${currentRoute === link.hash ?"text-primaryLight":""}`}>{link?.icon ? link.icon : link.name}</p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
