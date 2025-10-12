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

  const breakText = (input, maxLineLength = 20) => {
    if (!input) return "";
    
    const regex = new RegExp(`(.{1,${maxLineLength}})`, 'g');
    
    return input.split('\n')
        .map(line => line.replace(regex, '$1\n').trim())
        .join('\n');
};

const handleTextChange = (event) => {
    const rawText = event.target.value;
    const wrappedText = breakText(rawText, 40); 
    setText(wrappedText);
};



  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#222233' }} camera={{ position: [0,0,5], fov: 75 }}>
        <ambientLight intensity={.4} />
        <pointLight position={[10, 10, 5]} intensity={.8} />
        <OrbitControls enableZoom={true} enablePan={true} />

        <WordModel text={text} rotate={rotate} color={color} />

      </Canvas>       
      <textarea
      value={text}
      onChange={handleTextChange}
       placeholder="text change here" 
       rows={5}
       cols={40}
       style={{ 
          position: 'absolute', 
          top: '100px', 
          left: '20px',
          zIndex: 10
        }}/>
        <input 
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ 
          position: 'absolute', 
          top: '60px', 
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
