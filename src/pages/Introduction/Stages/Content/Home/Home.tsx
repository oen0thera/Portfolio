import * as Three from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { ScrollControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

import styles from "./home.module.scss";
import { HomeProps } from "@/types/components/pages/introduction/Content/Home.type";

function RotateBox({ position, startPoint, resetPoint, scrollPoint }: BoxArgs) {
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);
  const texture = useLoader(Three.TextureLoader, "/images/sample_image.png");
  useFrame(() => {
    materialRef.current.transparent = true;
    if (meshRef.current) {
      meshRef.current.visible = true;
      if (scrollPoint <= 0 && materialRef.current.opacity > 0) {
        materialRef.current.opacity -= 0.01;
      } else if (scrollPoint > 0 && materialRef.current.opacity < 1) {
        materialRef.current.opacity += 0.01;
      }

      if (meshRef.current.position.x > resetPoint) {
        meshRef.current.position.x = startPoint;
      }
      meshRef.current.position.x += 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]}>
      <boxGeometry args={[20, 50, 0.1]} />
      <meshStandardMaterial
        ref={materialRef}
        map={texture}
        color="white"
        opacity={0}
      />
    </mesh>
  );
}

type BoxArgs = {
  position: Array<number>;
  resetPoint: number;
  startPoint: number;
  scrollPoint: number;
};

export default function Home({ scroll, nextStage }: HomeProps) {
  const [clickStage, setClickStage] = useState(false);
  const [scrollPoint, setScrollPoint] = useState(1);
  const handleStage = () => {
    let stageTransition: ReturnType<typeof setTimeout> | null = null;

    if (scroll === 1 && !clickStage) {
      nextStage(false);
    } else {
      stageTransition = setTimeout(() => {
        nextStage(true);
      }, 2000);
    }
    return stageTransition;
  };
  useEffect(() => {
    const stageTransition = handleStage();
    scroll === 0 || clickStage ? setScrollPoint(0) : setScrollPoint(1); //스크롤을 내렸을때(0) 혹은 클릭했을때(clickStage)
    if (stageTransition)
      return () => {
        clearTimeout(stageTransition);
      };
  }, [scroll, clickStage]);
  useEffect(() => {
    console.log(scrollPoint);
  }, [scrollPoint]);

  return (
    <div className={styles.screen}>
      <div
        className={
          scroll === 1 && !clickStage
            ? styles.title
            : `${styles.title} ${styles.off}`
        }
        onClick={() => {
          setClickStage(true);
          handleStage();
        }}
      >
        Your First Service
      </div>

      <section className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, -10] }}>
          <ScrollControls>
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />

            <RotateBox
              position={[100, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[75, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[50, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[25, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[0, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-25, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-50, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-75, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-100, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />

            <gridHelper args={[10, 10]} />
            <axesHelper args={[8]} />
          </ScrollControls>
        </Canvas>
      </section>

      <section className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ScrollControls>
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            <RotateBox
              position={[100, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[75, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[50, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[25, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[0, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-25, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-50, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-75, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <RotateBox
              position={[-100, -17, 0]}
              startPoint={-100}
              resetPoint={100}
              scrollPoint={scrollPoint}
            />
            <gridHelper args={[10, 10]} />
            <axesHelper args={[8]} />
          </ScrollControls>
        </Canvas>
      </section>
    </div>
  );
}
