'use client'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useFBX, CameraControls } from '@react-three/drei'
import ExtruderModel from './ExtruderModel'

const ViewScene = ({ url }) => {
  return (
    <Canvas
      className="left-0 top-[282px] absolute bg-stone-50 border border-stone-300"
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

      <ExtruderModel url={url} />

      <CameraControls
        verticalDragToForward={true}
        dollySpeed={0.1}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default ViewScene
