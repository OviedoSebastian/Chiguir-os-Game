import RedManCircle from "./RedManCircle";
import RedManQuad from "./RedManQuad";
import RedManTriangle from "./RedManTriangle";

export default function RedMen() {
    
    return <>
        <RedManCircle position={[0, 0 , -10]} />
        <RedManTriangle position={[0, 0 , -20]} />
        <RedManQuad position={[0, 0 , -30]} />
    </>
}