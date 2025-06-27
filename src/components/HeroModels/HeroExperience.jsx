import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1439px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let scale = 1;
  let position = [0, -3.5, 0];

  if (isMobile) {
    scale = 0.6;
    position = [0, -5, 0];
  } else if (isTablet) {
    scale = 0.75;
    position = [0, -3.5, 0];
  } else if (isLaptop) {
    scale = 0.9;
    position = [0, -3.5, 0];
  } else if (isDesktop) {
    scale = 1;
    position = [0, -3.5, 0];
  }

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <Particles count={100} />
      <group scale={scale} position={position} rotation={[0, -Math.PI / 4, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
