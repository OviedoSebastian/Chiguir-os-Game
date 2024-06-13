import { atom, useAtom } from "jotai"
import { socket } from "../socket/socket-manager";

export const playersAtom = atom([]);

export const Players = () => {

   const [players, setPlayers] = useAtom(playersAtom);

    socket.on("players-connected", (playersConnected) =>{
        setPlayers(playersConnected);
    });

}