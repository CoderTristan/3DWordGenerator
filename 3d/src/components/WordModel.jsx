import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, useTexture } from '@react-three/drei';

export default function WordModel({ text, color, rotate }) {
    const meshRef = useRef()

    const matcapTexture = useTexture('/textures/04989A_0CE3E4_04D2D5_04C7C8.png')

        useFrame((state, delta) => {
             if (rotate) {
        meshRef.current.rotation.y += delta * 1}
    })

  return (
    <mesh ref={meshRef}>
        <Text3D
            font='/helvetiker_regular.typeface.json' 
            height={0.2}
            size={1.5}
            curveSegments={20}
            position={[-(text.length * 1.5) / 4, -0.75, 0]}
        >
            {text}
            <meshMatcapMaterial matcap={matcapTexture} color={color} />
        </Text3D>
    </mesh>
  )
}