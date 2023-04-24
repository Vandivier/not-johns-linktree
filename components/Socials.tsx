import { FunctionComponent } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";

import styles from "./Socials.module.css";

const StyledSocialIcon: FunctionComponent<SocialIconProps> = (props) => (
  <SocialIcon
    {...props}
    style={{ height: "2rem", margin: ".25rem", width: "2rem" }}
  />
);

const orderedSocials = [
  "https://www.youtube.com/c/JohnVandivier",
  "https://www.tiktok.com/@johnvandivier",
  "https://optimality.substack.com/",
  "https://twitter.com/johnvandivier",
  "https://mastodon.online/@johnvandivier",
  "https://twitch.tv/johnvandivier",
  "https://discord.gg/fAg6Xa4uxc",
  "https://www.instagram.com/vandivi3r/",
  "https://github.com/Vandivier",
  "https://www.linkedin.com/in/john-vandivier",
  "mailto:john@ladderly.io",
];

export const Socials = () => (
  <ul className={styles["social-list-wrapper"]}>
    {orderedSocials.map((url) => (
      <li key={url}>
        <StyledSocialIcon url={url} target="_blank" />
      </li>
    ))}
  </ul>
);
