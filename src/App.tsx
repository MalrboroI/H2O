import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./store/StoreProvider";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./globalStyles/App.scss";

const App: React.FC = observer(() => {
  const { reportStore } = useStore();

  return (
    <div className="app">
      <Sidebar />
      <div className="mainContent">
        <Header />
        <Dashboard reportStore={reportStore} />
      </div>
    </div>
  );
});

export default App;
