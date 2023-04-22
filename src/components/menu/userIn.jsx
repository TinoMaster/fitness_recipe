import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const UserIn = ({ setUserSettings, userSettings }) => {
  const { userName } = useContext(AuthContext);

  return (
    <div
      onClick={() => setUserSettings(!userSettings)}
      className="text-white relative px-2 flex items-center justify-around hover:cursor-pointer"
    >
      <div className="w-1/2">
        <h1 className="font-serif font-semibold w-full flex flex-wrap">Hola</h1>
        <span className="w-full font-medium">{userName}</span>
      </div>
      <div className="w-10 py-1 ml-2 bg-white mr-4 rounded-full border-2 border-secondary shadow-md overflow-hidden">
        <FontAwesomeIcon className="w-full text-primary" icon={faUser} />
      </div>
    </div>
  );
};
