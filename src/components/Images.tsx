import { Image, useGLTF, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Images = () => {
  const { height } = useThree((state) => state.viewport);
  const model = useGLTF("./model/pc/pc.gltf");
  const modelRef = useRef<any>(null);

  const hobby = useGLTF("./model/hobby/scene.gltf")
  const hobbyRef = useRef<any>(null);
  const scroll = useScroll();
  const groupRef = useRef<any>(null);

  useFrame(() => {
    modelRef.current!.position.x = 6 - scroll.range(0, 0.33) * 6.5
    modelRef.current!.position.y = -3 - scroll.range(0.00, 0.33) * 23.7
    modelRef.current!.position.z = -10 + scroll.range(0, 0.33) * 8.5
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
        position={[0.6, -height * 5.09, 3]}
        radius={0.1}
        zoom={1.03}
        transparent
      />
      <Image
        url="./img/pgx.png"
        scale={[1.4, 2.75]}
        position={[2.4, -height * 6.1, 2.4]}
        radius={0.1}
        zoom={1.05}
        transparent
      />
      <Image
        url="./img/fpw.png"
        scale={[1.4, 2.75]}
        position={[0.8, -height * 5.65, 1.8]}
        radius={0.1}
        zoom={1.05}
        transparent
      />
      <Image
        url="./img/chatbot.png"
        scale={[1.4, 2.75]}
        position={[2.4, -height * 5.45, 2.5]}
        radius={0.1}
        zoom={1.05}
        transparent
      />
      <Image
        url="./img/leaf.png"
        scale={1.5}
        position={[-3, -height * 9.62, 0]}
        radius={0.1}
        transparent
      />
      <mesh ref={hobbyRef} position={[-5, -60, -8]} rotation={[44.5, 134, 0]} receiveShadow>
        <primitive object={hobby.scene} />
      </mesh>
    </group>
  );
};

export default Images;
