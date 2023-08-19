import { FunctionComponent } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";

import React from "react";
import styles from "./Socials.module.css";
import { Substack } from "../icons/Substack";

type CustomIconData = {
  backgroundColor: string;
  height: string;
  url: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  width: string;
};

const StyledSocialIcon: FunctionComponent<SocialIconProps> = (props) => (
  <SocialIcon
    {...props}
    style={{ height: "2rem", margin: ".25rem", width: "2rem" }}
  />
);

const orderedSocials: (string | CustomIconData)[] = [
  "https://www.youtube.com/c/JohnVandivier?sub_confirmation=1",
  "https://www.tiktok.com/@johnvandivier",
  "https://discord.gg/fAg6Xa4uxc",
  "https://twitter.com/johnvandivier",
  {
    backgroundColor: "#FF681A",
    height: "16px",
    svg: Substack,
    url: "https://optimality.substack.com/",
    width: "14px",
  },

  "https://twitch.tv/johnvandivier",
  "https://www.instagram.com/vandivi3r/",
  "https://github.com/Vandivier",
  "https://www.linkedin.com/in/john-vandivier",
];

const SocialItemWithCustomIcon: FunctionComponent<{ data: CustomIconData }> = ({
  data,
}) => (
  <li
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      width: "40px",
    }}
  >
    <div
      className={styles["social-circle"]}
      style={{ backgroundColor: data.backgroundColor }}
    >
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: data.height, width: data.width }}
      >
        <data.svg />
      </a>
    </div>
  </li>
);

const SocialItemFromString: FunctionComponent<{ url: string }> = ({ url }) => (
  <li>
    <StyledSocialIcon url={url} target="_blank" />
  </li>
);

export const Socials = () => (
  <ul className={styles["social-list-wrapper"]}>
    {orderedSocials.map((data) =>
      typeof data === "string" ? (
        <SocialItemFromString key={data} url={data} />
      ) : (
        <SocialItemWithCustomIcon key={data.url} data={data} />
      )
    )}
  </ul>
);
