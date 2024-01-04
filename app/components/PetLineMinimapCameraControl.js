'use client'
import { CameraControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const PetLineMinimapCameraControl = ({}) => {
  const cameraRef = useRef()

  useEffect(() => {
    cameraRef.current.setPosition(400, 900, 700)
    cameraRef.current.setTarget(0, 100, 700)
    cameraRef.current._camera.fov = 150
    cameraRef.current._camera.near = 0.1
    cameraRef.current._camera.far = 1000
    // Disable right mouse button interaction
    cameraRef.current.enabled = false

    // Update controls
    cameraRef.current.update()
  })

  return (
    <>
      <CameraControls ref={cameraRef} />
    </>
  )
}

export default PetLineMinimapCameraControl
