import { useFBX, useGLTF } from '@react-three/drei'
import React from 'react'

const ExtruderTestModel = () => {
  // const gltf = useGLTF('/food-cluster/models/EXTRUDER.glb')
  const fbx = useFBX('/food-cluster/models/EXTRUDER.fbx')
  return <primitive object={fbx} />
}

export default ExtruderTestModel
