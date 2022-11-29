import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Icons from "./components/Icons";
import Invoices from "./components/Invoices";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import { useState } from "react";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={[<Invoices />, <SideBar />, <Icons />, <Table />]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
