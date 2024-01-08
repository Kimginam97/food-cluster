'use client'
import Link from 'next/link'
import styles from './extruder.module.css'
import Image from 'next/image'
import { useState } from 'react'
import ExtruderMainScene from '../components/ExtruderMainScene'

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

  return <div className={styles.infoContent}>{contents[activeStep]}</div>
}

const Page = () => {
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
    <>
      <main className={styles.extruderWholeResponsive}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
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
              <b className={styles.b}>압출성형기</b>
              <div className={styles.extruderSystem}>Extruder System</div>
            </div>
            <div className={styles.titleSubPet}>
              <Link href="/pet-line">
                <Image
                  className={styles.imgNextOrangeIcon}
                  src="/food-cluster/ui/extruder/img-next-orange.png"
                  alt="img-next-orange"
                  width={53}
                  height={53}
                />
              </Link>
              <div className={styles.petLine}>
                <b className={styles.b}>PET 라인</b>
                <div className={styles.petLine1}>PET Line</div>
              </div>
            </div>
          </nav>

          <div className={styles.divLine1} />

          <div className={styles.btn}>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 1 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div className={styles.extruderStepSelectBtn}>
                <div
                  className={
                    activeStep >= 0 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(0)}
                />
                <div className={styles.btnContainer}>
                  <b>{`WHOLE | `}</b>
                  <span className={styles.span}>전체공정보기</span>
                </div>
                <b className={styles.w} onClick={() => handleStepClick(0)}>
                  W
                </b>
              </div>
            </div>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 1 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 2 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div
                className={
                  activeStep >= 1
                    ? styles.extruderStepSelectBtn
                    : styles.extruderStepUnselectBtn
                }
              >
                <div
                  className={
                    activeStep >= 1 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(1)}
                />
                <div className={styles.btnContainer}>
                  <b>{`STEP 01 | `}</b>
                  <span className={styles.span}>조작 패널 설정</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(1)}>
                  1
                </b>
              </div>
            </div>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 2 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 3 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div
                className={
                  activeStep >= 2
                    ? styles.extruderStepSelectBtn
                    : styles.extruderStepUnselectBtn
                }
              >
                <div
                  className={
                    activeStep >= 2 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(2)}
                />
                <div className={styles.btnContainer}>
                  <b>{`STEP 02 | `}</b>
                  <span className={styles.span}>호퍼 원료 투입</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(2)}>
                  2
                </b>
              </div>
            </div>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 3 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 4 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div
                className={
                  activeStep >= 3
                    ? styles.extruderStepSelectBtn
                    : styles.extruderStepUnselectBtn
                }
              >
                <div
                  className={
                    activeStep >= 3 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(3)}
                />
                <div className={styles.btnContainer}>
                  <b>{`STEP 03 | `}</b>
                  <span className={styles.span}>스크류 동작</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(3)}>
                  3
                </b>
              </div>
            </div>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 4 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 5 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div
                className={
                  activeStep >= 4
                    ? styles.extruderStepSelectBtn
                    : styles.extruderStepUnselectBtn
                }
              >
                <div
                  className={
                    activeStep >= 4 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(4)}
                />
                <div className={styles.btnContainer}>
                  <b>{`STEP 04 | `}</b>
                  <span className={styles.span}>성형다이 설치</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(4)}>
                  4
                </b>
              </div>
            </div>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 5 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 6 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div
                className={
                  activeStep >= 5
                    ? styles.extruderStepSelectBtn
                    : styles.extruderStepUnselectBtn
                }
              >
                <div
                  className={
                    activeStep >= 5 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(5)}
                />
                <div className={styles.btnContainer}>
                  <b>{`STEP 05 | `}</b>
                  <span className={styles.span}>냉각다이 고정</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(5)}>
                  5
                </b>
              </div>
            </div>
            <div className={styles.extruderStepBtn}>
              <div
                className={
                  activeStep >= 6 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 6
                    ? styles.extruderStepSelectBtn
                    : styles.extruderStepUnselectBtn
                }
              >
                <div
                  className={
                    activeStep >= 6 ? styles.ellipseActive : styles.ellipse
                  }
                  onClick={() => handleStepClick(6)}
                />
                <div className={styles.btnContainer}>
                  <b>{`STEP 06 | `}</b>
                  <span className={styles.span}>결과물</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(6)}>
                  6
                </b>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.threebg}>
            <ExtruderMainScene activeStep={activeStep} />
          </div>
          <div className={styles.script}>
            <div className={styles.info}>
              <Image
                className={styles.scriptLogoIcon}
                src="/food-cluster/ui/extruder/script-logo.png"
                alt="script-logo"
                width={176}
                height={85}
              />
              <div className={styles.scriptTitle1} />
              <b className={styles.info1}>INFO</b>
            </div>
            <InfoContent activeStep={activeStep} />
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
        </div>
      </main>
    </>
  )
}

export default Page
