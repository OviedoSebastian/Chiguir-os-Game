import { useHelper } from "@react-three/drei"
import { useControls } from "leva"
import { useMemo, useRef } from "react"
import { PointLightHelper } from "three"

const Lights = () => {
    const pointLightRef = useRef(null)
    useHelper(pointLightRef, PointLightHelper)
    const optionSpotLight = useMemo(()=>{
        return {
            intensitySL: {value: 100, min: 0, max: 100, step: 1},
            colorSL: {value: "blue"}
        }
    },[])
    




    const {intensitySL, colorSL} = useControls("SpotLight", optionSpotLight)

    return <>
        <ambientLight color={"white"} intensity={0.8} />
        <directionalLight 
            position={[10, 10, 5]} 
            castShadow={true}  
        />

        <pointLight
            ref={pointLightRef}
            position={[0, 2, 0]}
            color={colorSL}
            intensity={intensitySL}
        />

        <spotLight 
            position={[0, 0, 10]}
            color = {"yellow"}
            intensity = {100}
            angle={Math.PI / 3}
            castShadow={true}
        />

        <spotLight 
            position={[0, 0, -10]}
            color = {"red"}
            intensity = {100}
            castShadow={true}
        />

        {/* <hemisphereLight 
            position={[2, 10, -2]}
            // color={"blue"}
            skyColor={"blue"}
            groundColor={"white"}
            intensity={3}
        /> */}




    </>
}


export default Lights