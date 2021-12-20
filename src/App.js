import React, { Suspense, useEffect, useRef } from "react";
import {Canvas, useThree} from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, Plane, useTexture, useAnimations, Stage, BakeShadows } from '@react-three/drei'
// import Meebit from './Meebit'
import Fox from './Fox'
import Shoe from './Shoe'
// import Deer from './Deer'
// import Boy from './Boy'
// import Cat from './Cat'
import Charactar from './Charactar'
import "./styles.css";




export default function App() {
  return (
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <group position={[-2, 0, 0]} >
              <Fox action={'walk'}/>
            </group>
            <group position={[-1, 0, 0]} >
              <Charactar action={'walk'}/>
            </group>
            <group position={[0, 0, 0]} >
              <Charactar action={'idle'}/>
            </group>
            <group position={[1, 0, 0]} >
              <Charactar action={'walk'}/>
            </group>
            <group position={[2, 0, 0]} >
              <Charactar action={'idle'}/>
            </group>
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate={false} />
      </Canvas>
  )
}
useGLTF.preload('/model_bear/bear.glb')
useGLTF.preload('/model_bear/walk.glb')
useGLTF.preload('/model_bear/idle.glb')