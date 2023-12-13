'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

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

  return (
    <div className="w-[1416.36px] h-[35.09px] left-[243px] top-[98px] absolute text-center text-black text-3xl font-medium font-['Gmarket Sans TTF']">
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
            src="/ui/extruder/logo.png"
            alt="logo"
            width={131}
            height={75}
          />
          <Image
            className="left-[103px] top-[24px] absolute"
            src="/ui/extruder/foodpolis.png"
            alt="foodpolis"
            width={217}
            height={8}
          />
        </Link>
      </section>

      {/* PET 라인 */}
      <section className="w-[300px] h-[111px] left-[816px] top-[42px] absolute">
        <div className="left-0 top-0 absolute text-center text-black text-6xl font-bold font-['Gmarket Sans TTF']">
          PET 라인
        </div>
        <div className="left-[60px] top-[82px] absolute text-center text-neutral-500 text-opacity-50 text-[25px] font-medium font-['Gmarket Sans TTF']">
          PET Line
        </div>
      </section>

      {/* 압출 성형기 */}
      <section className="w-[375px] h-[74px] left-[1365px] top-[65px] absolute">
        <div className="left-[198px] top-0 absolute text-center text-black text-opacity-40 text-[35px] font-bold font-['Gmarket Sans TTF']">
          압출성형기
        </div>
        <div className="left-[210px] top-[51px] absolute text-center text-neutral-500 text-opacity-40 text-xl font-medium font-['Gmarket Sans TTF']">
          Extruder System
        </div>

        <Link href="/extruder-system">
          <Image
            className="left-[62px] top-[17px] absolute"
            src="/ui/pet/img-next-blue.png"
            alt="img-next-blue"
            width={31}
            height={31}
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
                ? 'border-blue-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 2 */}
          <div
            className={`w-[226px] h-[0px] left-[267px] top-0 absolute border-4 border-dashed ${
              activeStep >= 2 && activeStep <= 6
                ? 'border-blue-400'
                : 'border-neutral-300'
            }`}
          ></div>
          {/* 3 */}
          <div
            className={`w-[226px] h-[0px] left-[533px] top-0 absolute border-4 border-dashed ${
              activeStep >= 3 && activeStep <= 6
                ? 'border-blue-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 4 */}
          <div
            className={`w-[227px] h-[0px] left-[799px] top-0 absolute border-4 border-dashed ${
              activeStep >= 4 && activeStep <= 6
                ? 'border-blue-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 5 */}
          <div
            className={`w-[227px] h-[0px] left-[1064px] top-0 absolute border-4 border-dashed ${
              activeStep >= 5 && activeStep <= 6
                ? 'border-blue-400'
                : 'border-neutral-300'
            }`}
          ></div>

          {/* 6 */}
          <div
            className={`w-[227px] h-[0px] left-[1329px] top-0 absolute border-4 border-dashed ${
              activeStep === 6 ? 'border-blue-400' : 'border-neutral-300'
            }`}
          ></div>
        </div>

        {/* 버튼 */}
        <div className="w-10 h-10 left-[78px] top-0 absolute bg-blue-400 rounded-full cursor-pointer" />
        <div
          className="left-[88px] top-[11px] absolute text-center text-white text-xl font-bold font-['KoPubDotum'] cursor-pointer"
          onClick={() => handleStepClick(0)}
        >
          W
        </div>
        <div className="left-0 top-[56px] absolute text-center text-blue-400 text-xl font-bold font-['KoPubDotum']">
          WHOLE | 전체공정보기
        </div>
        {/* 1 */}
        <div className="w-[211px] h-[78px] left-[259px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[85px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 1 && activeStep <= 6
                ? 'bg-blue-400'
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
                ? 'text-blue-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 01 |{' '}
            </span>
            <span className="text-xl font-medium font-['KoPubDotum']">
              빈 PET 투입
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[211px] h-[78px] left-[525px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[85px] top-0 absolute rounded-full cursor-pointer ${
              activeStep >= 2 && activeStep <= 6
                ? 'bg-blue-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(2)}
          />

          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 2 && activeStep <= 6
                ? 'text-blue-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 02 |{' '}
            </span>
            <span className="text-xl font-bold font-['KoPubDotum']">
              PET 충진실
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
                ? 'bg-blue-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(3)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 3 && activeStep <= 6
                ? 'text-blue-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 03 |{' '}
            </span>
            <span className="text-xl font-medium font-['KoPubDotum']">
              PET 이동
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
                ? 'bg-blue-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(4)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 4 && activeStep <= 6
                ? 'text-blue-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 04 |{' '}
            </span>
            <span className="text-xl font-medium font-['KoPubDotum']">
              PET 세척
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
                ? 'bg-blue-400'
                : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(5)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep >= 5 && activeStep <= 6
                ? 'text-blue-400'
                : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 05 |{' '}
            </span>
            <span className="text-xl font-medium font-['KoPubDotum']">
              라벨 부착
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
        <div className="w-[180px] h-[78px] left-[1619px] top-0 absolute">
          <div
            className={`w-10 h-10 left-[54px] top-0 absolute rounded-full cursor-pointer ${
              activeStep === 6 ? 'bg-blue-400' : 'bg-neutral-300'
            }`}
            onClick={() => handleStepClick(6)}
          />
          <div
            className={`left-0 top-[56px] absolute text-center ${
              activeStep === 6 ? 'text-blue-400' : 'text-neutral-300'
            }`}
          >
            <span className="text-xl font-bold font-['KoPubDotum']">
              STEP 06 |{' '}
            </span>
            <span className="text-xl font-medium font-['KoPubDotum']">
              로봇 적재
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

      {/* 메인 화면 */}
      <div className="w-[1920px] h-[798px] left-0 top-[282px] absolute bg-stone-50 border border-stone-300" />
      <section className="w-[1178.80px] h-[734px] left-[391px] top-[282px] absolute">
        <img
          className="w-[1628.07px] h-[734.37px] left-[-0.61px] top-[-0.37px] absolute"
          src="https://via.placeholder.com/1628x734"
        />
      </section>

      {/* 이전/다음 버튼 */}
      <Image
        className="left-[100px] top-[647px] absolute cursor-pointer"
        src="/ui/pet/btn-pre.png"
        alt="img-next-orange"
        width={69}
        height={69}
        onClick={handlePreviousClick}
      />
      <Image
        className="left-[1820px] top-[647px] absolute cursor-pointer"
        src="/ui/pet/btn-next.png"
        alt="img-next-orange"
        width={69}
        height={69}
        onClick={handleNextClick}
      />

      {/* INFO */}
      <section className="w-[1674px] h-[153.20px] left-[123px] top-[887px] absolute">
        <div className="w-[1446px] h-[75px] left-[228px] top-[78px] absolute bg-white" />
        <div className="w-[227.68px] h-[75.20px] left-0 top-[78px] absolute bg-blue-400" />
        <div className="w-[134.37px] h-[42.76px] left-[53.19px] top-[95.69px] absolute text-center text-white text-3xl font-bold font-['Gmarket Sans TTF']">
          INFO
        </div>
        <InfoContent activeStep={activeStep} />
        <Image
          className="left-[26px] top-0 absolute"
          src="/ui/extruder/script-logo.png"
          alt="script-logo"
          width={176}
          height={85}
        />
      </section>
    </div>
  )
}

export default Page
