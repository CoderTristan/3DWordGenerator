import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import WordModel from './components/WordModel'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("hello")
  const [color, setColor] = useState('orange')


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#222233' }} camera={{ position: [0,0,5], fov: 75 }}>
        <ambientLight intensity={.4} />
        <pointLight position={[10, 10, 5]} intensity={.8} />
        <OrbitControls enableZoom={true} enablePan={false} />

        <WordModel text={text} color={color} />

      </Canvas>       
      <button
        style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          zIndex: 10 // Ensure it sits on top of the Canvas
        }}
      >
        'Stop Rotation'
      </button>   
    </div>
  )
}

export default App
