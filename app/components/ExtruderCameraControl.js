'use client'
import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import extruderInfo from '../../db/extruder-model.json'

const ExtruderCameraControl = ({ activeStep }) => {
  const info = useState(extruderInfo)[0]
  const cameraRef = useRef()

  useEffect(() => {
    cameraRef.current.setLookAt(
      info[activeStep].position.x,
      info[activeStep].position.y,
      info[activeStep].position.z,
      info[activeStep].target.x,
      info[activeStep].target.y,
      info[activeStep].target.z
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
