import React, { Suspense, useEffect, useRef } from "react";
import {Canvas, useThree} from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, Plane, useTexture, useAnimations, Stage } from '@react-three/drei'
import Meebit from './Meebit'
import Fox from './Fox'
import Deer from './Deer'
import Boy from './Boy'
import Cat from './Cat'
import Charactar from './Charactar'
import "./styles.css";



export default function App() {
  const ref = useRef()
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 150], fov: 50 }}>
      <ambientLight intensity={0.25} />
      <Suspense fallback={null}>
        <Stage
            controls={ref}
            preset={'rembrandt'}
            intensity={0.75}
            contactShadow={true}
            shadows
            adjustCamera
            environment={'city'}>
           >
          <Fox position={[-4,0,0]}/>
          <Charactar position={[0,0,0]}></Charactar>
          <Boy position={[2,0,0]}></Boy>
          <Cat position={[4,0,0]}></Cat>
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate={false} />
    </Canvas>
  );
}
