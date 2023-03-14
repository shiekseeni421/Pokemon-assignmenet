import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";

function App() {
  return (
    <>
      <div className="mb-4">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/itempage" element={<ItemPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
