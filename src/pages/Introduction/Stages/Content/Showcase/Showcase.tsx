import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";

import styles from "./showcase.module.scss";
import {
  ShowcaseProps,
  ShowcaseUnitEnum,
} from "@/types/components/pages/introduction/Content/Showcase.type";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import Button from "@/components/Button/Button";
import { ButtonSize, ButtonType } from "@/types/components/Button.type";
import ShowcaseLeftContent from "@/pages/Introduction/Stages/Content/Showcase/ShowcaseUnit/ShowcaseLeftContent";
import ScrollDetect from "@/pages/Introduction/Stages/Content/Showcase/ScrollDetect/ScrollDetect";
import ShowcasePlane from "./ShowcasePlane/ShowcasePlane";
import ShowcaseBackground from "./ShowcaseBackground/ShowcaseBackground";
export default function Showcase({
  scroll,
  nextStage,
  prevStage,
}: ShowcaseProps) {
  const [screenOff, setScreenOff] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [scrollIcon, setScrollIcon] = useState(true);
  const [scrollTo, setScrollTo] = useState<number | null>(0);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [pointerHover, setPointerHover] = useState(false);

  const page = 4;
  const items = Array(page)
    .fill(undefined, 0, page)
    .map((_, i) => {
      let type;
      let content;
      switch (i) {
        case 0:
          type = ShowcaseUnitEnum.ABOUT;
          content = `안녕하세요 항상 정진하는 개발자 김원진입니다.
미디어전공에서 복수전공으로 소프트웨어 전공을 이수하면서 개발에 관심을 갖게 되었고
현재까지 이어져 개발 커리어를 이어가고 있습니다.
항상 '부족해도 노력하자'는 마음가짐으로 주변 동료의 배울 점을 찾으며,
부족한 점은 채우고 상호 존중과 협력을 추구하는 팀 지향 개발자가 되기 위해 항상 노력하고 있습니다.`;
          break;
        case 1:
          type = ShowcaseUnitEnum.WORK;
          content = `[기술 스택]`;
          break;
        case 2:
          type = ShowcaseUnitEnum.IDEA;
          content = `[프로젝트 경험]`;
          break;
        default:
          type = ShowcaseUnitEnum.CONTACT;
          content = `[연락처]`;
      }

      return (
        <ShowcaseLeftContent
          key={i}
          position={[10, 0, 20 + 40 * i]}
          page={i + 1}
          type={type}
          content={content}
          setHover={setPointerHover}
          setScreenOff={setScreenOff}
        />
      );
    });

  useEffect(() => {
    let scrollInterval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setHasMounted(true);
      scrollInterval = setInterval(() => {
        setScrollIcon((prev) => {
          return !prev;
        });
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    console.log(scroll, scrollOffset);
    if (scroll === 0 && Math.abs(scrollOffset - 1) < 0.01) {
      setTimeout(() => {
        nextStage(true);
      }, 1000);
    } else if (scroll === 1 && scrollOffset < 0.01) {
      prevStage(true);
    }
  }, [scroll, scrollOffset]);

  const onScroll = (scroll: number) => {
    if (scroll > 0) {
      setScrollOffset(scroll);

      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  return (
    <div
      className={`${styles.screen} ${
        screenOff || Math.abs(scrollOffset - 1) < 0.01 ? styles.off : null
      }`}
      style={{ cursor: pointerHover ? "pointer" : "" }}
    >
      <section className={styles.canvas}>
        <div className={styles.ui}>
          {hasMounted && (
            <h3
              className={`${styles.scroll_ui} ${
                scrollState === false ? styles.on : styles.off
              }`}
            >
              Scroll down to traverse
            </h3>
          )}
        </div>
        {hasMounted && !scrollState && (
          <div
            className={`${styles.scroll} ${
              scrollIcon ? styles.on : styles.off
            }`}
          >
            <Icon
              src={IconSrc.SCROLL}
              size={IconSize.SMALL}
              color={IconColor.WHITE}
            />
          </div>
        )}
        <Canvas camera={{ position: [0, 0, -10] }}>
          <ShowcaseBackground />
          <ScrollControls pages={30}>
            <ScrollDetect
              onScroll={onScroll}
              scrollTo={scrollTo}
              setScroll={setScrollTo}
            />
            <Scroll html>
              <div></div>
            </Scroll>

            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            {items}
            <ShowcasePlane />
            <gridHelper args={[10, 10]} />
            <axesHelper args={[8]} />

            {/* <OrbitControls/> */}
          </ScrollControls>
        </Canvas>
      </section>
      <div className={styles.snb}>
        <h2>스크롤 항목</h2>
        <div className={styles.navigation}>
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"About"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(1);
            }}
          />
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"Skills"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(2);
            }}
          />
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"Projects"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(3);
            }}
          />
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"Contact"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(4);
            }}
          />
        </div>
      </div>
    </div>
  );
}
