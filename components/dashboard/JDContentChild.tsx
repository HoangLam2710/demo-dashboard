import React from "react";
import styles from "../../styles/JobDescription.module.css";

const JDContentChild = (props: any) => {
  return (
    <div className={styles.blockContent}>
      <p className={styles.title}>{props.title}</p>
      {props.content}
    </div>
  );
};

export default JDContentChild;
