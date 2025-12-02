import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function ImagePlane({ imageUrl }) {
  const meshRef = useRef()
  const texture = useTexture(imageUrl)
  const [aspect, setAspect] = useState(1)

  useEffect(() => {
    if (texture && texture.image) {
      const imgAspect = texture.image.width / texture.image.height
      setAspect(imgAspect)
      
      texture.wrapS = THREE.ClampToEdgeWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
    }
  }, [texture])

  useFrame(() => {
    if (meshRef.current) {
      // Rotação suave automática opcional (pode remover se preferir apenas controle manual)
      // meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[aspect * 2, 2]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Canvas3D({ imageUrl }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Iluminação ambiente */}
      <ambientLight intensity={0.6} />
      
      {/* Luz direcional */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} />
      
      {/* Plano com a imagem */}
      <ImagePlane imageUrl={imageUrl} />
      
      {/* Controles de órbita */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={2}
        maxDistance={10}
        autoRotate={false}
      />
    </Canvas>
  )
}

