import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Calculator from "./components/Calculator";

export interface JokeObject {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
