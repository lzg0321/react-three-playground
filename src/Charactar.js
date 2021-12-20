import {useAnimations, useGLTF, useTexture, } from '@react-three/drei';
import { useGraph } from '@react-three/fiber'
import React, {useEffect, useMemo, useRef} from 'react';
import {MeshToonMaterial} from 'three';
import {SkeletonUtils} from 'three-stdlib';
import {setShadows} from './utils';
const characterScale = [0.75, 0.75, 0.75]
const rotation = [0, 0, 0]

export default function Model  (props)  {
  const group = useRef()
  const { materials,scene } = useGLTF('/model_bear/bear.glb')
  const { animations: walkActions} = useGLTF('/model_bear/walk.glb')
  const { animations: idleActions} = useGLTF('/model_bear/idle.glb')

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)

  const animations = useMemo(()=>{
    return [...walkActions, ...idleActions]
  }, [walkActions, idleActions])

  console.log('materials', materials)
  console.log('animations', walkActions, idleActions)
  const texture = useTexture('/model_bear/Tex_Bear_A.png')
  const material = materials['Material.001']
  material.map = texture
  material.map.flipY = false
  const { mixer, names, actions, clips } = useAnimations(animations, group)
  useEffect(() => {
    console.log('actions', actions)
    // actions['PolyAnim|PolyAnim|Idle_A|PolyAnim|Idle_A'].play()
    // actions['idle'].play()
    if ( actions[props.action ? props.action: 'idle' ]) {
      actions[props.action ? props.action: 'idle' ].play()
    }
  })
  return (
      <group ref={group} {...props} dispose={null}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
              geometry={nodes.Bear.geometry}
              material={materials['Material.001']}
              skeleton={nodes.Bear.skeleton}
          />
        </group>
      </group>
  )
}