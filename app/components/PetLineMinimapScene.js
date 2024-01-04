'use client'

import { Canvas } from '@react-three/fiber'

import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import PetLineMinimapCameraControl from './PetLineMinimapCameraControl'
import PetLineMinimapModel from './PetLineMinimapModel'
import { Suspense } from 'react'
import Loader from './Loader'

const PetLineMinimapScene = ({}) => {
  return (
    <Canvas
      className=" bg-white"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      frameloop="demand"
      style={{
        width: '350px',
        height: '195px',
        position: 'absolute',
        bottom: '15%',
        right: '14%',
      }} // 스타일 지정
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[5, 10, 7.5]} intensity={0.7} />
        <directionalLight position={[6.7, 10, 1935]} intensity={0.7} />
        <directionalLight position={[-65, 10, -688]} intensity={0.7} />
        <directionalLight position={[-843, 86, 655]} intensity={0.7} />
        <Selection>
          <EffectComposer multisampling={1} autoClear={false}>
            <Outline
              blur
              visibleEdgeColor="red"
              edgeStrength={1000}
              width={800}
              xRay={false}
            />
          </EffectComposer>

          <PetLineMinimapModel url="/food-cluster/models/PETLINE_mini.fbx" />
        </Selection>
        <PetLineMinimapCameraControl />
      </Suspense>
    </Canvas>
  )
}

export default PetLineMinimapScene
