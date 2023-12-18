import { useFBX } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'

const ExtruderMainModel = ({ url, activeStep }) => {
  const fbx = useFBX(url)
  useFBX.preload(url)

  return (
    <>
      <primitive object={fbx} />
      {/* 1번 컨트롤 패널 */}
      <Select enabled={activeStep === 1}>
        <primitive object={fbx.children[425]} />
      </Select>
      {/* 2번 호퍼 */}
      <Select enabled={activeStep === 2}>
        <primitive object={fbx.children[754]} />
      </Select>
      {/* 3번 스크류 */}
      <Select enabled={activeStep === 3}>
        <primitive object={fbx.children[655]} />
      </Select>
      {/* 4번 성형다이 */}
      <Select enabled={activeStep === 4}>
        <primitive object={fbx.children[1137]} />
      </Select>
      {/* 5번 냉각다이 */}
      <Select enabled={activeStep === 5}>
        <primitive object={fbx.children[797]} />
      </Select>
    </>
  )
}

export default ExtruderMainModel
