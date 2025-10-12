import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, useTexture } from '@react-three/drei';

const LINE_HEIGHT = 0.8;
const INITIAL_X = -2;


export default function WordModel({ text, color, rotate }) {
    const groupRef = useRef()

    const matcapTexture = useTexture('/textures/04989A_0CE3E4_04D2D5_04C7C8.png')
    
    const lines = useMemo(() => {
        if (!text) return [];
        return text.split('\n').filter(line => line.trim().length > 0);
    }, [text])

    useFrame((state, delta) => {
        if (rotate) {
        groupRef.current.rotation.y += delta * .5}
    })

  return (
    <group ref={groupRef}>
        {lines .map((line, index) => {

            const yPosition = -index * LINE_HEIGHT;

            return (
            <Text3D
            key={index}
                font='/helvetiker_regular.typeface.json' 
                height={0.15}
                size={.4}
                curveSegments={10}
                position={[INITIAL_X, yPosition, 0]}
            >
                {line}
                <meshMatcapMaterial matcap={matcapTexture} color={color} />
            </Text3D>
        )})}
    </group>
  )
}