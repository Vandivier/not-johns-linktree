import React from "react";
import Image from "next/image";
import styles from "./Profile.module.css";

export const Profile = ({ path }: { path: string }) => {
  return (
    <div style={{ display: "flex" }}>
      <Image
        alt="Profile"
        className={styles["profile-image"]}
        height={128}
        src={path}
        width={128}
      />
    </div>
  );
};
