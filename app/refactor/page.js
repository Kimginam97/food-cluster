'use client'
import React, { useState } from 'react'
import ExtruderMainScene from '../components/ExtruderMainScene'
import ExtruderMinimapScene from '../components/ExtruderMinimapScene'

const Page = () => {
  const [selectedView, setSelectedView] = useState(0)

  const handleButtonClick = (viewIndex) => {
    setSelectedView(viewIndex)
  }

  return (
    <>
      <div>
        {/* 버튼들 */}
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            Button {index}
          </button>
        ))}
      </div>
      {/* ViewScene에 선택된 값을 전달 */}
      <ExtruderMainScene
        activeStep={selectedView}
        url="/models/injection-molding.fbx"
      />
      <ExtruderMinimapScene
        activeStep={selectedView}
        url="/models/injection-molding-minimap.fbx"
      />
    </>
  )
}

export default Page
