import Link from 'next/link'
import styles from './index.module.css'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className={styles.extruderWholeResponsive}>
        <div className={styles.header}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <img className={styles.logoIcon} alt="" src="logo.png" />
              <img className={styles.logoIcon1} alt="" src="logo.png" />
            </div>
            <div className={styles.titleMainExt}>
              <b className={styles.b}>압출성형기</b>
              <div className={styles.extruderSystem}>Extruder System</div>
            </div>
            <div className={styles.titleSubPet}>
              <img
                className={styles.imgNextOrangeIcon}
                alt=""
                src="img-next-orange.png"
              />
              <div className={styles.petLine}>
                <b className={styles.b}>PET 라인</b>
                <div className={styles.petLine1}>PET Line</div>
              </div>
            </div>
          </div>
          <div className={styles.divLine1} />
          <div className={styles.btn}>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep00UnselectBtn}>
                <div className={styles.ellipse7} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 01 | `}</b>
                  <span className={styles.span}>조작 패널 설정</span>
                </div>
                <b className={styles.w}>1</b>
              </div>
            </div>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep00UnselectBtn}>
                <div className={styles.ellipse7} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 01 | `}</b>
                  <span className={styles.span}>조작 패널 설정</span>
                </div>
                <b className={styles.w}>1</b>
              </div>
            </div>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep00UnselectBtn}>
                <div className={styles.ellipse7} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 02 | `}</b>
                  <span className={styles.span}>호퍼 원료 투입</span>
                </div>
                <b className={styles.w}>2</b>
              </div>
            </div>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep03UnselectBtn}>
                <div className={styles.ellipse10} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 03 | `}</b>
                  <span className={styles.span}>스크류 동작</span>
                </div>
                <b className={styles.b3}>3</b>
              </div>
            </div>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep04UnselectBtn}>
                <div className={styles.ellipse11} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 04 | `}</b>
                  <span className={styles.span}>성형다이 설치</span>
                </div>
                <b className={styles.b4}>4</b>
              </div>
            </div>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep04UnselectBtn}>
                <div className={styles.ellipse11} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 05 | `}</b>
                  <span className={styles.span}>냉각다이 고정</span>
                </div>
                <b className={styles.b4}>5</b>
              </div>
            </div>
            <div className={styles.extruderStep00Btn}>
              <div className={styles.extruderStep06UnselectBtn}>
                <div className={styles.ellipse13} />
                <div className={styles.wholeContainer}>
                  <b>{`STEP 06 | `}</b>
                  <span className={styles.span}>결과물</span>
                </div>
                <b className={styles.b6}>6</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.bgFrame1} />
          <div className={styles.script}>
            <div className={styles.info}>
              <img
                className={styles.scriptLogoIcon}
                alt=""
                src="script-logo.png"
              />
              <div className={styles.scriptTitle1} />
              <b className={styles.info1}>INFO</b>
            </div>
            <div className={styles.infoContent}>
              <div className={styles.div}>
                분말형 원료를 일정시간 가열-압축-혼합-용융-성형되도록 가공하는
                압출성형기입니다.
              </div>
            </div>
          </div>
          <img className={styles.btnNextIcon} alt="" src="btn-next.png" />
          <img className={styles.btnPreIcon} alt="" src="btn-pre.png" />
        </div>
      </div>
    </>
  )
}

export default Page
