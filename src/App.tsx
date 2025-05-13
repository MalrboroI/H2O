import React from "react";
import { observer } from "mobx-react-lite";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.scss";

const App: React.FC = observer(() => {
  return (
    <div className="app">
      <Sidebar />
      <div className="mainContent">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
});

export default App;
