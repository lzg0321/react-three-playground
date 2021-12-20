export const setShadows = (scene) => {
  const skinnedMeshes = getSkinnedMeshes(scene)
  skinnedMeshes.forEach((mesh) => {
    // eslint-disable-next-line no-param-reassign
    mesh.castShadow = true
    // eslint-disable-next-line no-param-reassign
    mesh.receiveShadow = true
  })
}
const getSkinnedMeshes = (scene) => {

  let meshes = []

  scene.children.forEach((child) => {
    meshes = meshes.concat(recursiveMeshes(child))
  })

  return meshes
}

const recursiveMeshes = (child) => {
  let meshes = []

  if (child.type === 'SkinnedMesh' || child.type === 'Mesh') {
    meshes.push(child)
  } else {
    if (child.children) {
      child.children.forEach((subChild) => {
        meshes = meshes.concat(recursiveMeshes(subChild))
      })
    }
  }

  return meshes
}