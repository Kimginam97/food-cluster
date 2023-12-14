'use client'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useFBX, CameraControls } from '@react-three/drei'
import ExtruderModelMinimap from './ExtruderModelMinimap'

const MiniScene = ({ url }) => {
  return (
    <Canvas
      className=" bg-white"
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

      <ExtruderModelMinimap url={url} />

      <CameraControls enabled={false} />
    </Canvas>
  )
}

export default MiniScene
