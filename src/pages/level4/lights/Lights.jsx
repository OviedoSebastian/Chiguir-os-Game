const Lights = () => {
    

    return <>
        <ambientLight color={"black"} intensity={100} />
        {/* <directionalLight 
            position={[10, 10, 5]} 
            castShadow={true}  
        /> */}

        <pointLight
            position={[5.9, 0, -11.5]}
            color={"red"}
            intensity={100}
        />

    </>
}

export default Lights