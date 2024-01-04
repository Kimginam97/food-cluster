'use client'
import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import petInfo from '../../db/pet-model.json'

const PetLineCameraControl = ({ activeStep }) => {
  const info = useState(petInfo)[0]
  const cameraRef = useRef()

  useEffect(() => {
    cameraRef.current.setPosition(
      info[activeStep].position.x,
      info[activeStep].position.y,
      info[activeStep].position.z
    )
    cameraRef.current.setTarget(
      info[activeStep].target.x,
      info[activeStep].target.y,
      info[activeStep].target.z
    )
    cameraRef.current._camera.fov = 150
    cameraRef.current._camera.near = 0.1
    cameraRef.current._camera.far = 1000
  }, [activeStep])

  return (
    <>
      <CameraControls
        ref={cameraRef}
        verticalDragToForward={true}
        dollySpeed={0.1}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}

export default PetLineCameraControl
