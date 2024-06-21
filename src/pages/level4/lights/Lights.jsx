const Lights = () => {
    

    return <>
        <ambientLight color={"white"} intensity={1} />

        <pointLight
            position={[5.9, 0, -11.5]}
            color={"red"}
            intensity={100}
        />

    </>
}

export default Lights