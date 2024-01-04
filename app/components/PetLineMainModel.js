import { useFBX } from '@react-three/drei'

const PetLineMainModel = ({ url, activeStep }) => {
  const fbx = useFBX(url)
  return (
    <>
      <primitive object={fbx} />
    </>
  )
}

export default PetLineMainModel
