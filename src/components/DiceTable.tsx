const DiceTable = () => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs  uppercase">
                    <th scope="col">Value</th>
                    <th scope="col">1 Dice</th>
                    <th scope="col">2 Dice</th>
                    <th scope="col">3 Dice</th>
                    <th scope="col">4 Dice</th>
                    <th scope="col">5 Dice</th>
                    <th scope="col">6 Dice</th>
                    <th scope="col">7 Dice</th>
                    <th scope="col">8 Dice</th>
                </thead>
                <tr>
                    <th scope="row">{">"}=0</th>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=1</th>
                    <td>67%</td>
                    <td>89%</td>
                    <td>96%</td>
                    <td>99%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=2</th>
                    <td>33%</td>
                    <td>67%</td>
                    <td>85%</td>
                    <td>94%</td>
                    <td>98%</td>
                    <td>99%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=3</th>
                    <td></td>
                    <td>33%</td>
                    <td>63%</td>
                    <td>81%</td>
                    <td>91%</td>
                    <td>96%</td>
                    <td>98%</td>
                    <td>99%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=4</th>
                    <td></td>
                    <td>11%</td>
                    <td>37%</td>
                    <td>62%</td>
                    <td>79%</td>
                    <td>89%</td>
                    <td>95%</td>
                    <td>98%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=5</th>
                    <td></td>
                    <td></td>
                    <td>15%</td>
                    <td>38%</td>
                    <td>60%</td>
                    <td>77%</td>
                    <td>87%</td>
                    <td>94%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=6</th>
                    <td></td>
                    <td></td>
                    <td>3.7%</td>
                    <td>19%</td>
                    <td>40%</td>
                    <td>60%</td>
                    <td>75%</td>
                    <td>86%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=7</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>6.2%</td>
                    <td>21%</td>
                    <td>40%</td>
                    <td>59%</td>
                    <td>74%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=8</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1.2%</td>
                    <td>8.6%</td>
                    <td>23%</td>
                    <td>41%</td>
                    <td>58%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=9</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2.5%</td>
                    <td>11%</td>
                    <td>25%</td>
                    <td>42%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=10</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0.4%</td>
                    <td>3.8%</td>
                    <td>13%</td>
                    <td>26%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=11</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1%</td>
                    <td>5.2%</td>
                    <td>14%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=12</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0.1%</td>
                    <td>1.6%</td>
                    <td>6.4%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=13</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0.4%</td>
                    <td>2.4%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=14</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0.05%</td>
                    <td>0.7%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=15</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0.1%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=16</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0.02%</td>
                </tr>
            </table>
        </div>
    );
};

export default DiceTable;
