import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
