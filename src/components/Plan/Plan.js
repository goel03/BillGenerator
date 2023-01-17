import { useState } from "react";
import React from "react";
import Switch from "@material-ui/core/Switch";
import styles from "./plan.module.css";
import style from "../Home/home.module.css";

export default function Plan(props) {
  const formData = (props.location && props.location.formData) || {};
  const [state, setState] = useState(false);
  const [text, setText] = useState();
  const [st, setst] = useState();
  const [plan, setplan] = useState();

  const navigateTohome = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/",
      formData,
      st
    });
  };

  const box = (event) => {
    var tex = 9;
    var pl = "Aracde";
    setst(tex);
    setplan(pl);
  };

  const box1 = (event) => {
    var tex = 12;
    var pl = "Advanced";
    setst(tex);
    setplan(pl);
  };

  const box2 = (event) => {
    var tex = 15;
    var pl = "Pro";
    setst(tex);
    setplan(pl);
  };

  const box5 = (event) => {
    var text;
    if (state === false) {
      text = st * 12;
      setText(text);
    } else {
      text = st;
      setText(text);
    }
  };

  console.log(text);

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/details",
      formData,
      st,
      text,
      plan
    });
  };

  return (
    <div>
      <div>
        <div className={style.box}>
          <div className={styles.circles}>1</div>
          <p>STEP 1 </p> <p>YOUR INFO </p>
          <p>STEP 2 </p> <p>SELECT PLAN </p>
          <p>STEP 3 </p> <p>SUMMARY </p>
        </div>

        <h2 className={styles.select}> Select your Plan </h2>
        <h4 className={styles.sel}>
          You have the option of monthly or yearly billing
        </h4>

        <div className={styles.bx}>
          <div className={styles.box} onClick={box}>
            <div className={styles.circle}></div>
            <div>
              <h4> Arcade </h4>
              <h6> $9/mo </h6>
            </div>
          </div>

          <div className={styles.box1} onClick={box1}>
            <div className={styles.circle}></div>
            <div>
              <h4> Advanced </h4>
              <h6> $12/mo </h6>
            </div>
          </div>

          <div className={styles.box2} onClick={box2}>
            <div className={styles.circle}></div>
            <div>
              <h4> Pro </h4>
              <h6> $15/mo </h6>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.switch}>
        <div> Monthly </div>
        <Switch
          checked={state}
          onChange={handleChange}
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
          onClick={box5}
        />
        <div> Yearly </div>
      </div>
      {console.log(state)}
      <div>
        <button className={style.back} onClick={navigateTohome}>
          Go Back
        </button>
      </div>

      <div>
        <button onClick={handleOnSubmit} className={style.btn}>
          Next Step
        </button>
      </div>
    </div>
  );
}
