import React from "react";
import styles from "./styles.module.css";

type SpinnerProps = {
  size?: number | string;
  className?: string;
  "aria-label"?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 40,
  "aria-label": ariaLabel = "Loading",
}) => {
  const style =
    typeof size === "number"
      ? { width: size, height: size }
      : { width: size, height: size };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.spinner}`}
        style={style}
        role="status"
        aria-label={ariaLabel}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
