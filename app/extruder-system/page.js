'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
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

  return (
    <div className="w-[1416.36px] h-[35.09px] left-[243px] top-[98px] absolute text-center text-black text-3xl font-bold font-['Gmarket Sans TTF']">
      {contents[activeStep]}
    </div>
  )
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
    <div className="w-[1920px] h-[1080px] relative bg-white">
      {/* 로고 */}
      <section className="w-80 h-[75px] left-[63px] top-[42px] absolute">
        <Link href="/">
          <Image
            src="/food-cluster/ui/extruder/logo.png"
            alt="logo"
            width={131}
            height={75}
          />
        </Link>
        <Link href="/">
          <Image
            className="left-[103px] top-[24px] absolute"
            src="/food-cluster/ui/extruder/foodpolis.png"
            alt="foodpolis"
            width={217}
            height={32}
          />
        </Link>
      </section>

      {/* 압출 성형기 */}
      <section className="w-[300px] h-[111px] left-[816px] top-[42px] absolute">
        <div className="left-0 top-0 absolute text-center text-black text-6xl font-bold font-['Gmarket Sans TTF']">
          압출성형기
        </div>
        <div className="left-[60px] top-[82px] absolute text-center text-neutral-500 text-opacity-50 text-[25px] font-medium font-['Gmarket Sans TTF']">
          Extruder System
        </div>
      </section>

      {/* PET 라인 */}
      <section className="w-[371px] h-[74px] left-[1365px] top-[65px] absolute">
        <div className="left-[215px] top-0 absolute text-center text-black text-opacity-40 text-[35px] font-bold font-['Gmarket Sans TTF']">
          PET 라인
        </div>
        <div className="left-[246px] top-[51px] absolute text-center text-neutral-500 text-opacity-40 text-xl font-medium font-['Gmarket Sans TTF']">
          PET Line
        </div>
        <Link href="/pet-line">
          <Image
            className="left-[53px] top-[6px] absolute"
            src="/food-cluster/ui/extruder/img-next-orange.png"
            alt="img-next-orange"
            width={53}
            height={53}
          />
        </Link>
      </section>

      <div className="w-[1920px] h-[0px] left-0 top-[179px] absolute border-2 border-zinc-300"></div>

      {/* 공정 버튼 */}
      <div className="w-[1767px] h-[78px] left-[77px] top-[190px] absolute">
        {/* 선 */}
        <div className="w-[1556px] h-[0px] left-[118px] top-[23px] absolute">
          {/* 1 */}
          <div
            className={`w-[226px] h-[0px] left-0 top-0 absolute border-4 border-dashed ${
              activeStep >= 1 && activeStep <= 6
                ? 'border-red-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 2 */}
          <div
            className={`w-[226px] h-[0px] left-[267px] top-0 absolute border-4 border-dashed ${
              activeStep >= 2 && activeStep <= 6
                ? 'border-red-400'
                : 'border-neutral-300'
            }`}
          ></div>
          {/* 3 */}
          <div
            className={`w-[226px] h-[0px] left-[533px] top-0 absolute border-4 border-dashed ${
              activeStep >= 3 && activeStep <= 6
                ? 'border-red-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 4 */}
          <div
            className={`w-[227px] h-[0px] left-[799px] top-0 absolute border-4 border-dashed ${
              activeStep >= 4 && activeStep <= 6
                ? 'border-red-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 5 */}
          <div
            className={`w-[227px] h-[0px] left-[1064px] top-0 absolute border-4 border-dashed ${
              activeStep >= 5 && activeStep <= 6
                ? 'border-red-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 6 */}
          <div
            className={`w-[227px] h-[0px] left-[1329px] top-0 absolute border-4 border-dashed ${
              activeStep === 6 ? 'border-red-400' : 'border-neutral-300'
            }`}
          ></div>
        </div>

        {/* 버튼 */}
        <div className="w-10 h-10 left-[78px] top-0 absolute bg-red-400 rounded-full cursor-pointer" />
        <div
          className="left-[88px] top-[11px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
          onClick={() => handleStepClick(0)}
        >
          W
        </div>
        <div className="left-0 top-[56px] absolute text-center text-red-400 text-xl font-bold font-['KoPubDotum']">
          WHOLE | 전체공정보기
        </div>
        {/* 1 */}
        <div className="w-[211px] h-[78px] left-[259px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[85px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 1 && activeStep <= 6
                ? 'bg-red-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(1)}
          />
          <div
            className="left-[99px] top-[9px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
            onClick={() => handleStepClick(1)}
          >
            1
          </div>
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 1 && activeStep <= 6
                ? 'text-red-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 01 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              조작 패널 설정
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[211px] h-[78px] left-[525px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[85px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 2 && activeStep <= 6
                ? 'bg-red-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(2)}
          />

          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 2 && activeStep <= 6
                ? 'text-red-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 02 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              호퍼 원료 투입
            </span>
          </div>
          <div
            className="left-[99px] top-[9px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
            onClick={() => handleStepClick(2)}
          >
            2
          </div>
        </div>

        {/* 3 */}
        <div className="w-[188px] h-[78px] left-[802px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[74px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 3 && activeStep <= 6
                ? 'bg-red-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(3)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 3 && activeStep <= 6
                ? 'text-red-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 03 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              스크류 동작
            </span>
          </div>
          <div
            className="left-[88px] top-[9px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
            onClick={() => handleStepClick(3)}
          >
            3
          </div>
        </div>
        {/* 4 */}
        <div className="w-[206px] h-[78px] left-[1060px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[83px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 4 && activeStep <= 6
                ? 'bg-red-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(4)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 4 && activeStep <= 6
                ? 'text-red-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 04 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              성형다이 설치
            </span>
          </div>
          <div
            className="left-[97px] top-[9px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
            onClick={() => handleStepClick(4)}
          >
            4
          </div>
        </div>

        {/* 5 */}
        <div className="w-[206px] h-[78px] left-[1325px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[83px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 5 && activeStep <= 6
                ? 'bg-red-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(5)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 5 && activeStep <= 6
                ? 'text-red-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 05 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              냉각다이 고정
            </span>
          </div>
          <div
            className="left-[97px] top-[9px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
            onClick={() => handleStepClick(5)}
          >
            5
          </div>
        </div>

        {/* 6 */}
        <div className="w-[148px] h-[78px] left-[1619px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[54px] top-0 absolute rounded-full cursor-pointer ${
              activeStep === 6 ? 'bg-red-400' : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(6)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep === 6 ? 'text-red-400' : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 06 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              결과물
            </span>
          </div>
          <div
            className="left-[68px] top-[9px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
            onClick={() => handleStepClick(6)}
          >
            6
          </div>
        </div>
      </div>

      {/* 3D 화면 */}
      <ExtruderMainScene activeStep={activeStep} />
      <ExtruderMinimapScene activeStep={activeStep} />

      {/* 이전/다음 버튼 */}
      <Image
        className="left-[100px] top-[647px] absolute cursor-pointer"
        src="/food-cluster/ui/extruder/btn-pre.png"
        alt="img-next-orange"
        width={69}
        height={69}
        onClick={handlePreviousClick}
      />
      <Image
        className="left-[1820px] top-[647px] absolute cursor-pointer"
        src="/food-cluster/ui/extruder/btn-next.png"
        alt="img-next-orange"
        width={69}
        height={69}
        onClick={handleNextClick}
      />

      {/* INFO */}
      <section className="w-[1674px] h-[153.20px] left-[123px] top-[887px] absolute">
        <div className="w-[1446px] h-[75px] left-[228px] top-[78px] absolute bg-white" />
        <div className="w-[227.68px] h-[75.20px] left-0 top-[78px] absolute bg-red-400" />
        <div className="w-[134.37px] h-[42.76px] left-[53.19px] top-[95.69px] absolute text-center text-white text-3xl font-bold font-['Gmarket Sans TTF']">
          INFO
        </div>
        <InfoContent activeStep={activeStep} />
        <Image
          className="left-[26px] top-0 absolute"
          src="/food-cluster/ui/extruder/script-logo.png"
          alt="script-logo"
          width={176}
          height={85}
        />
      </section>
    </div>
  )
}

export default Page
