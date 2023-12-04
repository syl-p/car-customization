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
      <Canvas shadows
        gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]}
        camera={{ position: [6, 0, 5], fov: 25 }}
        style={{ backgroundColor: "#000000" }}>
        <color attach={"background"} args={["#ececec"]} />
        {/* <fog attach="fog" args={['#ececec', 15, 21.5]} /> */}
        <Leva hidden />
        <Experience />
        <Effects />
      </Canvas>
      <Configurator />
    </CustomizationProvider>
  </>
}

export default App
