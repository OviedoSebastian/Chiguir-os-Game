import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/WorldSquidGames.glb")

    return (
        <group {...props} dispose={null}>
            <group>
                {/* No necesito las paredes */}
                {/* <RigidBody colliders="trimesh" type="fixed">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                </RigidBody> */}
                <RigidBody colliders="trimesh" type="fixed">
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders={false}>
                        <mesh
                            onClick={(e) => e.stopPropagation()}
                            castShadow={true}
                            geometry={nodes.WoodenFence.geometry}
                            material={materials.woodMaterial}>
                            <CuboidCollider args={[0.2, 0.5, 47.5]} position={[-3.8, 0.5, -47]} />
                            <CuboidCollider args={[0.2, 0.5, 47.5]} position={[4.2, 0.5, -47]} />
                        </mesh>
                </RigidBody>
                <RigidBody colliders={false} type="fixed" >
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Tree.geometry} material={materials.treeMaterial} position={[0, 0, -96]} />
                    <CylinderCollider args={[1, 0.5]} position={[0, 1, -96]} />
                </RigidBody>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

