import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function RedManQuad(props) {
    const redManQuadRef = useRef(null)
    const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManQuad.glb')
    const amplitude = 3.5

    useFrame((state, delta) => {
        const position = redManQuadRef.current.position
        position.x = Math.cos(state.clock.getElapsedTime()) * amplitude + props.position[0];
    })

    return (
        <group {...props} ref={redManQuadRef} {...props} dispose={null}>
            <group name="Scene">
                <group name="Rigid">
                    <skinnedMesh
                        name="RedManQuad"
                        geometry={nodes.RedManQuad.geometry}
                        material={materials.redManQuadMaterial}
                        skeleton={nodes.RedManQuad.skeleton}
                    />
                    <primitive object={nodes.root} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/assets/models/red-mens/RedManQuad.glb')
