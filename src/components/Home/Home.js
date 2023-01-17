import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Image from "./flagindian.png";
import styles from "./home.module.css";

const UserForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/plan",
      formData
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(formData);
  };

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.circle}>1</div>
        <p>STEP 1 </p> <p>YOUR INFO </p>
        <p>STEP 2 </p> <p>SELECT PLAN </p>
        <p>STEP 3 </p> <p>SUMMARY </p>
      </div>

      <div>
        <h2 className={styles.info}> Your Information </h2>
        <form onSubmit={handleOnSubmit}>
          <label className={styles.name}>Name</label>
          <input
            className={styles.name1}
            type="text"
            name="name"
            placeholder="Enter your name.."
            onChange={handleChange}
          />

          <label className={styles.email}>Email</label>
          <input
            className={styles.email1}
            type="text"
            name="email"
            placeholder="Enter the email.."
            onChange={handleChange}
          />

          <label className={styles.phone}> Phone-No </label>
          <TextField
            className={styles.phone1}
            type="text"
            name="phone"
            variant="outlined"
            placeholder="  Enter the phone number..."
            InputProps={{
              startAdornment: (
                <img src={Image} height="20px" width="25px" alt="img" />
              )
            }}
            onChange={handleChange}
          />

          <button className={styles.btn} type="submit">
            Next Step
          </button>
        </form>
      </div>
      <button
        className={styles.back}
        onClick={() => alert("It is the Home Page")}
      >
        Go Back{" "}
      </button>
    </div>
  );
};

export default UserForm;
