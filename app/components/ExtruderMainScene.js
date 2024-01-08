'use client'

import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import ExtruderMainModel from './ExtruderMainModel'
import ExtruderCameraControl from './ExtruderCameraControl'
import { Suspense } from 'react'
import Loader from './Loader'
import { Environment } from '@react-three/drei'

const ExtruderMainScene = ({ activeStep }) => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      style={{ width: '100%', height: '80vh' }}
    >
      <Suspense fallback={<Loader />}>
        <Environment preset="city" />
        <Selection>
          <EffectComposer multisampling={1} autoClear={false}>
            <Outline
              blur
              visibleEdgeColor="rgb(255, 51, 51)"
              edgeStrength={10}
              width={1000}
              xRay={false}
            />
          </EffectComposer>

          <ExtruderMainModel
            url="/food-cluster/models/Extruder.glb"
            activeStep={activeStep}
          />
        </Selection>
        <ExtruderCameraControl activeStep={activeStep} />
      </Suspense>
    </Canvas>
  )
}

export default ExtruderMainScene
