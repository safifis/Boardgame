import Navbar from "./Navbar";
import Dice from "./Dice";
import Fight from "./Fight";
import Hero from "./Hero";

const Betrayal = () => {
    return (
        <>
            <Navbar title={"Betrayal at House on the Hill "} />
            <Hero />
            <Dice />
            <Fight />
        </>
    );
};

export default Betrayal;
