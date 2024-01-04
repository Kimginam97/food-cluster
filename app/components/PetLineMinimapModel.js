import { useFBX } from '@react-three/drei'

const PetLineMinimapModel = ({ url, activeStep }) => {
  const fbx = useFBX(url)
  useFBX.preload(url)
  return (
    <>
      <primitive object={fbx} />
    </>
  )
}

export default PetLineMinimapModel
