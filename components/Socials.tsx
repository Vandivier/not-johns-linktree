import { FunctionComponent } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";

import React from "react";
import styles from "./Socials.module.css";
import { Mastodon } from "./icons/Mastadon";
import { Substack } from "./icons/Substack";

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
  "https://www.youtube.com/c/JohnVandivier",
  "https://www.tiktok.com/@johnvandivier",
  {
    backgroundColor: "#FF681A",
    height: "16px",
    svg: Substack,
    url: "https://optimality.substack.com/",
    width: "14px",
  },
  "https://twitter.com/johnvandivier",
  {
    backgroundColor: "#8c8dfe",
    height: "20px",
    svg: Mastodon,
    url: "https://mastodon.online/@johnvandivier",
    width: "18px",
  },
  "https://twitch.tv/johnvandivier",
  "https://discord.gg/fAg6Xa4uxc",
  "https://www.instagram.com/vandivi3r/",
  "https://github.com/Vandivier",
  "https://www.linkedin.com/in/john-vandivier",
  "mailto:john@ladderly.io",
];

const SocialItemWithCustomIcon: FunctionComponent<{ data: CustomIconData }> = ({
  data,
}) => (
  <li
    key={data.url}
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
  <li key={url}>
    <StyledSocialIcon url={url} target="_blank" />
  </li>
);

export const Socials = () => (
  <ul className={styles["social-list-wrapper"]}>
    {orderedSocials.map((data) =>
      typeof data === "string" ? (
        <SocialItemFromString url={data} />
      ) : (
        <SocialItemWithCustomIcon data={data} />
      )
    )}
  </ul>
);
