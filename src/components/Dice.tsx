import DiceCalculator from "./DiceCalculator";
import DiceTable from "./DiceTable";

const Dice = () => {
    return (
        <div className="flex flex-col mt-10">
            <h2 className=" font-body text-center text-2xl font-bold mb-4 px-4">
                Dice Probability Calculator
            </h2>
            <div className="flex flex-col justify-between sm:flex-row sm:justify-center max-w-screen-xl items-center mx-auto">
                <div className="flex-1 md:mr-8">
                    <DiceTable />
                </div>
                <div className="flex-1 md:ml-8">
                    <DiceCalculator />
                </div>
            </div>
        </div>
    );
};
export default Dice;
