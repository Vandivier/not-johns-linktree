import React from "react";
import styles from "./Profile.module.css";

export const Profile = ({ path }: { path: string }) => {
  return (
    <div style={{ display: "flex" }}>
      <img className={styles["profile-image"]} src={path} alt="Profile" />
    </div>
  );
};
