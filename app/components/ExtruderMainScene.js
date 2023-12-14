'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useFBX, CameraControls } from '@react-three/drei'

import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import extruderInfo from '../../db/extruder-model.json'
import { useState } from 'react'
import ExtruderMainModel from './ExtruderMainModel'

const ExtruderMainScene = ({ url, activeStep }) => {
  const info = useState(extruderInfo)[0]

  return (
    <Canvas
      className="left-0 top-[282px] absolute bg-stone-50 border border-stone-300"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      frameloop="demand"
      style={{ width: '1920px', height: '798px' }} // 스타일 지정
    >
      <directionalLight position={[50, 170, 370]} intensity={0.5} />
      <PerspectiveCamera
        fov={75} // 시야각
        near={1} // 가까운 클리핑 평면
        far={1000} // 먼 클리핑 평면
        position={[50, 170, 370]}
        makeDefault
      />
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
        <ExtruderMainModel url={url} activeStep={activeStep} info={info} />
      </Selection>
      <CameraControls
        verticalDragToForward={true}
        dollySpeed={0.1}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default ExtruderMainScene
