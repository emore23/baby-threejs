import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Componente do feto usando modelo GLB
function FetusModel({ weeks = 20, position = [0, 0, 0] }) {
  const groupRef = useRef()
  // Caminho do modelo GLB (na pasta public/models)
  const { scene } = useGLTF('/models/20-weeks.glb')

  // Calcular escala baseada nas semanas
  // O modelo é para 20 semanas, então ajustamos a partir disso
  const scale = useRef(1)
  
  useEffect(() => {
    // Escala baseada nas semanas: de 0.5 (semana 8) até 1.5 (semana 40)
    // O modelo base é para 20 semanas (escala 1.0)
    if (weeks <= 20) {
      // Crescimento de 8 a 20 semanas
      scale.current = 0.5 + ((weeks - 8) / 12) * 0.5
    } else {
      // Crescimento de 20 a 40 semanas
      scale.current = 1.0 + ((weeks - 20) / 20) * 0.5
    }
  }, [weeks])

  // Animação de movimento suave e sutil
  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (groupRef.current) {
      // Movimento flutuante muito sutil
      groupRef.current.position.y = position[1] + Math.sin(time * 0.3) * 0.03
      
      // Aplicar escala baseada nas semanas
      groupRef.current.scale.setScalar(scale.current)
    }
  })

  // Clonar a cena para evitar problemas com múltiplas instâncias
  const clonedScene = scene.clone()

  return (
    <primitive
      ref={groupRef}
      object={clonedScene}
      position={position}
      rotation={[0, 0, 0.25]}
      dispose={null}
    />
  )
}

// Pré-carregar o modelo
useGLTF.preload('/models/20-weeks.glb')

// Componente principal do Canvas 3D do Feto
export default function Fetus3D({ weeks = 20 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background suave bege */}
      <color attach="background" args={['#f5f0e8']} />

      {/* Iluminação suave e quente */}
      <ambientLight intensity={0.9} color="#fff8f0" />
      <directionalLight
        position={[5, 6, 4]}
        intensity={1.0}
        color="#fff5e8"
        castShadow={false}
      />
      <directionalLight position={[-4, 3, -3]} intensity={0.3} color="#fff8f0" />
      <pointLight position={[0, 3, 2]} intensity={0.2} color="#fff8f0" />

      {/* Ambiente/útero (esfera translúcida muito sutil) */}
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial
          color={0xf5e6d3}
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Feto usando modelo GLB */}
      <FetusModel weeks={weeks} position={[0, 0, 0]} />

      {/* Controles de órbita para rotacionar o feto */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={2}
        maxDistance={8}
        autoRotate={false}
        target={[0, 0, 0]}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  )
}
