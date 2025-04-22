import { useState } from "react";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <span>Hola Mundo</span>
      </AuthContextProvider>
    </>
  );
}

export default App;
