import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function RedManTriangle(props) {
  const redManTriangleRef = useRef(null)
  const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManTriangle.glb')
  const speed = 4

  useFrame((state, delta) => {
    const position = redManTriangleRef.current.position
    if (position.x >= -3.5 && position.x < 3.5 && position.y == 0.0) {
      position.x += delta * speed;
    }
    else if (position.x > 0.0 && position.y >= 0.0) {
      position.x -= delta * speed;
      position.y += delta * speed;
    }
    else if (position.x > -3.5 && position.y >= 0.0) {
      position.x -= delta * speed;
      position.y -= delta * speed;
    }
    else {
      position.x = -3.5;
      position.y = 0.0;
    }

  })

  return (
    <group {...props} ref={redManTriangleRef} dispose={null}>
      <group name="Scene">
        <group name="Rigid">
          <skinnedMesh
            name="RedManTriangle"
            geometry={nodes.RedManTriangle.geometry}
            material={materials.redManTriangleMaterial}
            skeleton={nodes.RedManTriangle.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/red-mens/RedManTriangle.glb')
