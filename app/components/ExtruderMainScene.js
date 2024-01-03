'use client'

import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import ExtruderMainModel from './ExtruderMainModel'
import ExtruderCameraControl from './ExtruderCameraControl'

const ExtruderMainScene = ({ activeStep }) => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      style={{ width: '100%', height: '100%' }}
    >
      <directionalLight position={[233, 77, 21]} intensity={0.7} />
      <directionalLight position={[255, 87, 93]} intensity={0.7} />
      <directionalLight position={[-195, 192, -135]} intensity={0.7} />
      <directionalLight position={[-14, 113, 57]} intensity={1} />
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
          url="/food-cluster/models/Extruder_test.fbx"
          activeStep={activeStep}
        />
      </Selection>
      <ExtruderCameraControl activeStep={activeStep} />
    </Canvas>
  )
}

export default ExtruderMainScene
