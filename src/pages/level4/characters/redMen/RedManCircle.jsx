import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function RedManCircle(props) {
    const redManCircleRef = useRef(null)
    const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManCircle.glb')

    const radius = 3.5
    const speed = 1.5

    useFrame((state, delta) => {
        const elapsedTime = state.clock.getElapsedTime()
        const angle = elapsedTime * speed 
        const x = Math.cos(angle) * radius 
        const z = Math.sin(angle) * radius 

        redManCircleRef.current.position.set(props.position[0] + x, props.position[1], props.position[2] + z)
        redManCircleRef.current.rotation.y = -angle 
    })

    return (
        <group {...props} ref={redManCircleRef} dispose={null}>
            <group name="Scene">
                <group name="Rigid">
                    <skinnedMesh
                        name="RedManCircle"
                        geometry={nodes.RedManCircle.geometry}
                        material={materials.redManCircleMaterial}
                        skeleton={nodes.RedManCircle.skeleton}
                    />
                    <primitive object={nodes.root} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/assets/models/red-mens/RedManCircle.glb')
