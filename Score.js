import { useState } from "react";
import "./Score.css";

export default function Score(props) {
  const [score_var, set_score_var] = useState(0);
  return (
    <div className="score">
      <button className="scoreArrows"
        onClick={function () {
          set_score_var(score_var + 1);
          console.log(score_var);
        }}
      >
        {" "}
        ^{" "}
      </button>
      <div> {score_var} </div>
      <button className="scoreArrows"
        onClick={function () {
          set_score_var(score_var - 1);
          console.log(score_var);
        }}
      >
        {" "}
        v{" "}
      </button>
    </div>
  );
}