import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import {
  RiUser6Line,
  RiUserSettingsFill,
  RiLogoutCircleRFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

export const LoginLogout = () => {
  const [userMenu, setUserMenu] = useState(false);
  const { states, functions } = useContext(AuthContext);
  const { user } = states;
  const { logout } = functions;

  const toggleMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <div className="flex items-center pl-2 hover:cursor-pointer">
      <div className="mr-2 text-white">
        {user?.name?.length > 0 ? (
          <div
            onClick={toggleMenu}
            className="p-2 relative rounded-full shadow-md bg-lightMode shadow-black/20 text-primaryLight hover:shadow-black/30 hover:bg-lightMode/90 transition-all"
          >
            <RiUser6Line size={"20px"} />
            {/* Menu deslizable */}
            {userMenu && (
              <motion.div
                initial={{
                  scale: 0,
                  translateY: "-130px",
                  translateX: "-130px",
                }}
                animate={{ scale: 1, translateY: 0, translateX: "-130px" }}
                className="flex flex-col w-[140px] absolute hover:text-primaryLight bg-lightMode overflow-hidden shadow-lg z-20 rounded-lg rounded-tr-none"
              >
                <p className="flex items-center font-serif border-2 border-b-0 hover:bg-black/5 transition-all">
                  <RiUserSettingsFill size={"20px"} className="m-2" />
                  Usuario
                </p>
                <p className="flex items-center font-serif border-2 border-b-0 hover:bg-black/5 transition-all">
                  <RiUserSettingsFill size={"20px"} className="m-2" />
                  Usuario
                </p>
                <p className="flex items-center font-serif border-2 border-b-0 hover:bg-black/5 transition-all">
                  <RiUserSettingsFill size={"20px"} className="m-2" />
                  Usuario
                </p>
                <p
                  onClick={logout}
                  className="flex items-center font-serif border-2 hover:bg-black/5 transition-all"
                >
                  <RiLogoutCircleRFill size={"20px"} className="m-2" />
                  Desconectar
                </p>
              </motion.div>
            )}
          </div>
        ) : (
          <Link
            to="/auth"
            className="text-xs md:text-sm text-center py-2 px-4 rounded-md shadow-md bg-gradient-to-b from-primary/80 to-primaryLight shadow-black/20 text-secondary hover:shadow-black/30 hover:bg-white/5 transition-all"
          >
            Registrarse
          </Link>
        )}
      </div>
    </div>
  );
};
