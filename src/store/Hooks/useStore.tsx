import { createContext, useContext } from "react";
import { RootStore } from "../store";

const StoreContext = createContext<RootStore | null>(null);

// Провайдер хранилища
export const StoreProvider: React.FC<{
  store: RootStore;
  children: React.ReactNode;
}> = ({ store, children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

// Хук для использования хранилища
export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore должен использоваться внутри StoreProvider");
  }
  return store;
};
