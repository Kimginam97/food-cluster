import { Suspense } from 'react'
import ViewScene from '../components/ViewScene'

const Page = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ViewScene />
      </Suspense>
    </>
  )
}

export default Page
