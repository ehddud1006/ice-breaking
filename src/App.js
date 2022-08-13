import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import CuteCat from "./components/CuteCat/CuteCat";
import BackCard from "./components/BackCard/BackCard";
import PulseButton from "./components/PulseButton/PulseButton";
import axios from "axios";
import { set, throttle } from "lodash";
import { useDebounce } from "../src/hooks/useDebounce";
import Category from "./components/Category/Category";
import IceBreak from "./components/IceBreak/IceBreak";
import Future from "./components/Future/Future";
import Lotto from "./components/Lotto/Lotto";
function App() {
  const [category, setCategory] = useState("icebreak");
  return (() => {
    switch (category) {
      case "icebreak":
        return (
          <IceBreak category={category} setCategory={setCategory}></IceBreak>
        );
      case "future":
        return <Future category={category} setCategory={setCategory}></Future>;
      case "lotto":
        return <Lotto category={category} setCategory={setCategory}></Lotto>;
      default:
        return (
          <IceBreak category={category} setCategory={setCategory}></IceBreak>
        );
    }
  })();
}

export default App;
