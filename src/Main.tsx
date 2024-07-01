import { Scroll, ScrollControls } from "@react-three/drei";
import Images from "./components/Images";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Finally from "./components/Finally";

const Main = () => {

  return (
    <>
      <ambientLight position={[1, 1, 3]}  intensity={3}/>
      <directionalLight castShadow />
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
