import { useState, ChangeEvent } from "react";
import image1 from "/src/assets/1.png";
import image2 from "/src/assets/2.png";
import image3 from "/src/assets/3.png";
import image4 from "/src/assets/4.png";
import image5 from "/src/assets/5.png";
import image6 from "/src/assets/6.png";
import image7 from "/src/assets/7.png";
import image8 from "/src/assets/8.png";

const DiceCalculator = () => {
    const [number, setNumber] = useState(1);
    const [showImage, setShowImage] = useState(false);

    const images: { [key: number]: string } = {
        1: image1,
        2: image2,
        3: image3,
        4: image4,
        5: image5,
        6: image6,
        7: image7,
        8: image8,
    };

    const handleNumber = (event: ChangeEvent<HTMLSelectElement>) => {
        setNumber(Number(event.target.value));
        setShowImage(false);
    };

    const handleShowImage = () => {
        setShowImage(true);
    };

    return (
        <div className="dice-calculator max-w-md min-w-96 p-4 border-2 border-gray-300 rounded-lg">
            <p className="text-lg font-semibold mb-3">
                Select your dice value:
            </p>
            <div className="mb-4">
                <select
                    className="block w-full p-2 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={number}
                    onChange={handleNumber}
                >
                    {Array.from({ length: 8 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>
            <button
                className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={handleShowImage}
            >
                Show Probability
            </button>
            {showImage && (
                <img
                    className="mt-4 rounded-md"
                    src={images[number]}
                    alt={`Dice showing ${number}`}
                />
            )}
        </div>
    );
};

export default DiceCalculator;
