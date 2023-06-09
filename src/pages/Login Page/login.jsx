import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

/* Icons */
import { MdOutlineEmail } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import AuthContext from "../../contexts/AuthContext";

export const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const { functions } = useContext(AuthContext);
  const { handleLogin, loginUser } = functions;
  return (
    <>
      <h2 className="h-1/6 font-serif text-primaryLight text-3xl text-center font-extrabold">
        Ingresar a su cuenta
      </h2>

      <Link
        to={"/"}
        className="absolute top-5 left-5 bg-slate-100 p-2 flex items-center text-primaryLight"
      >
        <BsArrowLeft className="mr-2" />
        Volver a la pagina
      </Link>

      <div className="w-48 my-5 h-48 flex border-2 shadow-lg bg-darkMode/90 items-center justify-center rounded-full overflow-hidden">
        <img className="w-full h-full scale-75" /* src={logo} */ alt="Logo" />
      </div>

      <form onSubmit={loginUser} className="w-full flex flex-col">
        <label htmlFor="nombre" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Correo:</span>
          <div className="flex items-center">
            <MdOutlineEmail
              size={"24px"}
              className="text-slate-400 absolute pl-1"
            />
            <input
              onChange={handleLogin}
              id="nombre"
              type="email"
              name="email"
              placeholder="Escriba su correo"
              className="inputAuth"
              autoComplete="off"
            />
          </div>
        </label>

        <label
          htmlFor="password"
          className="flex flex-col w-4/5 m-auto relative"
        >
          <span className=" font-serif text-slate-500 ml-1">Contraseña:</span>
          <div className="flex items-center">
            <BsShieldLock
              size={"24px"}
              className=" text-slate-400 absolute pl-1"
            />
            <input
              onChange={handleLogin}
              id="password"
              type={viewPassword ? "text" : "password"}
              name="password"
              placeholder="Escriba su contraseña"
              className="inputAuth"
            />
            {!viewPassword ? (
              <VscEye
                size={"24px"}
                className="text-slate-400 absolute right-0 pr-1 hover:cursor-pointer hover:text-secondary"
                onClick={() => setViewPassword(true)}
              />
            ) : (
              <VscEyeClosed
                onClick={() => setViewPassword(false)}
                size={"24px"}
                className="text-slate-400 absolute right-0 pr-1 hover:cursor-pointer hover:text-secondary"
              />
            )}
          </div>
        </label>

        <div className=" w-4/5 m-auto flex justify-between">
          <Link
            to={"/auth/signup"}
            className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base"
          >
            Crear nueva cuenta
          </Link>
          <span className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base text-end">
            Olvide mi contraseña?
          </span>
        </div>

        <input
          value="Iniciar"
          type="submit"
          className="my-5 p-2 w-2/3 m-auto bg-secondary/80 text-white rounded-lg shadow-md shadow-secondary/75 hover:cursor-pointer hover:bg-secondary/90"
        />
      </form>
    </>
  );
};
