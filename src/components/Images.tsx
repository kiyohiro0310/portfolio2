import { Image, useGLTF, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Images = () => {
  const { height } = useThree((state) => state.viewport);
  const model = useGLTF("./model/pc/pc.gltf");
  const modelRef = useRef<any>(null);
  const scroll = useScroll();
  const groupRef = useRef<any>(null);

  useFrame(() => {
    modelRef.current!.position.x = 6 - scroll.range(0, 0.33) * 6.5
    modelRef.current!.position.y = -2 - scroll.range(0.02, 0.33) * 17.8
    modelRef.current!.position.z = -10 + scroll.range(0, 0.33) * 8
    modelRef.current!.rotation.y = -90 + scroll.range(0, 0.33)
    modelRef.current!.rotation.x = 44.5 - scroll.range(0, 0.33) * 0.5

  });

  return (
    <group ref={groupRef}>
      <mesh position={[6, -3, -10]} ref={modelRef} rotation={[44.5, -90, 0]} receiveShadow>
        <primitive object={model.scene} />
      </mesh>
      <Image
        url="./img/skmorters.png"
        scale={[1.3, 2.7]}
        position={[0.6, -height * 3.94, 3]}
        radius={0.1}
        zoom={1.03}
        transparent
      />
      <Image
        url="./img/pgx.png"
        scale={[1.4, 2.75]}
        position={[2.4, -height * 4.9, 2.4]}
        radius={0.1}
        zoom={1.05}
        transparent
      />
      <Image
        url="./img/fpw.png"
        scale={[1.4, 2.75]}
        position={[0.8, -height * 4.5, 1.8]}
        radius={0.1}
        zoom={1.05}
        transparent
      />
      <Image
        url="./img/chatbot.png"
        scale={[1.4, 2.75]}
        position={[2.4, -height * 4.3, 2.5]}
        radius={0.1}
        zoom={1.05}
        transparent
      />
      <Image
        url="./img/leaf.png"
        scale={1.5}
        position={[-3, -height * 6.12, 0]}
        radius={0.1}
        transparent
      />
    </group>
  );
};

export default Images;
