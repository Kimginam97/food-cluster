'use client'
import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import petInfo from '../../db/pet-model.json'

const PetLineCameraControl = ({ activeStep }) => {
  const cameraRef = useRef()

  useEffect(() => {
    cameraRef.current.setLookAt(
      petInfo[activeStep].position.x,
      petInfo[activeStep].position.y,
      petInfo[activeStep].position.z,
      petInfo[activeStep].target.x,
      petInfo[activeStep].target.y,
      petInfo[activeStep].target.z
    )
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
