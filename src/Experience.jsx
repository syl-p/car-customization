import {  AccumulativeShadows, Bounds, Box, ContactShadows, Environment, Float, Grid, Lightformer, OrbitControls, RandomizedLight, useBounds } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { McLaren } from "./McLaren";
import Hud from "./Hud";
import { useEffect } from "react";
import { useCustomization } from "./contexts/Customization";
import { useLocation } from "wouter";
import * as THREE from "three"
import * as TWEEN from "@tweenjs/tween.js"
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { Color, Depth, LayerMaterial } from "lamina";


const Rig = () => {
  const bounds = useBounds()
  const [location] = useLocation()
  const {tirePosition, colorPosition, topPosition, boardPosition} = useCustomization()
 
  useEffect(() => {
    switch (location) {
      case "/exterior":
        bounds.to({position: [6, 0, 5], target: colorPosition})
        break;  
      case "/exterior/materials":
        bounds.to({position: [0, 2, 6], target: topPosition})
        break;    
      case "/exterior/wheels":
        bounds.to({position: [1, 0, 5], target: tirePosition})
        break;
      case "/interior":
        bounds.to({position: [-0., 1.3, -0.65], target: boardPosition})
        break;
      default:
        bounds.to({position: [6, 0, 5], target: colorPosition})
        break;
    }
  }, [bounds, location, tirePosition, colorPosition])
}

export default function Experience() {
  const {mainColor, mainColorsPalette} = useCustomization()
  const {scene} = useThree()

  useEffect(() => {    
    console.log(scene);
    const newColor = new THREE.Color(mainColorsPalette[mainColor].color)
    console.log('change color', scene.background, 'to', newColor)
    gsap.to(scene.background, {...newColor, duration: 1})
  }, [mainColor])


  return <>

    <Bounds fit clip observe damping={20} margin={0.8}>
      <McLaren scale={1.6} position={[0, -0.18, 0]} rotation={[0, -Math.PI / 5, 0]} />
      <Rig />
      <Hud />
    </Bounds>
    <hemisphereLight intensity={0.5} />
    <ContactShadows position={[0, -0.20, 0]} renderOrder={2} frames={1} resolution={1024} scale={12} blur={2} opacity={0.5} far={100} />
    {/* <Grid renderOrder={-1} position={[0, -0.22, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} /> */}
    {/* <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} /> */}
    

    <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
      <ringGeometry args={[0.9, 1, 4, 1]} />
      <meshStandardMaterial color="white" roughness={0.75} />
    </mesh>
    <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
      <ringGeometry args={[0.9, 1, 3, 1]} />
      <meshStandardMaterial color="white" roughness={0.75} />
    </mesh>

    <Environment resolution={512}>
      {/* Ceiling */}
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
      {/* Sides */}
      <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
      <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
      {/* Key */}
      <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
    </Environment>
    <OrbitControls autoRotate autoRotateSpeed={false} enableZoom={false} enableRotate={false} makeDefault  maxPolarAngle={Math.PI / 2} />
  </>
}