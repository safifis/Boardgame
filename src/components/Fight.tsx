import { useState } from "react";
import Card from "./Card";
import image11 from "/src/assets/11.jpg";
import image12 from "/src/assets/12.jpg";
import image13 from "/src/assets/13.jpg";
import image14 from "/src/assets/14.jpg";
import image15 from "/src/assets/15.jpg";
import image16 from "/src/assets/16.jpg";
import image17 from "/src/assets/17.jpg";
import image18 from "/src/assets/18.jpg";
import image21 from "/src/assets/21.jpg";
import image22 from "/src/assets/22.jpg";
import image23 from "/src/assets/23.jpg";
import image24 from "/src/assets/24.jpg";
import image25 from "/src/assets/25.jpg";
import image26 from "/src/assets/26.jpg";
import image27 from "/src/assets/27.jpg";
import image28 from "/src/assets/28.jpg";
import image31 from "/src/assets/31.jpg";
import image32 from "/src/assets/32.jpg";
import image33 from "/src/assets/33.jpg";
import image34 from "/src/assets/34.jpg";
import image35 from "/src/assets/35.jpg";
import image36 from "/src/assets/36.jpg";
import image37 from "/src/assets/37.jpg";
import image38 from "/src/assets/38.jpg";
import image41 from "/src/assets/41.jpg";
import image42 from "/src/assets/42.jpg";
import image43 from "/src/assets/43.jpg";
import image44 from "/src/assets/44.jpg";
import image45 from "/src/assets/45.jpg";
import image46 from "/src/assets/46.jpg";
import image47 from "/src/assets/47.jpg";
import image48 from "/src/assets/48.jpg";
import image51 from "/src/assets/51.jpg";
import image52 from "/src/assets/52.jpg";
import image53 from "/src/assets/53.jpg";
import image54 from "/src/assets/54.jpg";
import image55 from "/src/assets/55.jpg";
import image56 from "/src/assets/56.jpg";
import image57 from "/src/assets/57.jpg";
import image58 from "/src/assets/58.jpg";
import image61 from "/src/assets/61.jpg";
import image62 from "/src/assets/62.jpg";
import image63 from "/src/assets/63.jpg";
import image64 from "/src/assets/64.jpg";
import image65 from "/src/assets/65.jpg";
import image66 from "/src/assets/66.jpg";
import image67 from "/src/assets/67.jpg";
import image68 from "/src/assets/68.jpg";
import image71 from "/src/assets/71.jpg";
import image72 from "/src/assets/72.jpg";
import image73 from "/src/assets/73.jpg";
import image74 from "/src/assets/74.jpg";
import image75 from "/src/assets/75.jpg";
import image76 from "/src/assets/76.jpg";
import image77 from "/src/assets/77.jpg";
import image78 from "/src/assets/78.jpg";
import image81 from "/src/assets/81.jpg";
import image82 from "/src/assets/82.jpg";
import image83 from "/src/assets/83.jpg";
import image84 from "/src/assets/84.jpg";
import image85 from "/src/assets/85.jpg";
import image86 from "/src/assets/86.jpg";
import image87 from "/src/assets/87.jpg";
import image88 from "/src/assets/88.jpg";

const Fight = () => {
    const [playerNumber, setPlayerNumber] = useState(4);
    const [enemyNumber, setEnemyNumber] = useState(4);

    const images: { [key: number]: string } = {
        11: image11,
        12: image12,
        13: image13,
        14: image14,
        15: image15,
        16: image16,
        17: image17,
        18: image18,
        21: image21,
        22: image22,
        23: image23,
        24: image24,
        25: image25,
        26: image26,
        27: image27,
        28: image28,
        31: image31,
        32: image32,
        33: image33,
        34: image34,
        35: image35,
        36: image36,
        37: image37,
        38: image38,
        41: image41,
        42: image42,
        43: image43,
        44: image44,
        45: image45,
        46: image46,
        47: image47,
        48: image48,
        51: image51,
        52: image52,
        53: image53,
        54: image54,
        55: image55,
        56: image56,
        57: image57,
        58: image58,
        61: image61,
        62: image62,
        63: image63,
        64: image64,
        65: image65,
        66: image66,
        67: image67,
        68: image68,
        71: image71,
        72: image72,
        73: image73,
        74: image74,
        75: image75,
        76: image76,
        77: image77,
        78: image78,
        81: image81,
        82: image82,
        83: image83,
        84: image84,
        85: image85,
        86: image86,
        87: image87,
        88: image88,
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
                    numbers of dices. The probabilities are calculated by running simulations 1000 times for each chart.
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
