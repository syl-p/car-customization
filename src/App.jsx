import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Grid } from "@react-three/drei";
import Configurator from "./Configurator.jsx";
import { CustomizationProvider } from "./contexts/Customization.jsx";
import Experience from "./Experience.jsx";
import { Effects } from "./Effects.jsx";
import { Leva } from "leva";
import { Link, useRouter } from "wouter";
import Nav from "./Nav.jsx";
import { Header } from "./Header.jsx";

function App() {
  return <>
    <Header />
    <Nav />
    <CustomizationProvider>
      <Canvas shadows gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [6, 0, 5], fov: 25 }} style={{ backgroundColor: "#000000" }}>
        {/* <hemisphereLight intensity={1} /> */}
        <Leva hidden />
        <Experience />
        {/* <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} /> */}
        <Effects />
      </Canvas>
      <Configurator />
    </CustomizationProvider>
  </>
}

export default App
