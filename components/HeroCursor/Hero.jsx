import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar/Navbar";
export const Hero = () => {
  return (
    <div className={styles.container} id="Home">
<Navbar />
<div className={styles.stripe}></div>
    </div>
  
);
};
