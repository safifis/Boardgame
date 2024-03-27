import { useState } from "react";
import Card from "./Card";

const Fight = () => {
    const [playerNumber, setPlayerNumber] = useState(4);
    const [enemyNumber, setEnemyNumber] = useState(4);
    return (
        <>
            <div className="flex flex-col mt-10">
                <h2 className="sm:text-center text-2xl font-bold mb-4 px-4">
                    Damage Probability Calculator
                </h2>
                <div className="p-4 flex flex-wrap justify-between max-w-screen-xl items-center mx-auto">
                    <div className="flex-1 m-4">
                        <Card
                            title="Player"
                            number={playerNumber}
                            setNumber={setPlayerNumber}
                        />
                    </div>
                    <div className="flex-1 m-4">
                        <h2 className="text-center font-extrabold text-4xl py-4">
                            VS
                        </h2>
                    </div>
                    <div className="flex-1 m-4">
                        <Card
                            title="Enemy"
                            number={enemyNumber}
                            setNumber={setEnemyNumber}
                        />
                    </div>
                </div>

                <img
                    src={`/src/assets/${playerNumber}${enemyNumber}.png`}
                    alt={`Result of Player dice ${playerNumber} and Enemy dice ${enemyNumber}`}
                />
            </div>
        </>
    );
};

export default Fight;
