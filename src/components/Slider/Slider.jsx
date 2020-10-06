import React, { useState } from "react";
import styles from "./Slider.module.scss";

const Slider = (props) => {
  const [defaultInputTime, setDeafultTime] = useState(0)
  console.log(props.question);
  


  return (
    <section className={styles.slider}>
      <h2>{props.question.question}</h2>
      <input type="range" onChange={() => setDeafultTime(defaultInputTime + 1)} />
      <p>{defaultInputTime} minutes</p>
    </section>
  );
};

export default Slider;
