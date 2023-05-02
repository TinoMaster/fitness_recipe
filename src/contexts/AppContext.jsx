import { createContext, useEffect, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash.slice(2);
  });

  const states_App = { currentRoute, setCurrentRoute };
  const functionsApp = {};

  const data = { states_App, functionsApp };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
