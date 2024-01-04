'use client'
import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import extruderInfo from '../../db/extruder-model.json'

const ExtruderCameraControl = ({ activeStep }) => {
  const cameraRef = useRef()

  useEffect(() => {
    cameraRef.current.setLookAt(
      extruderInfo[activeStep].position.x,
      extruderInfo[activeStep].position.y,
      extruderInfo[activeStep].position.z,
      extruderInfo[activeStep].target.x,
      extruderInfo[activeStep].target.y,
      extruderInfo[activeStep].target.z
    )
  }, [activeStep])

  return (
    <CameraControls
      ref={cameraRef}
      verticalDragToForward={true}
      dollySpeed={0.1}
      minPolarAngle={-Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
    />
  )
}

export default ExtruderCameraControl
