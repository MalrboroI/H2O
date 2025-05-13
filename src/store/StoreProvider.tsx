import React, { createContext, useContext } from "react";
import RootStore from "./RootStore";

const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const rootStore = new RootStore();
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore должен использоваться внутри StoreProvider");
  }
  return store;
};
