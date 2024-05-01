import { Environment } from "@react-three/drei";

export default function Environments() {
    return (
        <Environment
            files={"/assets/hdris/sky.hdr"}
            preset={null}
            background={true}
        />
    )
}