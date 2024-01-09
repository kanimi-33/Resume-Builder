import React from "react";

import Resume from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. It's <span>free </span> and Instant!
        </p>
      </div>
      <div className={styles.right}>
        <img src={Resume} alt="Resume SVG" />
      </div>
    </div>
  );
}

export default Header;
