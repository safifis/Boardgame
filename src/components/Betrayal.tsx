import Navbar from "./Navbar";
import Dice from "./Dice";
import Fight from "./Fight";

const Betrayal = () => {
    return (
        <>
            <Navbar title={"Betrayal at House on the Hill "} />
            <div className="pt-20">
                <Dice />
                <Fight />
            </div>
        </>
    );
};

export default Betrayal;
