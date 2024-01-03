import { useFBX } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'

const ExtruderMinimapModel = ({ url, activeStep }) => {
  const fbx = useFBX(url)

  const getObjectByChildName = (childName) => {
    const index = fbx.children.findIndex((v) => v.name === childName)
    return index !== -1 ? fbx.children[index] : null
  }

  return (
    <>
      <primitive object={fbx} />
      {/* 2번 호퍼 */}
      <Select enabled={activeStep === 2}>
        <primitive object={getObjectByChildName('Brep834')} />
      </Select>
      {/* 3번 스크류 */}
      <Select enabled={activeStep === 3}>
        <primitive object={getObjectByChildName('Brep1383')} />
      </Select>
      {/* 4번 성형다이 */}
      <Select enabled={activeStep === 4}>
        <primitive object={getObjectByChildName('Brep1385')} />
        <primitive object={getObjectByChildName('Brep066')} />
        <primitive object={getObjectByChildName('Brep1391')} />
      </Select>
      {/* 5번 냉각다이 */}
    </>
  )
}

export default ExtruderMinimapModel
