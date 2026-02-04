import Image from "@/components/Image/Image";
import styles from "./about.module.scss";
import { ImageSize, ImageSrc, ImageType } from "@/types/components/Image.type";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import { ButtonSize, ButtonType } from "@/types/components/Button.type";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";

export default function About() {
  const [scrollMarginTop, setScrollMarginTop] = useState(200);
  const [toggleMenu, setToggleMenu] = useState(false);

  //const bannerRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollEvent = (e: WheelEvent) => {
      const offsetY = 200;
      //console.log("window.scrollY:", window.scrollY);
      //console.log("e.deltaY:", e.deltaY);
      // console.log("window.screenY:", window.screenY);
      // console.log("window.innerHeight:", window.innerHeight);
      // console.log(
      //   "document.scrollHeight",
      //   document.scrollingElement?.scrollHeight
      // );
      if (e.deltaY < 0 && window.innerHeight / 2 > window.scrollY)
        setScrollMarginTop(offsetY);
      else if (
        document.scrollingElement &&
        window.scrollY + window.innerHeight + offsetY >
          document.scrollingElement?.scrollHeight
      )
        setScrollMarginTop(
          document.documentElement.scrollHeight -
            offsetY -
            window.innerHeight / 2
        );
      else {
        if (e.deltaY > 0)
          setScrollMarginTop(window.scrollY + window.innerHeight / 2 + offsetY);
        else setScrollMarginTop(window.scrollY - offsetY);
      }
    };
    window.addEventListener("wheel", scrollEvent);
    return () => window.removeEventListener("wheel", scrollEvent);
  }, [window]);
  useEffect(() => {}, [scrollMarginTop]);

  return (
    <div className={styles.about}>
      <div
        className={`${styles.page_menu} ${
          toggleMenu ? styles.open : styles.close
        }`}
        onClick={() => {
          setToggleMenu((prevState) => {
            if (prevState === false) return !prevState;
            else return prevState;
          });
        }}
      >
        {toggleMenu ? (
          <Icon
            size={IconSize.SMALL}
            src={IconSrc.CHEVRON}
            color={IconColor.WHITE}
            options={{ inverted: true }}
          ></Icon>
        ) : (
          <Icon
            size={IconSize.SMALL}
            src={IconSrc.CHEVRON}
            color={IconColor.WHITE}
          ></Icon>
        )}
        <ul className={styles.page_menu_list}>
          <li>
            <h2>About</h2>
          </li>
          <li>
            <h2>Work</h2>
          </li>
          <li>
            <h2>Idea</h2>
          </li>
          <li>
            <h2>Contact</h2>
          </li>
        </ul>
        <div
          className={styles.page_menu_close}
          onClick={(e) => {
            e.stopPropagation();
            setToggleMenu((prevState) => {
              return !prevState;
            });
          }}
        ></div>
      </div>
      <div
        className={styles.scroll_menu}
        style={{ marginTop: `${scrollMarginTop}px` }}
      >
        <h3>SNB</h3>
        <div className={styles.navigation}>
          <Button
            size={ButtonSize.EXTRA_SMALL}
            content={"About"}
            type={ButtonType.DARK}
            onClick={() => {}}
          />
          <Button
            size={ButtonSize.EXTRA_SMALL}
            content={"Skills"}
            type={ButtonType.DARK}
            onClick={() => {}}
          />
          <Button
            size={ButtonSize.EXTRA_SMALL}
            content={"Projects"}
            type={ButtonType.DARK}
            onClick={() => {}}
          />
          <Button
            size={ButtonSize.EXTRA_SMALL}
            content={"Contact"}
            type={ButtonType.DARK}
            onClick={() => {}}
          />
        </div>
      </div>

      <section className={styles.banner}>
        <video
          className={styles.banner_video}
          src={"/videos/sample_1.mp4"}
          loop
          autoPlay
          muted
        ></video>
        <h3 className={styles.title}>Sample Sample Title</h3>
        <div className={styles.aboutus}>{``}</div>
      </section>

      {/* <section className={styles.section}>
        <div
          className={styles.aboutus}
        >{`저희 서비스는 기업의 퍼스널 브랜딩 어쩌구\n새로운 시대의 장을 여는 저쩌구\n이를 통해 디지털 시대의 선구자가 되겠읍니다`}</div>
      </section> */}
      <section className={styles.section}>
        <div className={styles.company}>
          <div className={styles.company_image}>
            <Image size={ImageSize.LARGE} type={ImageType.LOGO} />
          </div>
          <div className={styles.company_content}>
            <ul className={styles.company_content_list}>
              <li className={styles.company_content_title}>프로젝트 소개</li>
              <li className={styles.company_content_subtitle}>
                웹사이트 서비스(Website-Service)
              </li>
              <li className={styles.company_content_detail}>{`   `}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.tech}>
          <ul className={styles.tech_content_list}>
            <li className={styles.tech_content_title}>기술 스택</li>
            <li className={styles.tech_content_subtitle}>
              <div>{"Frontend "}</div>
              <ul>
                <li> </li>
                <li>Framework : React</li>
                <li>Language : TypeScript</li>
                <li>WebGL : React-Three-Fiber/Drei</li>
                <li>State : Zustand</li>
              </ul>
            </li>
            <li className={styles.tech_content_subtitle}>
              <div>{"Backend "}</div>
              <ul>
                <li> </li>
                <li>Framework : Spring</li>
                <li>Language : Java</li>
                <li>Database : Oracle</li>
                <li>Release : AWS</li>
              </ul>
            </li>
            <li className={styles.tech_content_subtitle}>
              <div>{"Security "}</div>
              <ul>
                <li> </li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
              </ul>
            </li>
            <li className={styles.tech_content_subtitle}>
              <div>{"AI "}</div>
              <ul>
                <li> </li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
              </ul>
            </li>
          </ul>
          <div className={styles.tech_image}>
            <Image
              size={ImageSize.LARGE}
              src={ImageSrc.TECH}
              type={ImageType.TECH}
            />
          </div>
        </div>
      </section>
      <section className={styles.sec}></section>
    </div>
  );
}
