import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { BiMessageRoundedError } from "react-icons/bi";

export const LoginPage = () => {
  const { states } = useContext(AuthContext);
  const { error } = states;
  return (
    <div className="w-screen relative h-screen flex overflow-auto items-center justify-center bg-primary">
      <div className="w-full h-full relative overflow-hidden min-h-movil md:w-2/6 md:h-128 flex max-w-lg flex-col justify-center items-center bg-white p-4 shadow-xl shadow-black/40 rounded-lg">
        {error !== null ? (
          <p className="absolute flex items-center z-20 bg-red-500/90 text-white font-semibold p-3 rounded-md top-20 transition-all ease-linear delay-700">
            <BiMessageRoundedError size={"26px"} className="mr-2" /> {error}
          </p>
        ) : (
          <p className="absolute w-2/3 h-20 text-center bg-transparent text-white p-2 top-10">
            {}
          </p>
        )}
        {/* {success !== null ? (
          <p className="absolute text-center flex items-center text-xl bg-green-500/75 text-white p-3 rounded-md top-10 transition-all ease-linear delay-700">
            <FontAwesomeIcon className="mr-2" icon={faCircleExclamation} />{" "}
            {success}
          </p>
        ) : (
          <p className="absolute w-2/3 h-20 text-center bg-transparent text-white p-2 top-10">
            {}
          </p>
        )} */}
        <Outlet />
      </div>
    </div>
  );
};
