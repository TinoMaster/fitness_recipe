import React from "react";
import { Link } from "react-router-dom";
/* Icons */
import { MdFastfood } from "react-icons/md";
import { GiHealing,GiCampCookingPot } from "react-icons/gi";

export const BottomMenu = () => {
  return (
    <div className="flex justify-around w-full bg-gradient-to-r from-primary to-primaryLight text-lightMode p-2 rounded-t-md overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xs font-serif">Nutrition</p>
        <Link to={"/nutrition"} className="shadow-md p-2 rounded-md">
          <GiHealing title="Nutrition" size={"28px"} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xs font-serif">Foods</p>
        <Link to={"/food"} className="shadow-md p-2 rounded-md">
          <MdFastfood title="food" size={"28px"} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xs font-serif">Recipe</p>
        <Link to={"/recipe"} className="shadow-md p-2 rounded-md">
          <GiCampCookingPot title="recipe" size={"28px"} />
        </Link>
      </div>
    </div>
  );
};
