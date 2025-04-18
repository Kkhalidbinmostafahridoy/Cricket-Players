import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('Crickter.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="mt-[250px] text-start">
            <div className="flex justify-between">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Available Players</h2>
                </div>
                <div >
                    <button className="btn btn-active px-4 py-2 bg-yellow-500 rounded-l-xl">Avaiable</button>
                    <button className="btn btn-active px-4 py-2 bg-yellow-500 rounded-r-xl">Selected</button>
                </div>

            </div>
            <div className="grid grid-cols-3">
                {
                    players.map(player => <Player player={player} key={player.id}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;