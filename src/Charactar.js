import {useAnimations, useGLTF, useTexture} from '@react-three/drei';
import React, {useEffect, useRef} from 'react';
import {MeshToonMaterial} from 'three';

export default function Model  (props)  {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model_bear/bear.glb')
  const { animations} = useGLTF('/model_bear/walk.glb')
  console.log('materials', materials)
  console.log('animations', animations)
  const texture = useTexture('/model_bear/Tex_Bear_A.png')
  const material = materials['Material.001']
  // material.map = texture
  const { mixer, names, actions, clips } = useAnimations(animations, group)
  useEffect(() => {
    console.log('actions', actions)
    // actions['PolyAnim|PolyAnim|Idle_A|PolyAnim|Idle_A'].play()
    // actions['PolyAnim|PolyAnim|Walk_Backwards|PolyAnim|Walk_Backwards'].play()
  })
  return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={nodes.hips} />
        <skinnedMesh
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Bear.geometry}
            skeleton={nodes.Bear.skeleton}
        >
          <meshToonMaterial map={texture} map-flipY={false} />
        </skinnedMesh>
      </group>
  )
}
useGLTF.preload('/model_bear/bear.glb')
useGLTF.preload('/model_bear/idle.glb')