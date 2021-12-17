import React, { Suspense, useEffect, useRef } from "react";
import {Canvas, useThree} from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, Plane, useTexture } from '@react-three/drei'
import Meebit from './Meebit'
import "./styles.css";

const { PI, sin, cos } = Math;

const Model = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model_bear/bear.glb')
  // const { nodes, materials } = useGLTF('/meebit_08617.glb')
  console.log('materials', materials)
  const texture = useTexture('/model_bear/Tex_Bear_A.png')
  const material = materials['Material.001']
  material.map = texture
  return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={nodes.hips} />
        <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.Bear.geometry}
            material={material}
            skeleton={nodes.Bear.skeleton}
        >
          <meshStandardMaterial map={texture} map-flipY={false} />
        </skinnedMesh>
      </group>
  )
}

const Pavement = () => {
  return (
    <>
      <Plane
        rotation-x={-PI * 0.5}
        // position={[0, -7.9, 0]}
        args={[200, 200]}
        receiveShadow
      >
        <meshBasicMaterial
          color={"#618145"}
          attach="material"
          transparent={true}
          // opacity={0.4}
        />
      </Plane>
    </>
  );
};

export default function App() {
  return (
    <Canvas colorManagement camera={{ fov: 30, position: [0, 10, 10] }}>
      <color attach="background" args={["#ebcfba"]} />
      <directionalLight position={[-40, 20, 20]} color="#c59cf1" />
      <directionalLight
        position={[10.5, 20, 10]}
        intensity={1.5}
        color="#e78f48"
      />
      <ambientLight intensity={0.95} />
      <Suspense fallback={null}>
        <Pavement />
        {/*<Meebit/>*/}
        <Model/>
        {/*<Magic*/}
        {/*  text={"WYF"}*/}
        {/*  start={Math.PI * 1.18}*/}
        {/*  count={11}*/}
        {/*  radius={25}*/}
        {/*/>*/}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
