import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import CuteCat from "./components/CuteCat/CuteCat";
import BackCard from "./components/BackCard/BackCard";
import PulseButton from "./components/PulseButton/PulseButton";
import axios from "axios";
import { throttle } from "lodash";
import { useDebounce } from "../src/hooks/useDebounce";
function App() {
  const [topic, setTopic] = useState("");
  const [realTopic, setRealTopic] = useState("");
  const [active, setActive] = useState(false);
  const ref = useRef();
  const heartRef = useRef();
  const animationHeartRef = useRef();

  const callApi = async () => {
    axios.get("http://localhost:8080/question").then((res) => {
      console.log(res.data);
      setTopic(res.data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    const listener = (event) => {
      console.log("마우스 올렸다.");
      callApi();
    };
    document.addEventListener("mouseenter", listener);
    return () => {
      document.removeEventListener("mouseenter", listener);
    };
  }, []);

  useEffect(() => {}, []);
  // heartRef.curret.addEventListener("click", () => {
  //   // animationHeart.classList.add("animaiton");
  //   animationHeartRef.curret.classList.add("animation");
  //   // heart.classList.add("fill-color");
  // });

  // animationHeartRef.curret.addEventListener("click", () => {
  //   animationHeartRef.curret.classList.remove("animation");
  //   // heart.classList.remove("fill-color");
  // });

  // return () => {
  //   animationHeartRef.curret.removeEventListener("click", () => {
  //     animationHeartRef.curret.classList.remove("animation");
  //     // heart.classList.remove("fill-color");
  //   });
  //   heartRef.curret.removeEventListener("click", () => {
  //     animationHeartRef.curret.classList.remove("animation");
  //     // heart.classList.remove("fill-color");
  //   });
  // };
  return (
    <div className="wrapper">
      <div ref={ref} class="flip">
        <div onClick={() => setActive(!active)} className="trick"></div>
        <div class="card">
          <div class="front">
            <CuteCat></CuteCat>
          </div>
          <div class="back">
            <BackCard text={topic} active={active}></BackCard>
          </div>
        </div>
      </div>

      {/* <div className="test">
        <PulseButton></PulseButton>
      </div> */}
    </div>
  );
}

export default App;
