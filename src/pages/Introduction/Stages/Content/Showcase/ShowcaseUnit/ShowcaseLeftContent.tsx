import * as Three from "three";
import {
  RoundedBox,
  Text,
  useScroll,
  useVideoTexture,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import {
  ShowcaseUnitArgs,
  ShowcaseUnitEnum,
} from "@/types/components/pages/introduction/Content/Showcase.type";
import { useLocation, useNavigate } from "react-router-dom";

const ShowcaseLeftContent = ({
  position,
  page,
  type,
  content,
  setHover,
  setScreenOff,
}: ShowcaseUnitArgs) => {
  const [isClicked, setIsClicked] = useState(false);
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);
  const location = useLocation();
  const navigate = useNavigate();

  //const texture = useLoader(Three.TextureLoader,'/images/sample_image.png')
  let videoSrc;
  switch (type) {
    case ShowcaseUnitEnum.ABOUT:
      videoSrc = "/videos/showcase_1.mp4";
      break;
    default:
      videoSrc = "/videos/showcase_4.mp4";
  }
  const texture = useVideoTexture(videoSrc, {
    loop: true,
    start: false,
    muted: true,
    crossOrigin: "anonymous",
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<Three.Mesh>(null!);
  const subTextRef = useRef<Three.Mesh>(null!);
  const { camera } = useThree();
  const scroll = useScroll();
  const lerpOffset = useRef(0);
  let titlePositionY;
  switch (type) {
    case ShowcaseUnitEnum.ABOUT:
      titlePositionY = 12;
      break;
    case ShowcaseUnitEnum.WORK:
      titlePositionY = 13;
      break;
    default:
      titlePositionY = 11;
  }

  texture.wrapS = Three.ClampToEdgeWrapping;
  texture.wrapT = Three.ClampToEdgeWrapping;
  texture.center.set(0.5, 0.5);
  texture.offset.set(0, 0);
  texture.repeat.set(1, 1);
  texture.rotation = 0;

  const handlePointerOver = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime === 0) {
        videoRef.current?.play();
      }
    }

    setHover(true);
  };

  const handlePointerOut = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime > 0) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
    setHover(false);
  };
  const handlePointerClick = (_: ThreeEvent<PointerEvent>) => {
    setIsClicked(true);
  };

  if (texture.image && !videoRef.current) {
    //videoRef에 texture 내 video 태그 지정
    videoRef.current = texture.image as HTMLVideoElement;
  }

  // 컨텐트 클릭시 smooth camera lookat 및 zoom-in, 페이지 전환
  useFrame((_state) => {
    if (isClicked) {
      if (meshRef.current) {
        const currCameraDirection = new Three.Vector3(); //현재 카메라가 보고 있는 방향 벡터
        const currCameraPosition = new Three.Vector3();
        camera.getWorldDirection(currCameraDirection); //카메라가 보고 있는 방향을 저장
        camera.getWorldPosition(currCameraPosition);
        currCameraDirection.add(currCameraPosition);
        const targetPosition = meshRef.current.position; //목표 벡터 (클릭한 meshRef)
        if (lerpOffset.current < 1) {
          lerpOffset.current = Math.min(lerpOffset.current + 0.001, 1);

          const cosLerpOffset =
            (1 - Math.cos(lerpOffset.current * Math.PI)) / 2; //(1-cosπx)/2의 형태로 cosLerpOffset 증가
          // 초기 느리고 중간에서 빠르게 증가, 끝에서 완화하는 형태

          const lerpDirection = currCameraDirection.lerp(
            targetPosition,
            cosLerpOffset
          ); //보간 벡터로 방향 변경, cosLerpOffset으로 보간 간격 조정
          const lerpPosition = currCameraPosition.lerp(
            targetPosition,
            cosLerpOffset
          ); //보간 벡터로 이동, cosLerpOffset으로 보간 간격 조정
          camera.lookAt(lerpDirection); //보간 벡터 방향으로 천천히 변경
          camera.position.copy(lerpPosition); //보간 벡터 위치로 천천히 이동
          const distance = lerpPosition.distanceTo(targetPosition);
          if (distance < 10) {
            materialRef.current.opacity -= 0.05;
            setScreenOff(true); //천천히 fadeout
            setTimeout(() => {
              navigate(`${location.pathname}`);
            }, 1000); //해당 object에 충분히 가까워졌을경우(<10) 상세 페이지로 이동, fadeout될때까지 1초 대기
          }
        }
      }
    }
  });

  // SNB 클릭시 smooth 스크롤 및 Fade-in/Fade-out 설정
  useFrame((_state) => {
    materialRef.current.transparent = true;
    const textMat = textRef.current.material as Three.Material;
    const subTextMat = subTextRef.current.material as Three.Material;
    textMat.transparent = true;
    // const camera = new Three.Vector3(0, 0, -10);
    // const cameraPos = new Three.Vector3(-state.pointer.x, state.pointer.y, 0);
    //const pointerPos = camera.lerp(cameraPos, 0.01);
    if (meshRef.current) {
      //const scrollPosition = 0;
      meshRef.current.visible = true;
      textRef.current.visible = true;

      if (materialRef.current.opacity < 1 && !isClicked)
        materialRef.current.opacity += 0.05;
      const radius = 8;
      //const baseX = position[0];
      const baseZ = position[2];

      const angle = -scroll.offset * Math.PI;

      //meshRef.current.position.x = baseX*1.5 - Math.cos(angle) * radius;
      meshRef.current.position.z =
        baseZ - Math.sin(angle) * radius - scroll.offset * scroll.pages * 5;
      //textRef.current.position.x = baseX*1.5 - Math.cos(angle) * radius -18;

      textRef.current.position.z =
        baseZ - Math.sin(angle) * radius - scroll.offset * scroll.pages * 5;
      //subTextRef.current.position.x = baseX - Math.cos(angle) * radius -18;

      subTextRef.current.position.z =
        baseZ - Math.sin(angle) * radius - scroll.offset * scroll.pages * 5;

      const stageOffset = scroll.offset * 4; // 페이지 4단계 정규화
      const fadeRange = 0.9; // 얼마나 일찍/늦게 보이게 할지
      const fadeSpeed = 0.1; // Fade-in/Fade-out 속도

      const distance = Math.abs(stageOffset - page);
      const shouldShow = distance < fadeRange;

      const targetOpacity = shouldShow ? 1 : 0;

      textMat.opacity += (targetOpacity - textMat.opacity) * fadeSpeed;
      subTextMat.opacity += (targetOpacity - subTextMat.opacity) * fadeSpeed;
    }
  });
  return (
    <>
      <mesh
        ref={meshRef}
        position={[position[0], position[1], position[2]]}
        rotation={[0, 10, 0]}
        onPointerMove={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerDown={handlePointerClick}
      >
        <RoundedBox args={[10, 15, 0.1]} radius={0.5}>
          <meshStandardMaterial color="#000000" />
        </RoundedBox>
        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          color="black"
          opacity={0}
        />
        <mesh position={[0, 0, 0.501]}>
          {" "}
          {/* 박스 바로 위에 올림 */}
          <planeGeometry args={[9, 14]} />
          <meshStandardMaterial
            map={texture}
            ref={materialRef}
            opacity={0}
            transparent
          />
        </mesh>
      </mesh>
      <Text
        ref={textRef}
        fontSize={2}
        position={[-10, titlePositionY, 20]}
        rotation={[0, 8.9, 0]}
        material-opacity={0}
        material-depthWrite={true}
      >
        {type.toLocaleUpperCase()}
      </Text>
      <Text
        ref={subTextRef}
        maxWidth={20}
        fontSize={1}
        position={[-10, 1, 20]}
        rotation={[0, 8.9, 0]}
        material-opacity={0}
        material-depthWrite={true}
      >
        {content}
      </Text>
    </>
  );
};

export default ShowcaseLeftContent;
