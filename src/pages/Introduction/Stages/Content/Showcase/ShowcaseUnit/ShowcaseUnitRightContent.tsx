// 사용되지 않음

//import { ShowcaseUnitArgs } from "@/types/components/pages/introduction/Content/Showcase.type";

//function RightContent({ position }: ShowcaseUnitArgs) {}
//     const meshRef = useRef<Three.Mesh>(null!);

//     const materialRef = useRef<Three.Material>(null!);
//     const texture = useLoader(Three.TextureLoader, "/images/sample_image.png");

//     const scroll = useScroll();

//     useFrame(() => {
//       materialRef.current.transparent = true;

//       if (meshRef.current) {
//         meshRef.current.visible = true;

//         if (materialRef.current.opacity < 1) materialRef.current.opacity += 0.01;
//         meshRef.current.position.z =
//           position[2] - scroll.offset * scroll.pages * 8;
//       }
//     });

//   return (
//     <>
//       <mesh
//         ref={meshRef}
//         position={[position[0], position[1], position[2]]}
//         rotation={[0, -10, 0]}
//       >
//         <boxGeometry args={[10, 15, 0.1]} />
//         <meshStandardMaterial
//           ref={materialRef}
//           map={texture}
//           color="white"
//           opacity={0}
//         />
//       </mesh>
//     </>
//   );
// }
