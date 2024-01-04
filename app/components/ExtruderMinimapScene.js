'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, CameraControls } from '@react-three/drei'

import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import ExtruderMinimapModel from './ExtruderMinimapModel'
import { Suspense } from 'react'
import Loader from './Loader'

const ExtruderMinimapScene = ({ activeStep }) => {
  return (
    <Canvas
      className=" bg-white"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      frameloop="demand"
      style={{
        width: '336px',
        height: '195px',
        position: 'absolute',
        bottom: '15%',
        right: '14%',
      }} // 스타일 지정
    >
      <Suspense fallback={<Loader />}>
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
              visibleEdgeColor="red"
              edgeStrength={1000}
              width={800}
              xRay={false}
            />
          </EffectComposer>

          <ExtruderMinimapModel
            url="/food-cluster/models/Extruder_test_mini.fbx"
            activeStep={activeStep}
          />
        </Selection>

        <CameraControls enabled={false} />
      </Suspense>
    </Canvas>
  )
}

export default ExtruderMinimapScene
