import React from "react";

export const CategoryProduct = ({ setOptionTipeProduct }) => {
  const handlerChangeInputRadio = (e) => {
    setOptionTipeProduct(e.target.id);
  };

  return (
    <div className="flex justify-around w-full ">
      <div
        onClick={(e) => e.stopPropagation(e)}
        className="w-1/2 text-white font-serif"
      >
        <input
          onChange={handlerChangeInputRadio}
          className="inputRadioProductTipeHombre"
          defaultChecked
          id="audiovisuales"
          type="radio"
          name="productTipe"
        />
        <label htmlFor="audiovisuales" className="block text-center py-3 rounded">
          Audiovisuales
        </label>
      </div>
      <div
        onClick={(e) => e.stopPropagation(e)}
        className="w-1/2 text-white font-serif"
      >
        <input
          onChange={handlerChangeInputRadio}
          className="inputRadioProductTipeMujer"
          id="videojuegos"
          type="radio"
          name="productTipe"
        />
        <label htmlFor="videojuegos" className="block text-center py-3 rounded">
          Videojuegos
        </label>
      </div>
    </div>
  );
};
