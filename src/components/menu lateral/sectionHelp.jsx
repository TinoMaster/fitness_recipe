import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SectionHelp = () => {


  return (
    <div className="border-b-2 p-2">
      <ul className="flex flex-col my-2 justify-center">
        <li className="itemMenuLateral">
          <NavLink
            className={({ isActive }) =>
              isActive ? "isActive" : "isDesactive"
            }
            to="/cuadre"
          >
            <FontAwesomeIcon
              className="iconMenuLateral"
              icon={faCashRegister}
            />{" "}
            Cuadre
          </NavLink>
          <span className="text-xl text-primaryLight">→</span>
        </li>
        <li className="itemMenuLateral">
          <NavLink
            className={({ isActive }) =>
              isActive ? "isActive" : "isDesactive"
            }
            to="/productos"
          >
            <FontAwesomeIcon
              className="iconMenuLateral"
              icon={faBoxesStacked}
            />{" "}
            Productos
          </NavLink>
          <span className="text-xl text-primaryLight">→</span>
        </li>
        
      </ul>
    </div>
  );
};

export default SectionHelp;
