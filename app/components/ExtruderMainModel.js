import * as THREE from 'three'
import { useFBX } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import extruderInfo from '../../db/extruder-model.json'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const ExtruderMainModel = ({ url, activeStep }) => {
  const fbx = useFBX(url)
  useFBX.preload(url)

  const info = useState(extruderInfo)[0]
  const mixer = new THREE.AnimationMixer(fbx)

  const playAnimation = () => {
    // 이전 애니메이션을 모두 정지
    mixer.stopAllAction()

    if (info[activeStep].animations.length) {
      // animations에 있는 애니메이션 실행
      info[activeStep].animations.forEach((animationName) => {
        const clip = fbx.animations.find((animationClip) =>
          animationClip.name.includes(animationName)
        )
        if (clip) {
          const action = mixer.clipAction(clip)
          action.loop = THREE.LoopRepeat // 반복 재생
          action.play()
        }
      })
    }

    if (info[activeStep].preAnimations.length) {
      // preAnimation에 있는 애니메이션을 종료 상태로 설정
      info[activeStep].preAnimations.forEach((animationName) => {
        const clip = fbx.animations.find((animationClip) =>
          animationClip.name.includes(animationName)
        )
        if (clip) {
          const action = mixer.clipAction(clip)
          action.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play()
          action.paused = true // 애니메이션을 일시 정지하여 종료 상태를 유지
        }
      })
    }
  }

  useEffect(() => {
    playAnimation()
  }, [activeStep])

  useFrame((state, delta) => {
    mixer.update(delta)
  })

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
