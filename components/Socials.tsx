import { FunctionComponent } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";

import styles from "./Socials.module.css";

const StyledSocialIcon: FunctionComponent<SocialIconProps> = (props) => (
  <SocialIcon
    {...props}
    style={{ height: "2rem", margin: ".25rem", width: "2rem" }}
  />
);

export const Socials = () => (
  <ul className={styles["social-list-wrapper"]}>
    <li>
      <StyledSocialIcon
        url="https://twitter.com/johnvandivier"
        target="_blank"
      />
    </li>
    <li>
      <StyledSocialIcon
        url="https://www.youtube.com/c/JohnVandivier"
        target="_blank"
      />
    </li>
    <li>
      <StyledSocialIcon
        url="https://www.linkedin.com/in/john-vandivier"
        target="_blank"
      />
    </li>
    <li>
      <StyledSocialIcon
        url="https://www.tiktok.com./@johnvandivier"
        target="_blank"
      />
    </li>
    <li>
      <StyledSocialIcon url="https://github.com/Vandivier" target="_blank" />
    </li>
    <li>
      <StyledSocialIcon
        url="https://www.instagram.com/vandivi3r/"
        target="_blank"
      />
    </li>
    <li>
      <StyledSocialIcon url="https://twitch.tv/johnvandivier" target="_blank" />
    </li>
    <li>
      <StyledSocialIcon url="https://discord.gg/fAg6Xa4uxc" target="_blank" />
    </li>
    <li>
      <StyledSocialIcon url="mailto:john@ladderly.io" target="_blank" />
    </li>
  </ul>
);
