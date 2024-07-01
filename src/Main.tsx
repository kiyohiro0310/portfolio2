import { Scroll, ScrollControls } from "@react-three/drei";
import Images from "./components/Images";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Finally from "./components/Finally";

const Main = () => {

  return (
    <>
      <ambientLight />
      <directionalLight position={[1, 0.5, 0.5]} castShadow/>
      <ScrollControls pages={7.2}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <Hero />
          <AboutMe />
          <Experience />
          <Finally />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Main;
