import { Environment, OrbitControls, useFBX } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import React from 'react'
import { Suspense } from 'react'

const ExtruderSystemScene = () => {
  const fbx = useFBX('/models/injection-molding.fbx')

  return (
    <>
      <Canvas
        style={{ width: '1920px', height: '798px' }} // 스타일 지정
        className="left-0 top-[282px] absolute bg-stone-50 border border-stone-300"
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        camera={{ position: [50, 170, 370] }}
        frameloop="demand"
      >
        <Suspense>
          {/* <Environment preset="city" /> */}
          <directionalLight position={[50, 170, 370]} intensity={0.5} />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor="red"
                edgeStrength={10000}
                width={800}
                xRay={false}
              />
            </EffectComposer>
            <primitive object={fbx} />
          </Selection>
          <OrbitControls />
          <Perf position="bottom-right" />
        </Suspense>
      </Canvas>
    </>
  )
}
useFBX.preload('/models/injection-molding.fbx')
export default ExtruderSystemScene
