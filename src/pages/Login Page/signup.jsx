import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

/* Icons */
import { MdOutlineEmail } from "react-icons/md";
import { BsShieldLock, BsFillShieldLockFill, BsFacebook } from "react-icons/bs";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import AuthContext from "../../contexts/AuthContext";

export const Signup = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const { functions } = useContext(AuthContext);
  const { handleSignup, signupUser } = functions;
  return (
    <>
      <h2 className="font-serif text-primaryLight text-3xl text-center font-extrabold">
        Registre una cuenta
      </h2>

      <Link
        to={"/"}
        className="absolute top-5 left-5 bg-slate-100 p-2 flex items-center text-primaryLight"
      >
        <BsArrowLeft className="mr-2" />
        Volver a la pagina
      </Link>

      {/* Imagen */}
      <div className="w-48 my-5 h-48 flex border-2 shadow-lg bg-secondary items-center justify-center rounded-full overflow-hidden">
        {/* <img className="w-full h-full scale-75" src={logo} alt="Logo" /> */}
      </div>

      {/* Social logs */}
      <div className="w-4/5 my-3">
        <button className="flex items-center w-full bg-red-500/80 text-lightMode font-serif font-bold p-2 rounded-md hover:bg-red-500 hover:text-white transition-all">
          <AiFillGoogleCircle size={"28px"} className="mr-2" /> Crear una cuenta
          con Google
        </button>
      </div>
      <div className="w-4/5 my-3">
        <button className="flex items-center w-full bg-blue-500/80 text-lightMode font-serif font-bold p-2 rounded-md hover:bg-blue-500 hover:text-white transition-all">
          <BsFacebook size={"24px"} className="mr-2" /> Crear una cuenta con
          Facebook
        </button>
      </div>

      <form onSubmit={signupUser} className="w-full flex flex-col">
        <label htmlFor="nombre" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Nombre:</span>
          <div className="flex items-center">
            <BiUserCircle
              size={"24px"}
              className="text-slate-400 absolute pl-1"
            />
            <input
              onChange={handleSignup}
              id="nombre"
              type="text"
              name="name"
              placeholder="Escriba su nombre de usuario"
              className="inputAuth"
              autoComplete="off"
            />
          </div>
        </label>
        <label htmlFor="email" className="flex flex-col w-4/5 m-auto">
          <span className=" font-serif text-slate-500 ml-1">Correo:</span>
          <div className="flex items-center">
            <MdOutlineEmail
              size={"24px"}
              className="text-slate-400 absolute pl-1"
            />
            <input
              onChange={handleSignup}
              id="email"
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
              onChange={handleSignup}
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
        <label
          htmlFor="confirm_password"
          className="flex flex-col w-4/5 m-auto relative"
        >
          <span className=" font-serif text-slate-500 ml-1">
            Confirmar Contraseña:
          </span>
          <div className="flex items-center">
            <BsFillShieldLockFill
              size={"24px"}
              className=" text-slate-400 absolute pl-1"
            />
            <input
              onChange={handleSignup}
              id="confirm_password"
              type={viewPassword ? "text" : "password"}
              name="confirm_password"
              placeholder="vuelva a escribir su contraseña"
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

        <div className=" w-4/5 m-auto flex justify-end">
          <Link
            to={"/auth"}
            className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base"
          >
            Inicio de session?
          </Link>
          {/* <span className="text-sky-600 hover:cursor-pointer hover:text-sky-700 text-sm lg:text-base text-end">
            Olvide mi contraseña?
          </span> */}
        </div>

        <input
          value="Registrar"
          type="submit"
          className="my-5 p-2 w-2/3 m-auto bg-secondary/80 text-white rounded-lg shadow-md shadow-secondary/75 hover:cursor-pointer hover:bg-secondary/90"
        />
      </form>
    </>
  );
};
