import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import CuteCat from "./components/CuteCat/CuteCat";
import BackCard from "./components/BackCard/BackCard";
import PulseButton from "./components/PulseButton/PulseButton";
import axios from "axios";
function App() {
  const [topic, setTopic] = useState("");
  const callApi = async () => {
    axios.get("http://localhost:8080/question").then((res) => {
      console.log(res.data);
      setTopic(res.data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div class="flip">
        <div class="card">
          <div class="front">
            <CuteCat></CuteCat>
          </div>
          <div class="back">
            <BackCard text={topic}></BackCard>
          </div>
        </div>
      </div>
      {/* <div className="test">
        <PulseButton></PulseButton>
      </div> */}
    </>
  );
}

export default App;
