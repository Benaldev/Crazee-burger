import React from "react";

export default React.createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: false,
  setIsAddSelected: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},
});
