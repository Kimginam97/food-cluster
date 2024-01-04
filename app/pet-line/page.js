'use client'
import Link from 'next/link'
import styles from './pet.module.css'
import Image from 'next/image'
import { useState } from 'react'
import PetLineMainScene from '../components/PetLineMainScene'
import PetLineMinimapScene from '../components/PetLineMinimapScene'

const InfoContent = ({ activeStep }) => {
  const contents = [
    '음료를 만들기 위해 배합-살균-충진-세척-라벨 부착-적재를 거치는 자동화 공정입니다.',
    'PET 투입실에서는 음료가 담길 빈 페트병을 투입합니다.',
    'PET충진실에서는 빈 페트병을 세척하고 음료를 충진한 후 뚜껑을 닫습니다.',
    '음료가 충진된 페트병을 PET충진실에서 종합포장실로 이동시킵니다.',
    '음료가 충진된 페트병의 외부를 깨끗하게 세척하고 에어샤워를 통해 물기를 제거합니다.',
    '깨끗해진 페트병에 음료의 상표를 알 수 있도록 라벨지를 부착합니다.',
    '박스에 정리된 음료수를 로봇을 이용해 편리하게 옮깁니다.',
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
      <main className={styles.petWholeResponsive}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  className={styles.logoIcon}
                  src="/food-cluster/ui/pet/logo.png"
                  alt="logo"
                  width={131}
                  height={75}
                />
              </Link>
              <Link href="/">
                <Image
                  className={styles.foodpolisIcon}
                  src="/food-cluster/ui/pet/foodpolis.png"
                  alt="foodpolis"
                  width={217}
                  height={32}
                />
              </Link>
            </div>
            <div className={styles.titleMainExt}>
              <b className={styles.b}>PET 라인</b>
              <div className={styles.petSystem}>PET Line</div>
            </div>
            <div className={styles.titleSubPet}>
              <Link href="/extruder-system">
                <Image
                  className={styles.imgNextBlueIcon}
                  src="/food-cluster/ui/pet/img-next-blue.png"
                  alt="img-next-blue"
                  width={33}
                  height={33}
                />
              </Link>
              <div className={styles.petLine}>
                <b className={styles.b}>압출성형기</b>
                <div className={styles.petLine1}>pet System</div>
              </div>
            </div>
          </nav>

          <div className={styles.divLine1} />

          <div className={styles.btn}>
            <div className={styles.petStepBtn}>
              <div
                className={
                  activeStep >= 1 ? styles.rightLineActive : styles.rightLine
                }
              />
              <div className={styles.petStepSelectBtn}>
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
            <div className={styles.petStepBtn}>
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
                    ? styles.petStepSelectBtn
                    : styles.petStepUnselectBtn
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
                  <span className={styles.span}>빈 PET 투입</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(1)}>
                  1
                </b>
              </div>
            </div>
            <div className={styles.petStepBtn}>
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
                    ? styles.petStepSelectBtn
                    : styles.petStepUnselectBtn
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
                  <span className={styles.span}>PET 충진실</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(2)}>
                  2
                </b>
              </div>
            </div>
            <div className={styles.petStepBtn}>
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
                    ? styles.petStepSelectBtn
                    : styles.petStepUnselectBtn
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
                  <span className={styles.span}>PET 이동</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(3)}>
                  3
                </b>
              </div>
            </div>
            <div className={styles.petStepBtn}>
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
                    ? styles.petStepSelectBtn
                    : styles.petStepUnselectBtn
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
                  <span className={styles.span}>PET 세척</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(4)}>
                  4
                </b>
              </div>
            </div>
            <div className={styles.petStepBtn}>
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
                    ? styles.petStepSelectBtn
                    : styles.petStepUnselectBtn
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
                  <span className={styles.span}>라벨부착</span>
                </div>
                <b className={styles.extB} onClick={() => handleStepClick(5)}>
                  5
                </b>
              </div>
            </div>
            <div className={styles.petStepBtn}>
              <div
                className={
                  activeStep >= 6 ? styles.leftLineActive : styles.leftLine
                }
              />
              <div
                className={
                  activeStep >= 6
                    ? styles.petStepSelectBtn
                    : styles.petStepUnselectBtn
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
                  <span className={styles.span}>로봇 적재</span>
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
            <PetLineMainScene activeStep={activeStep} />
            <PetLineMinimapScene activeStep={activeStep} />
          </div>
          <div className={styles.script}>
            <div className={styles.info}>
              <Image
                className={styles.scriptLogoIcon}
                src="/food-cluster/ui/pet/script-logo.png"
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
            src="/food-cluster/ui/pet/btn-pre.png"
            alt="img-next-orange"
            width={69}
            height={69}
            onClick={handlePreviousClick}
          />
          <Image
            className={styles.btnNextIcon}
            src="/food-cluster/ui/pet/btn-next.png"
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
