import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import WordModel from './components/WordModel'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("hello")
  const [color, setColor] = useState('orange')
  const [rotate, setRotate] = useState(true)


  const handleRotate = () => {
    setRotate(!rotate)
  }


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#222233' }} camera={{ position: [0,0,5], fov: 75 }}>
        <ambientLight intensity={.4} />
        <pointLight position={[10, 10, 5]} intensity={.8} />
        <OrbitControls enableZoom={true} enablePan={false} />

        <WordModel text={text} rotate={rotate} color={color} />

      </Canvas>       
      <input 
      onChange={event => setText(event.target.value)}
       placeholder="text change here" 
       type="text" 
       style={{ 
          position: 'absolute', 
          top: '100px', 
          left: '20px', 
          zIndex: 10
        }}/>
      <button
      onClick={handleRotate}
        style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          zIndex: 10
        }}
      >
        Stop Rotation
      </button>   
    </div>
  )
}

export default App
