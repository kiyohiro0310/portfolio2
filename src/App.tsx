import { Suspense, useEffect } from "react";
import Loading from "./components/Loading";
import Main from "./Main";
import { Canvas } from "@react-three/fiber";
import Hotjar from "@hotjar/browser";

function App() {
  const siteId = 3609741;
  const hotjarVersion = 6;
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);
  return (
    <section className="w-screen h-screen">
      <Suspense fallback={<Loading />}>
        <Canvas shadows>
          <Main />
        </Canvas>
        <script
          id="hotjarsection"
          dangerouslySetInnerHTML={{
            __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3609741,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </Suspense>
    </section>
  );
}

export default App;
