import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useFBX } from '@react-three/drei'
import { AnimationMixer } from 'three'
import { useFrame } from '@react-three/fiber'

const FBXModel = ({ url }) => {
  const fbx = useFBX(url)
  useFBX.preload(url)
  const mixer = new THREE.AnimationMixer(fbx)
  const animationArray = [
    'Brep.782|Brep.782Action.001',
    'Brep.054|Brep.054Action',
    'Brep.056|Brep.056Action',
    'Brep.1219|Brep.1219Action',
    'Cylinder|CylinderAction.001',
  ]

  const playAnimation = (index) => {}

  const playNextAnimation = (index) => {
    if (index < animationArray.length) {
      const pattern = animationArray[index]
      const clip = fbx.animations.find((animationClip) =>
        animationClip.name.includes(pattern)
      )

      if (clip) {
        const action = mixer.clipAction(clip)

        // 애니메이션이 완료되면 다음 애니메이션 실행
        action.loop = THREE.LoopOnce // 한 번만 재생
        action.clampWhenFinished = true

        const checkCompletion = () => {
          if (!action.isRunning()) {
            console.log('애니메이션이 끝났습니다.')
            playNextAnimation(index + 1)
          } else {
            // 애니메이션 중이면 계속 체크
            requestAnimationFrame(checkCompletion)
          }
        }

        action.play()

        // 첫 프레임에서 애니메이션 완료 체크 시작
        checkCompletion()
      }
    }
  }

  useEffect(() => {
    playNextAnimation(0)

    return () => {
      mixer.stopAllAction()
    }
  }, [fbx.animations])

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return <primitive object={fbx} />
}

export default FBXModel
