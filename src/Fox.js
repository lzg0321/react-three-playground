import React, { useRef, useEffect, useMemo} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei';

import {SkeletonUtils} from "three-stdlib";
import {setShadows} from './utils';
const characterScale = [0.75, 0.75, 0.75]
const rotation = [0, 0, 0]
export default function Model(props) {
  const groupRef = useRef(null)
  const { scene } = useGLTF('/fox/ArcticFox_LOD3.gltf')
  const { animations } = useGLTF('/fox/ArcticFox_Walk.gltf')
  const { mixer, names, actions, clips } = useAnimations(animations, groupRef)
  useEffect(() => {
    console.log('actions', actions)
    actions.Walk.play()
  })

  const cloned = useMemo(() => {
    const clonedScene = SkeletonUtils.clone(scene)
    setShadows(clonedScene)
    console.log('clonedScene', clonedScene)
    return clonedScene
  }, [scene])

  return   <primitive scale={characterScale} object={cloned} dispose={null} rotation={rotation} ref={groupRef}/>
  // return (
  //     <group {...props} dispose={null}>
  //       <primitive object={nodes.root} />
  //       <skinnedMesh
  //           castShadow receiveShadow material-envMapIntensity={0.8}
  //           geometry={nodes.ArcticFox.geometry}
  //           material={materials.Mat_ArcticFox}
  //           skeleton={nodes.ArcticFox.skeleton}
  //       />
  //     </group>
  // )
}

useGLTF.preload('/fox/ArcticFox_LOD3.gltf')