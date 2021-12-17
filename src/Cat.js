import React, {useEffect, useRef} from 'react';
import {useAnimations, useGLTF, useTexture} from '@react-three/drei';

export default function Model(props) {
  const group = useRef()
  // const { nodes, materials } = useGLTF('/cat/cat.glb')
  const { nodes, materials, animations } = useGLTF('/cat/cat_walk.glb')
  const texture = useTexture('/cat/Tex_Cat_C_Gent_A.png')
  const m = materials['Material.020']
  console.log('m', m)
  m.map = texture
  const { mixer, names, actions, clips } = useAnimations(animations, group)
  useEffect(()=>{
    console.log('actions', actions)
    // actions.walk.play()
  })
  return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={nodes.hips} />
        <skinnedMesh
            geometry={nodes.Cat_Hat_A.geometry}
            material={m}
            skeleton={nodes.Cat_Hat_A.skeleton}
        >
          <meshToonMaterial map={texture} map-flipY={false} />
        </skinnedMesh>
      </group>
  )
}

useGLTF.preload('/cat/cat.glb')
