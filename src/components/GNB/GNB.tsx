import Image from "@/components/Image/Image";
import styles from "./gnb.module.scss";
import { ImageSize, ImageSrc, ImageType } from "@/types/components/Image.type";
import Button from "../Button/Button";
import { ButtonSize } from "@/types/components/Button.type";
import { Link } from "react-router-dom";
export default function GNB() {
  return (
    <div className={styles.gnb}>
      <a href={"/"}>
        <Image
          size={ImageSize.SMALL}
          src={ImageSrc.GIT_PROFILE}
          type={ImageType.LOGO}
        />
      </a>

      <div className={styles.gnb_bar}>
        <ul className={styles.nav_bar}></ul>
        <ul className={styles.login_bar}>
          <li>
            <a href={"/about"}>About</a>
          </li>
          <li>
            <a href={"/skills"}>Skills</a>
          </li>
          <li>
            <a href={"/projects"}>Projects</a>
          </li>
          <li>
            <a href={"/contact"}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
