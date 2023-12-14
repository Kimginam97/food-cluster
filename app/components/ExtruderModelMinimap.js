import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useFBX } from '@react-three/drei'
import { AnimationMixer } from 'three'
import { useFrame } from '@react-three/fiber'

const FBXModelMinimap = ({ url }) => {
  const fbx = useFBX(url)
  useFBX.preload(url)

  return <primitive object={fbx} />
}

export default FBXModelMinimap
