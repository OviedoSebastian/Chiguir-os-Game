const Lights = () => {
    return <>
        <ambientLight color={"white"} intensity={0.8} />
        <directionalLight 
            position={[10, 10, 5]} 
            castShadow={true}  
        />

        <pointLight
            position={[0, 2, 0]}
            color={"blue"}
            intensity={100}
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