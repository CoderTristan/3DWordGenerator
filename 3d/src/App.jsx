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
    
    // Use a regular expression to find all characters up to the max length, 
    // but without breaking existing newline structure.
    const regex = new RegExp(`(.{1,${maxLineLength}})`, 'g');
    
    // Split the text by existing newlines first
    return input.split('\n')
        .map(line => line.replace(regex, '$1\n').trim()) // Insert \n and clean up
        .join('\n'); // Rejoin the original lines
};

const handleTextChange = (event) => {
    const rawText = event.target.value;
    
    // Use the function to process the text and set the state
    const wrappedText = breakText(rawText, 20); 
    
    // Note: This will result in text being re-processed on every keypress, 
    // which can feel jumpy or confusing to the user.
    setText(wrappedText);
};



  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#222233' }} camera={{ position: [0,0,5], fov: 75 }}>
        <ambientLight intensity={.4} />
        <pointLight position={[10, 10, 5]} intensity={.8} />
        <OrbitControls enableZoom={true} enablePan={false} />

        <WordModel text={text} rotate={rotate} color={color} />

      </Canvas>       
      <textarea
      value={text}
      onChange={handleTextChange}
       placeholder="text change here" 
       type="text"
       rows={5}
       cols={20}
       style={{ 
          position: 'absolute', 
          top: '100px', 
          left: '20px',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
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
