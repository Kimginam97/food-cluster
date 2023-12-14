'use client'
import React, { useState } from 'react'
import ViewScene from '../components/ViewScene'
import MiniScene from '../components/MiniScene'

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
      <ViewScene
        selectedView={selectedView}
        url="/models/injection-molding.fbx"
      />
      <MiniScene url="/models/injection-molding-minimap.fbx" />
    </>
  )
}

export default Page
