'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './extruder.module.css'
import { useState } from 'react'
import ExtruderMainScene from '../components/ExtruderMainScene'
import ExtruderMinimapScene from '../components/ExtruderMinimapScene'

const InfoContent = ({ activeStep }) => {
  const contents = [
    '분말형 원료를 일정시간 가열-압축-혼합-용융-성형되도록 가공하는 압출성형기입니다.',
    '냉각펌프팬, 급수펌프, 오일펌프, 익스트루트 등 압출과정을 위한 운전을 설정합니다.',
    '장비 초기 세팅이 완료되면, 분말원료를 호퍼에 투입합니다.',
    '호퍼에 투입된 분말형 원료가 스크류를 통해 가열, 압축, 혼합, 용융됩니다.',
    '고수분 식물성 조직단백질을 제조하기 위해 압출성형기 끝단에 성형다이를 설치합니다.',
    '성형다이 설치가 끝나면 성형다이 끝단에 냉각다이를 설치합니다.',
    '압출성형 공정을 거쳐 식물성 조직 단백질이 제조됩니다.',
  ]

  return <div className={styles.scriptContent}>{contents[activeStep]}</div>
}

export default function Page() {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepClick = (step) => {
    setActiveStep(step)
  }

  const handlePreviousClick = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0))
  }

  const handleNextClick = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 6))
  }
  return (
    <div className={styles.extruderWholeFinal}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            className={styles.logoIcon}
            src="/food-cluster/ui/extruder/logo.png"
            alt="logo"
            width={131}
            height={75}
          />
        </Link>
        <Link href="/">
          <Image
            className={styles.foodpolisIcon}
            src="/food-cluster/ui/extruder/foodpolis.png"
            alt="foodpolis"
            width={217}
            height={32}
          />
        </Link>
      </div>

      <div className={styles.titleMainExt}>
        <b className={styles.b6}>압출성형기</b>
        <div className={styles.extruderSystem}>Extruder System</div>
      </div>

      <div className={styles.titleSubPet}>
        <b className={styles.pet}>PET 라인</b>
        <div className={styles.petLine}>PET Line</div>
        <Link href="/pet-line">
          <Image
            className={styles.imgNextOrangeIcon}
            src="/food-cluster/ui/extruder/img-next-orange.png"
            alt="img-next-orange"
            width={53}
            height={53}
          />
        </Link>
      </div>

      <div className={styles.navbarLine} />

      <div className={styles.btnStep}>
        <div className={styles.line}>
          <div
            className={`${styles.line1} ${
              activeStep >= 1 ? styles.lineActive : ''
            }`}
          />
          <div
            className={`${styles.line2} ${
              activeStep >= 2 ? styles.lineActive : ''
            }`}
          />
          <div
            className={`${styles.line3} ${
              activeStep >= 3 ? styles.lineActive : ''
            }`}
          />
          <div
            className={`${styles.line4} ${
              activeStep >= 4 ? styles.lineActive : ''
            }`}
          />
          <div
            className={`${styles.line5} ${
              activeStep >= 5 ? styles.lineActive : ''
            }`}
          />
          <div
            className={`${styles.line6} ${
              activeStep >= 6 ? styles.lineActive : ''
            }`}
          />
        </div>

        <div className={styles.extruderStep00selectBtn}>
          <div
            className={styles.ellipseActive}
            onClick={() => handleStepClick(0)}
          />
          <div className={styles.step01Container}>
            <b>{`WHOLE | `}</b>
            <span className={styles.span}>전체공정보기</span>
          </div>
          <b className={styles.b0} onClick={() => handleStepClick(0)}>
            W
          </b>
        </div>
        <div
          className={
            activeStep >= 1
              ? styles.extruderStep01selectBtn
              : styles.extruderStep01UnselectBtn
          }
        >
          <div
            className={activeStep >= 1 ? styles.ellipseActive : styles.ellipse}
            onClick={() => handleStepClick(1)}
          />
          <div className={styles.step01Container}>
            <b>{`STEP 01 | `}</b>
            <span className={styles.span}>조작 패널 설정</span>
          </div>
          <b className={styles.b} onClick={() => handleStepClick(1)}>
            1
          </b>
        </div>
        <div
          className={
            activeStep >= 2
              ? styles.extruderStep02selectBtn
              : styles.extruderStep02UnselectBtn
          }
        >
          <div
            className={activeStep >= 2 ? styles.ellipseActive : styles.ellipse}
            onClick={() => handleStepClick(2)}
          />
          <div className={styles.step01Container}>
            <b>{`STEP 02 | `}</b>
            <span className={styles.span}>호퍼 원료 투입</span>
          </div>
          <b className={styles.b} onClick={() => handleStepClick(2)}>
            2
          </b>
        </div>
        <div
          className={
            activeStep >= 3
              ? styles.extruderStep03selectBtn
              : styles.extruderStep03UnselectBtn
          }
        >
          <div
            className={activeStep >= 3 ? styles.ellipseActive : styles.ellipse}
            onClick={() => handleStepClick(3)}
          />
          <div className={styles.step01Container}>
            <b>{`STEP 03 | `}</b>
            <span className={styles.span}>스크류 동작</span>
          </div>
          <b className={styles.b} onClick={() => handleStepClick(3)}>
            3
          </b>
        </div>
        <div
          className={
            activeStep >= 4
              ? styles.extruderStep04selectBtn
              : styles.extruderStep04UnselectBtn
          }
        >
          <div
            className={activeStep >= 4 ? styles.ellipseActive : styles.ellipse}
            onClick={() => handleStepClick(4)}
          />
          <div className={styles.step01Container}>
            <b>{`STEP 04 | `}</b>
            <span className={styles.span}>성형다이 설치</span>
          </div>
          <b className={styles.b} onClick={() => handleStepClick(4)}>
            4
          </b>
        </div>
        <div
          className={
            activeStep >= 5
              ? styles.extruderStep05selectBtn
              : styles.extruderStep05UnselectBtn
          }
        >
          <div
            className={activeStep >= 5 ? styles.ellipseActive : styles.ellipse}
            onClick={() => handleStepClick(5)}
          />
          <div className={styles.step01Container}>
            <b>{`STEP 05 | `}</b>
            <span className={styles.span}>냉각다이 고정</span>
          </div>
          <b className={styles.b} onClick={() => handleStepClick(5)}>
            5
          </b>
        </div>
        <div
          className={
            activeStep >= 6
              ? styles.extruderStep06selectBtn
              : styles.extruderStep06UnselectBtn
          }
        >
          <div
            className={activeStep >= 6 ? styles.ellipseActive : styles.ellipse}
            onClick={() => handleStepClick(6)}
          />
          <div className={styles.step01Container}>
            <b>{`STEP 06 | `}</b>
            <span className={styles.span}>결과물</span>
          </div>
          <b className={styles.b} onClick={() => handleStepClick(6)}>
            6
          </b>
        </div>
      </div>

      <div className={styles.threeBg}>
        <ExtruderMinimapScene activeStep={activeStep} />
        <ExtruderMainScene activeStep={activeStep} />
      </div>

      <Image
        className={styles.btnPreIcon}
        src="/food-cluster/ui/extruder/btn-pre.png"
        alt="img-next-orange"
        width={69}
        height={69}
        onClick={handlePreviousClick}
      />
      <Image
        className={styles.btnNextIcon}
        src="/food-cluster/ui/extruder/btn-next.png"
        alt="img-next-orange"
        width={69}
        height={69}
        onClick={handleNextClick}
      />

      <div className={styles.script}>
        <div className={styles.scriptBg} />
        <div className={styles.scriptTitle} />
        <b className={styles.info}>INFO</b>
        <InfoContent activeStep={activeStep} />
        <Image
          className={styles.scriptLogoIcon}
          src="/food-cluster/ui/extruder/script-logo.png"
          alt="script-logo"
          width={176}
          height={85}
        />
      </div>
    </div>
  )
}
