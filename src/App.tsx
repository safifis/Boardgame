import { useState } from "react";
import Betrayal from "./components/Betrayal";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Betrayal />
        </>
    );
}

export default App;
