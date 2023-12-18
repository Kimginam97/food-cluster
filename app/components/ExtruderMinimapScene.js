'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, CameraControls } from '@react-three/drei'

import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import ExtruderMinimapModel from './ExtruderMinimapModel'

const ExtruderMinimapScene = ({ url, activeStep }) => {
  return (
    <Canvas
      className=" bg-white"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      frameloop="demand"
      style={{
        width: '336px',
        height: '195px',
        position: 'absolute',
        left: '1461px',
      }} // 스타일 지정
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
            visibleEdgeColor="red"
            edgeStrength={1000}
            width={800}
            xRay={false}
          />
        </EffectComposer>
        <ExtruderMinimapModel url={url} activeStep={activeStep} />
      </Selection>

      <CameraControls enabled={false} />
    </Canvas>
  )
}

export default ExtruderMinimapScene
