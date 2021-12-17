import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/deer/deer.glb')
  return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={nodes.hips} />
        <skinnedMesh
            geometry={nodes.Deer_A.geometry}
            material={materials['Material.066']}
            skeleton={nodes.Deer_A.skeleton}
        />
      </group>
  )
}

useGLTF.preload('/deer/deer.glb')