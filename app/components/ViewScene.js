'use client'
import { Canvas } from '@react-three/fiber'
import {
  Clone,
  View,
  PerspectiveCamera,
  OrbitControls,
  Bounds,
  useGLTF,
  ContactShadows,
  TransformControls,
} from '@react-three/drei'
import useRefs from 'react-use-refs'
import { useState } from 'react'

const ViewScene = () => {
  const [ref, view1, view2] = useRefs()

  const main = useGLTF('/models/Factory2.glb')

  return (
    <div ref={ref} className="container">
      <div className="view1" ref={view1} />
      <div className="view2" ref={view2} />
      <Canvas eventSource={ref} className="Canvas">
        <View index={1} track={view1}>
          <color attach="background" args={['#f0f0f0']} />
          <PerspectiveCamera makeDefault position={[-2.5, 10, 5]} fov={35} />
          <Lights />
          <Bounds fit clip observe margin={1.5}>
            <Target props={main} />
          </Bounds>
          <ContactShadows
            frames={1}
            position={[0, -1, 0]}
            blur={1}
            opacity={0.6}
          />
          <OrbitControls makeDefault />
        </View>
        <View index={2} track={view2}>
          <color attach="background" args={['green']} />
          <PerspectiveCamera makeDefault position={[-2.5, 10, 5]} fov={35} />
          <Lights />
          <OrbitControls makeDefault />
          <TransformControls>
            <Target props={main} />
            <ContactShadows
              frames={1}
              position={[0, -1, 0]}
              blur={1}
              opacity={0.6}
            />
          </TransformControls>
        </View>
      </Canvas>
    </div>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="blue" />
    </>
  )
}

function Target(props) {
  const [hovered, hover] = useState(false)

  return (
    <group position={[0, -1, 0]} {...props} dispose={null}>
      <group
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <Clone primitive object={props.props.scene} />
      </group>
    </group>
  )
}

export default ViewScene
