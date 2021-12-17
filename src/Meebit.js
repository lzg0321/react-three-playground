import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/meebit_08617.glb')
  return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 0.09]}>
          <primitive object={nodes.HipsBone} />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_1.geometry}
              material={materials['meebit_08617_male_vrm #1']}
              skeleton={nodes.meebit_08617_male_vrm_1.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_2.geometry}
              material={materials['meebit_08617_male_vrm #2']}
              skeleton={nodes.meebit_08617_male_vrm_2.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_3.geometry}
              material={materials['meebit_08617_male_vrm #7']}
              skeleton={nodes.meebit_08617_male_vrm_3.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_4.geometry}
              material={materials['meebit_08617_male_vrm #5']}
              skeleton={nodes.meebit_08617_male_vrm_4.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_5.geometry}
              material={materials['meebit_08617_male_vrm #10']}
              skeleton={nodes.meebit_08617_male_vrm_5.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_6.geometry}
              material={materials['meebit_08617_male_vrm #9']}
              skeleton={nodes.meebit_08617_male_vrm_6.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_7.geometry}
              material={materials['meebit_08617_male_vrm #246']}
              skeleton={nodes.meebit_08617_male_vrm_7.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_8.geometry}
              material={materials['meebit_08617_male_vrm #254']}
              skeleton={nodes.meebit_08617_male_vrm_8.skeleton}
          />
          <skinnedMesh
              geometry={nodes.meebit_08617_male_vrm_9.geometry}
              material={materials['meebit_08617_male_vrm_addon_hair #8']}
              skeleton={nodes.meebit_08617_male_vrm_9.skeleton}
          />
        </group>
      </group>
  )
}