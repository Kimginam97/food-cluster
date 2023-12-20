import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

export default function Page() {
  return (
    <div className={styles.mainFrame}>
      <div className={styles.background}>
        <div className={styles.navbar}>
          <Link href="/">
            <Image
              className={styles.logoIcon}
              src="/food-cluster/ui/logo.png"
              alt="logo"
              width={217}
              height={133}
            />
          </Link>
        </div>
        <div className={styles.footer}>
          <div className={styles.bgIndex1} />
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.div}>
          <b>디지털트윈</b>
          <span className={styles.span}>으로 만나는 국가식품클러스터</span>
        </div>

        <div className={styles.btnMainExtruder}>
          <div className={styles.imgExt1}>
            <div className={styles.btnBoundary2} />
            <b className={styles.b}>압출성형기</b>
            <div className={styles.div1}>파일럿 플랜트</div>
            <Link href="/extruder-system">
              <div className={styles.imageContainer}>
                <Image
                  className={styles.imgExtIcon}
                  src="/food-cluster/ui/img-ext.png"
                  alt="img-ext"
                  width={422}
                  height={271}
                  priority
                />
                <Image
                  className={`${styles.intersectIcon} ${styles.hideIcon}`}
                  src="/food-cluster/ui/intersect-ext.png"
                  alt="img-ext"
                  width={422}
                  height={271}
                  priority
                />
                <div className={styles.hoverContent}>바로가기</div>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.btnMainExtruder}>
          <div className={styles.btnBoundary3} />
          <b className={styles.pet}>PET 라인</b>
          <div className={styles.div1}>기능성식품 제형센터</div>
          <Link href="/pet-line">
            <div className={styles.imageContainer}>
              <Image
                className={styles.imgExtIcon}
                src="/food-cluster/ui/img-pet.png"
                alt="img-pet"
                width={422}
                height={271}
              />
              <Image
                className={`${styles.intersectIcon} ${styles.hideIcon}`}
                src="/food-cluster/ui/Intersect-pet.png"
                alt="img-ext"
                width={422}
                height={271}
                priority
              />
              <div className={styles.hoverContent}>바로가기</div>
            </div>
          </Link>
        </div>
        <div
          className={styles.div3}
        >{`* 본 성과는 [2023년도 디지털 식품정보 플랫폼 구축] 사업의 성과입니다. `}</div>
      </div>
    </div>
  )
}
