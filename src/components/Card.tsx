interface Props {
    title: string;
    number: number;
    setNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Card = ({ title, number, setNumber }: Props) => {
    const minusNumber = () => {
        if (number >= 2) {
            setNumber(number - 1);
        }
    };

    const plusNumber = () => {
        if (number <= 7) {
            setNumber(number + 1);
        }
    };

    return (
        <div className=" p-8 w-80 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center p-2">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Player Image"
                />
                <h3 className="uppercase mb-1 text-xl font-medium text-gray-900">
                    {title} Dice
                </h3>
            </div>
            <div className="flex items-center justify-center p-2">
                <button
                    type="button"
                    onClick={minusNumber}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M6 12h12"
                        />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
                <span className="text-2xl text-black m-4 mr-6">{number}</span>
                <button
                    type="button"
                    onClick={plusNumber}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M12 5v14m-7-7h14"
                        />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>
        </div>
    );
};

export default Card;
