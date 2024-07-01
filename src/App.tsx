import { Suspense } from "react";
import Loading from "./components/Loading";
import Main from "./Main";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <section className="w-screen h-screen">
      <Suspense fallback={<Loading />}>
        <Canvas shadows>
          <Main />
        </Canvas>
      </Suspense>
    </section>
  );
}

export default App;
