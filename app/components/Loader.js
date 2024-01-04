import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  const formattedProgress = progress.toFixed(2)

  return (
    <Html center style={{ color: 'black', whiteSpace: 'nowrap' }}>
      {formattedProgress} %
    </Html>
  )
}

export default Loader
