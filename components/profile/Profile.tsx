import React from "react";
import Image from "next/image";
import styles from "./Profile.module.css";

export const Profile = ({ path }: { path: string }) => {
  return (
    <div style={{ display: "flex" }}>
      <Image className={styles["profile-image"]} src={path} alt="Profile" />
    </div>
  );
};
