'use client'

import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import PetLineCameraControl from './PetLineCameraControl'
import PetLineMainModel from './PetLineMainModel'

const PetLineMainScene = ({ activeStep }) => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      style={{ width: '100%', height: '100%' }}
    >
      <directionalLight position={[5, 10, 7.5]} intensity={0.7} />
      <directionalLight position={[6.7, 10, 1935]} intensity={0.7} />
      <directionalLight position={[-65, 10, -688]} intensity={0.7} />
      <directionalLight position={[-843, 86, 655]} intensity={0.7} />
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
        <PetLineMainModel
          url="/food-cluster/models/PETLINE.fbx"
          activeStep={activeStep}
        />
      </Selection>

      <PetLineCameraControl activeStep={activeStep} />
    </Canvas>
  )
}

export default PetLineMainScene
