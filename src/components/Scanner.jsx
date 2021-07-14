import { useState } from 'react'
import QrReader from 'react-qr-scanner'
import CornersShape from './CornersShape'

export default function Scanner() {
  const delay = 1000
  const [result, setResult] = useState('')

  const handleScan = (data) => {
    if (data) {
      // console.log('Scanner Data: ', data)
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
