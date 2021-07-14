import { useState } from 'react'
import QrReader from 'react-qr-scanner'

export default function App() {
  return (
    <div className="App">
      <Scanner />
      {/* <Dummy /> */}
    </div>
  )
}

function Scanner() {
  const delay = 1000
  const [result, setResult] = useState('')

  const handleScan = (data) => {
    if (data) {
      console.log('Scanner Data: ', data)
      setResult(data?.text)
    }
  }

  const handleError = (err) => {
    console.error('Scanner Error: ', err)
  }

  const previewStyle = {
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
  }

  return (
    <div className="scanner">
      <QrReader delay={delay} style={previewStyle} onError={handleError} onScan={handleScan} />

      <div className="note">Place code inside the frame below</div>
      <div className="overlay">
        <div className="box">
          <div className="corners">
            <CornersShape />
          </div>
          <div className="scanning-line"></div>
        </div>
      </div>
      <div className="result">{result}</div>
    </div>
  )
}

function Dummy() {
  const previewStyle = {
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
  }

  return (
    <div className="scanner">
      <img
        style={previewStyle}
        src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
        alt="something"
      />
      <div className="note">Place code inside the frame below</div>
      <div className="overlay">
        <div className="box">
          <div className="corners">
            <CornersShape />
          </div>
          <div className="scanning-line"></div>
        </div>
      </div>
    </div>
  )
}

const CornersShape = () => {
  const x = 18
  const lines = [
    `M${25 - x},2 L2,2 L2,${25 - x}`,
    `M2,${75 + x} L2,98 L${25 - x},98`,
    `M${75 + x},98 L98,98 L98,${75 + x}`,
    `M98,${25 - x} L98,2 L${75 + x},2`,
  ]

  return (
    <svg viewBox="0 0 100 100">
      {lines.map((d) => (
        <path d={d} fill="none" stroke="white" stroke-width="1.5" />
      ))}
    </svg>
  )
}
