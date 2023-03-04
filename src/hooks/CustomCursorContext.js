import React from "react";
import { useState } from "react";
const CustomCursorContext = React.createContext({
  cursor: "default",
  setCursor: () => {},
});

const CustomCursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState("default");

  return (
    <CustomCursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CustomCursorContext.Provider>
  );
};
export { CustomCursorProvider, CustomCursorContext };
