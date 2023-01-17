import React from "react";
import style from "./summary.module.css";

const Details = (props) => {
  const { name, email, phone } =
    (props.location && props.location.formData) || {};
  const num = (props.location && props.location.st) || {};
  const plan = (props.location && props.location.plan) || {};
  const text = (props.location && props.location.text) || {};

  const navigateToPlan = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/plan"
    });
  };

  return (
    <div>
      <div className={style.box}>
        <div className={style.circle}>1</div>
        <p>STEP 1 </p> <p>YOUR INFO </p>
        <p>STEP 2 </p> <p>SELECT PLAN </p>
        <p>STEP 3 </p> <p>SUMMARY </p>
      </div>

      <div className={style.Summary}> Summary </div>
      <div className={style.div}>
        <div className={style.name}>
          <strong>Name:</strong> {name}
        </div>
        <div className={style.email}>
          <strong>Email:</strong> {email}
        </div>
        <div className={style.phone}>
          <strong>Phone:</strong> {phone}
        </div>
        <div className={style.plan}>
          <strong>Plan:</strong> {plan}
        </div>
        <div className={style.Total}>
          <strong>Total:</strong> {num}
        </div>
        <div className={style.hr}> </div>
      </div>
      <div className={style.gtotal}>Grand Total : {text}</div>

      <button className={style.btn} type="submit">
        Pay Now
      </button>
      <button className={style.back} onClick={navigateToPlan}>
        {" "}
        Go Back{" "}
      </button>
    </div>
  );
};

export default Details;
