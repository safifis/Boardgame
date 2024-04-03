import { useState } from "react";
import Card from "./Card";
import image11 from "/src/assets/11.png";
import image12 from "/src/assets/12.png";

const Fight = () => {
    const [playerNumber, setPlayerNumber] = useState(4);
    const [enemyNumber, setEnemyNumber] = useState(4);

    const images: { [key: number]: string } = {
        11: image11,
        12: image12,
    };

    return (
        <>
            <div className="font-body flex flex-col mt-10 items-center">
                <h2 className="sm:text-center text-2xl font-bold mb-4 px-4">
                    Damage Probability Calculator
                </h2>
                <p className="font-body text-center text-md font-bold mb-4 px-8">
                    The Damage Probability Calculator displays the probability
                    of damage player can cause to the enemy using arbitrary
                    numbers of dices.
                </p>
                <div className="p-4 flex flex-col sm:flex-row justify-center items-center mx-auto">
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
                    src={images[playerNumber * 10 + enemyNumber]}
                    alt={`Result of Player dice ${playerNumber} and Enemy dice ${enemyNumber}`}
                    className=" max-w-120"
                />
            </div>
        </>
    );
};

export default Fight;
