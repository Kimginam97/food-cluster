import * as THREE from 'three'
import { useFBX } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import extruderInfo from '../../db/extruder-model.json'
import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const ExtruderMainModel = ({ url, activeStep }) => {
  const fbx = useFBX(url)
  useFBX.preload(url)

  const info = useState(extruderInfo)[0]
  const mixer = new THREE.AnimationMixer(fbx)

  const getObjectByChildName = (childName) => {
    const index = fbx.children.findIndex((v) => v.name === childName)
    return index !== -1 ? fbx.children[index] : null
  }

  const playAnimation = () => {
    // 이전 애니메이션을 모두 정지
    mixer.stopAllAction()

    // 애니메이션 시간지정 함수
    const playAnimationWithStopTime = (clip, stopAtTime) => {
      const action = mixer.clipAction(clip)
      action.reset().play()
      action.time = stopAtTime
      action.paused = true
    }

    // 현재 실행할 애니메이션은 반복재생
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

    // 시작하는 시간에 지정해서 멈춰야될 애니메이션
    info[activeStep].startTimeAnimations.forEach((animationName) => {
      const clip = fbx.animations.find((animationClip) =>
        animationClip.name.includes(animationName)
      )
      if (clip) {
        switch (clip.name) {
          case 'Brep.1219|Brep.1219Action':
            playAnimationWithStopTime(clip, 0)
            break
          default:
            // Handle other animations
            playAnimationWithStopTime(clip, 0)
            break
        }
      }
    })

    // 끝나는 시간에 지정해서 멈춰야될 애니메이션
    info[activeStep].endTimeAnimations.forEach((animationName) => {
      const clip = fbx.animations.find((animationClip) =>
        animationClip.name.includes(animationName)
      )
      if (clip) {
        switch (clip.name) {
          case 'Brep.782|Brep.782Action.001':
            playAnimationWithStopTime(clip, 4.9)
            break
          case 'Brep.054|Brep.054Action':
          case 'Brep.056|Brep.056Action':
            playAnimationWithStopTime(clip, 3.7)
            break
          case 'Brep.1219|Brep.1219Action':
            playAnimationWithStopTime(clip, 1.2)
            break
          default:
            // Handle other animations
            playAnimationWithStopTime(clip, 0)
            break
        }
      }
    })
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
        <primitive object={getObjectByChildName('Brep038')} />
        <primitive object={getObjectByChildName('Brep009')} />
        <primitive object={getObjectByChildName('Brep010')} />
      </Select>
      {/* 2번 호퍼 */}
      <Select enabled={activeStep === 2}>
        <primitive object={getObjectByChildName('Brep782')} />
      </Select>
      {/* 3번 스크류 */}
      <Select enabled={activeStep === 3}>
        <primitive object={getObjectByChildName('Brep1383')} />
        <primitive object={getObjectByChildName('Brep065')} />
        <primitive object={getObjectByChildName('Brep066')} />
      </Select>
      {/* 4번 성형다이 */}
      <Select enabled={activeStep === 4}>
        <primitive object={getObjectByChildName('Brep056')} />
        <primitive object={getObjectByChildName('Brep054')} />
      </Select>
      {/* 5번 냉각다이 */}
      <Select enabled={activeStep === 5}>
        <primitive object={getObjectByChildName('Brep1219')} />
      </Select>
    </>
  )
}

export default ExtruderMainModel
