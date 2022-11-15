import './loading.less'
import Lottie from 'react-lottie'
import * as animationData from './loading.json'

export default () => {
  return (
    <div className="loading">
      <Lottie
        width={300}
        height={300}
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
      />
    </div>
  )
}
