import * as Three from 'three';
import { useFrame } from "@react-three/fiber";

export default function ShowcaseBackground(){
    useFrame((state)=>{
       state.scene.background = new Three.Color('#000000')
    })
    return null;
}