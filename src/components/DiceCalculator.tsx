import { useState, ChangeEvent } from "react";

const DiceCalculator = () => {
    const [number, setNumber] = useState(1);
    const [showImage, setShowImage] = useState(false);

    const handleNumber = (event: ChangeEvent<HTMLSelectElement>) => {
        setNumber(Number(event.target.value));
        setShowImage(false);
    };

    const handleShowImage = () => {
        setShowImage(true);
    };

    return (
        <div className="dice-calculator max-w-md min-w-96 p-4">
            <p>Select your dice value:</p>
            <select value={number} onChange={handleNumber}>
                {Array.from({ length: 8 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <button onClick={handleShowImage}>Show Probability</button>
            {showImage && (
                <img
                    src={`/src/assets/${number}.png`}
                    alt={`Dice showing ${number}`}
                />
            )}
        </div>
    );
};

export default DiceCalculator;
