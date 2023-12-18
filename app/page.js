import Image from 'next/image'
import styles from './home.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-white">
      {/* 라임색 배경 */}
      <div className="absolute w-[1920px] h-[321px] left-0 top-[759px] bg-lime-500" />

      {/* 하단 안내 문구 */}
      <div className="w-[1042px] h-[27px] left-[439px] top-[868px] absolute text-center text-white text-base font-medium font-['Gmarket Sans TTF']">
        * 본 성과는 [2023년도 디지털 식품정보 플랫폼 구축] 사업의 성과입니다.
      </div>

      {/* 로고 */}
      <Link href="/">
        <Image
          className="w-[217px] h-[133px] left-[66px] top-[75px] absolute"
          src="/food-cluster/ui/logo.png"
          alt="logo"
          width={213}
          height={133}
        />
      </Link>

      {/* 중앙 텍스트 */}
      <div className="w-[900px] h-[58px] left-[513px] top-[284px] text-center absolute">
        <span className="text-black text-5xl font-bold font-['Gmarket Sans TTF']">
          디지털트윈
        </span>
        <span className="text-black text-5xl font-medium font-['Gmarket Sans TTF']">
          으로 만나는 국가식품클러스터
        </span>
      </div>

      {/* 압출성형기 섹션 */}
      <section className="w-[422px] h-[416px] left-[494px] top-[397px] absolute">
        <div className="w-full h-full absolute flex-col justify-start items-start flex">
          <div className={styles.logoContainer}>
            <Link href="/extruder-system">
              <Image
                src="/food-cluster/ui/img-ext.png"
                alt="img-ext"
                width={422}
                height={271}
              />
              <div className={styles.hoverContent}>바로가기</div>
            </Link>
          </div>
          <div className="w-full h-[345px] bg-white rounded-[20px] shadow border border-white" />
          <div className="w-[183px] h-[27px] left-[119px] top-[297px] absolute text-center text-black text-3xl font-bold font-['Gmarket Sans TTF']">
            압출성형기
          </div>
          <div className="w-[254px] h-[27px] left-[84px] top-[344px] absolute text-center text-zinc-600 text-[26px] font-medium font-['Gmarket Sans TTF']">
            파일럿 플랜트
          </div>
        </div>
      </section>

      {/* PET 라인 섹션 */}
      <section className="w-[422px] h-[416px] left-[1005px] top-[397px] absolute">
        <div className="w-full h-full absolute bg-white rounded-[20px] shadow border border-white" />
        <div className="w-[183px] h-[27px] left-[119px] top-[297px] absolute text-center text-black text-3xl font-bold font-['Gmarket Sans TTF']">
          PET 라인
        </div>
        <div className="w-[254px] h-[27px] left-[84px] top-[344px] absolute text-center text-zinc-600 text-[26px] font-medium font-['Gmarket Sans TTF']">
          기능성식품 제형센터
        </div>
        <div className={styles.logoContainer}>
          <Link href="/pet-line">
            <Image
              className="w-full h-[271px]"
              src="/food-cluster/ui/img-pet.png"
              alt="img-pet"
              width={422}
              height={271}
            />
            <div className={styles.hoverContent}>바로가기</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
