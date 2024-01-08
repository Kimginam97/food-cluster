import { useAnimations, useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { useEffect } from 'react'

const ExtruderMainModel = ({ url, activeStep }) => {
  const { nodes, animations } = useGLTF(url)
  useGLTF.preload(url)

  const { ref, actions } = useAnimations(animations)

  useEffect(() => {
    for (let key in actions) {
      actions[key].play()
    }
  }, [actions])

  return (
    <>
      <group ref={ref}>
        <primitive object={nodes.Scene} />
        {/* 1번 조작패널 */}
        <Select enabled={activeStep === 1}>
          <primitive object={nodes['Brep038']} />
        </Select>
        {/* 2번 호퍼 */}
        <Select enabled={activeStep === 2}>
          <primitive object={nodes['Brep782']} />
          <primitive object={nodes['Brep788']} />
          <primitive object={nodes['Brep834']} />
        </Select>
        {/* 3번 스크류 */}
        <Select enabled={activeStep === 3}>
          <primitive object={nodes['Brep1383']} />
        </Select>
        {/* 4번 성형다이 */}
        <Select enabled={activeStep === 4}>
          <primitive object={nodes['Brep054']} />
          <primitive object={nodes['Brep056']} />
        </Select>
        {/* 5번 냉각다이 */}
        <Select enabled={activeStep === 5}>
          <primitive object={nodes['Brep1219']} />
          <primitive object={nodes['Brep015']} />
          <primitive object={nodes['Brep030']} />
          <primitive object={nodes['Brep036']} />
          <primitive object={nodes['Brep037']} />
          <primitive object={nodes['Brep039']} />
        </Select>
      </group>
    </>
  )
}

export default ExtruderMainModel
