'use client'

import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import ExtruderMainModel from './ExtruderMainModel'
import ExtruderCameraControl from './ExtruderCameraControl'

const ExtruderMainScene = ({ activeStep }) => {
  return (
    <Canvas
      className="left-0 top-[282px] absolute bg-stone-50 border border-stone-300"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      style={{ width: '1920px', height: '798px' }}
    >
      <directionalLight position={[50, 170, 370]} intensity={0.5} />
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
          url="/food-cluster/models/injection-molding.fbx"
          activeStep={activeStep}
        />
        <ExtruderCameraControl activeStep={activeStep} />
      </Selection>
    </Canvas>
  )
}

export default ExtruderMainScene
