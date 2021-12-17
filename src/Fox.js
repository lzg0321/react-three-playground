import React, { useRef, useEffect } from 'react'
import {useAnimations, useGLTF} from '@react-three/drei';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/fox/ArcticFox_LOD3.gltf')
  const { animations } = useGLTF('/fox/ArcticFox_Walk.gltf')
  const { mixer, names, actions, clips } = useAnimations(animations, group)
  useEffect(() => {
    console.log('actions', actions)
    actions.Walk.play()
  })
  return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={nodes.root} />
        <skinnedMesh
            geometry={nodes.ArcticFox.geometry}
            material={materials.Mat_ArcticFox}
            skeleton={nodes.ArcticFox.skeleton}
        />
      </group>
  )
}