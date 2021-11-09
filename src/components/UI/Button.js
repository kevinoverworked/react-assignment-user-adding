import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button type="submit" className={styles.button}>
            {props.label}
        </button>
    );
};

export default Button;
