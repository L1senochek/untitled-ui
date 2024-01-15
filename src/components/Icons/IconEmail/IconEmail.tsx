import React from "react";
import styles from "./icon-email.module.scss";

const IconEmail: React.FC = (): JSX.Element => {
  return (
    <>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        className={styles["email"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3334 2.99992C18.3334 2.08325 17.5834 1.33325 16.6667 1.33325H3.33341C2.41675 1.33325 1.66675 2.08325 1.66675 2.99992M18.3334 2.99992V12.9999C18.3334 13.9166 17.5834 14.6666 16.6667 14.6666H3.33341C2.41675 14.6666 1.66675 13.9166 1.66675 12.9999V2.99992M18.3334 2.99992L10.0001 8.83325L1.66675 2.99992"
          stroke="#667085"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconEmail;
