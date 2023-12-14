import * as THREE from 'three'
import {
  Bounds,
  CameraControls,
  Clone,
  PerspectiveCamera,
  View,
  useFBX,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import React from 'react'
import { Suspense } from 'react'
import useRefs from 'react-use-refs'

const ExtruderSystemScene = () => {
  const [ref, view1, view2] = useRefs()

  const fbx = useFBX('/models/injection-molding.fbx')

  return (
    <div
      ref={ref}
      className="left-0 top-[282px] absolute bg-stone-50 border border-stone-300"
    >
      <div className="absolute w-full h-full" ref={view1} />
      <div
        className="absolute top-[452px] right-[123px] w-[calc(350px-2em)] h-[calc(250px-2em)]"
        ref={view2}
      />
      <Canvas
        eventSource={ref}
        className="pointer-events-none"
        style={{ width: '1920px', height: '798px' }} // 스타일 지정
      >
        <View index={1} track={view1}>
          <color attach="background" args={['#f0f0f0']} />
          <directionalLight position={[50, 170, 370]} intensity={0.5} />
          <PerspectiveCamera
            fov={75} // 시야각
            near={1} // 가까운 클리핑 평면
            far={1000} // 먼 클리핑 평면
            position={[50, 170, 370]}
            makeDefault
          />
          <Bounds fit clip observe margin={1.5}>
            <Clone primitive object={fbx} />
          </Bounds>
          <CameraControls
            verticalDragToForward={true}
            dollySpeed={0.1}
            minPolarAngle={-Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </View>

        <View index={2} track={view2} controls={null}>
          <color attach="background" args={['white']} />
          <directionalLight position={[50, 170, 370]} intensity={0.5} />
          <PerspectiveCamera
            fov={75} // 시야각
            near={100} // 가까운 클리핑 평면
            far={1000} // 먼 클리핑 평면
            position={[80, 150, 350]}
            makeDefault
            onUpdate={(self) => {
              // 변경할 타겟 좌표
              const targetPosition = new THREE.Vector3(-100, 50, -10)
              self.lookAt(targetPosition)
            }}
          />
          <Clone primitive object={fbx} />
        </View>
      </Canvas>
    </div>
  )
}
useFBX.preload('/models/injection-molding.fbx')
export default ExtruderSystemScene
