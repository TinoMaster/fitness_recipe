import { useEffect } from "react";
import { useState } from "react";

import { config } from "./configs/api.config";
import { Layout } from "./layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home Page";
import { NutritionPage } from "./pages/Nutrition Page";
import { FoodPage } from "./pages/Food Page";
import { RecipePage } from "./pages/Recipes Page";

function App() {
  const [ingredient, setIngredient] = useState("sugar");

  /* useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    fetch(
      `${config.url}?app_id=${config.api_id}&app_key=${config.api_key}&nutrition-type=cooking&ingr=${ingredient}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []); */

  return (
    <section className="w-screen h-screen">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/recipe" element={<RecipePage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </section>
  );
}

export default App;
