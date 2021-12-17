import React, {useEffect, useRef} from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/boy/boy.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log('actions', actions)
    actions.au.play()
  })
  return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <primitive object={nodes.BoyHips} />
          <skinnedMesh
              geometry={nodes.Boy01_Head_Geo.geometry}
              material={materials['Boy01_Head_MAT.004']}
              skeleton={nodes.Boy01_Head_Geo.skeleton}
          />
          <skinnedMesh
              geometry={nodes.Boy01_Hands_Geo.geometry}
              material={materials['Boy01_Hands_MAT.004']}
              skeleton={nodes.Boy01_Hands_Geo.skeleton}
          />
          <skinnedMesh
              geometry={nodes.Boy01_Hair_Geo.geometry}
              material={materials['Boy01_Hair_MAT.004']}
              skeleton={nodes.Boy01_Hair_Geo.skeleton}
          />
          <skinnedMesh
              geometry={nodes.Boy01_LowerBody_Geo.geometry}
              material={materials['Boy01_LowerBody_MAT.004']}
              skeleton={nodes.Boy01_LowerBody_Geo.skeleton}
          />
          <skinnedMesh
              geometry={nodes.Boy01_UpperBody_Geo.geometry}
              material={materials['Boy01_UpperBody_MAT.004']}
              skeleton={nodes.Boy01_UpperBody_Geo.skeleton}
          />
          <skinnedMesh
              geometry={nodes.Boy01_Shoes_Geo.geometry}
              material={materials['Boy01_Shoes_MAT.004']}
              skeleton={nodes.Boy01_Shoes_Geo.skeleton}
          />
          <skinnedMesh
              geometry={nodes.Boy01_Scarf_Geo.geometry}
              material={materials['Boy01_Scarf_MAT.004']}
              skeleton={nodes.Boy01_Scarf_Geo.skeleton}
          />
        </group>
      </group>
  )
}

useGLTF.preload('/boy.gltf')