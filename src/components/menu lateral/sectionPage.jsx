import React from "react";
import { CategoryByTipe } from "./section page/categoryByTipe";

import img from "../../assets/img/ropa.jpg";
import img2 from "../../assets/img/complementos.jpg";
import img3 from "../../assets/img/tenis.jpg";
import img4 from "../../assets/img/zapatos.jpg";
import img5 from "../../assets/img/zapatos.jpg";
import img6 from "../../assets/img/gorras.jpg";
import img7 from "../../assets/img/marcas.jpg";
import img8 from "../../assets/img/invierno.jpg";

const SectionPage = ({ optionTipeProduct }) => {

  return (
    <div className="border-b-2 p-2 flex flex-wrap justify-around">
      {optionTipeProduct === "audiovisuales" && (
        <>
          <>
            <CategoryByTipe imagen={img2} titulo="Articulos" />
            <CategoryByTipe imagen={img4} titulo="Zapatos" />
            <CategoryByTipe imagen={img3} titulo="Tenis" />
            <CategoryByTipe imagen={img8} titulo="Invierno" />
            <CategoryByTipe imagen={img} titulo="Ropa" />
            <CategoryByTipe imagen={img7} titulo="Marcas" />
            <CategoryByTipe imagen={img5} titulo="Rebajas" />
            <CategoryByTipe imagen={img6} titulo="Gorras" />
          </>
        </>
      )}
      {optionTipeProduct === "videojuegos" && (
        <>
          <CategoryByTipe imagen={img2} titulo="Articulos" />
          <CategoryByTipe imagen={img8} titulo="Invierno" />
          <CategoryByTipe imagen={img4} titulo="Zapatos" />
          <CategoryByTipe imagen={img7} titulo="Marcas" />
          <CategoryByTipe imagen={img} titulo="Ropa" />
          <CategoryByTipe imagen={img6} titulo="Gorras" />
          <CategoryByTipe imagen={img3} titulo="Tenis" />
          <CategoryByTipe imagen={img5} titulo="Rebajas" />
        </>
      )}
    </div>
  );
};

export default SectionPage;
