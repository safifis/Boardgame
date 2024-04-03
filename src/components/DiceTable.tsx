const DiceTable = () => {
    return (
        <div className="relative overflow-x-auto max-w-2xl min-w-96 p-4">
            <table className=" font-mono w-full text-sm text-center">
                <thead className="text-xs  uppercase">
                    <th scope="col"></th>
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
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=1</th>
                    <td className="px-2 py-1">67%</td>
                    <td className="px-2 py-1">89%</td>
                    <td className="px-2 py-1">96%</td>
                    <td className="px-2 py-1">99%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=2</th>
                    <td className="px-2 py-1">33%</td>
                    <td className="px-2 py-1">67%</td>
                    <td className="px-2 py-1">85%</td>
                    <td className="px-2 py-1">94%</td>
                    <td className="px-2 py-1">98%</td>
                    <td className="px-2 py-1">99%</td>
                    <td className="px-2 py-1">100%</td>
                    <td className="px-2 py-1">100%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=3</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">33%</td>
                    <td className="px-2 py-1">63%</td>
                    <td className="px-2 py-1">81%</td>
                    <td className="px-2 py-1">91%</td>
                    <td className="px-2 py-1">96%</td>
                    <td className="px-2 py-1">98%</td>
                    <td className="px-2 py-1">99%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=4</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">11%</td>
                    <td className="px-2 py-1">37%</td>
                    <td className="px-2 py-1">62%</td>
                    <td className="px-2 py-1">79%</td>
                    <td className="px-2 py-1">89%</td>
                    <td className="px-2 py-1">95%</td>
                    <td className="px-2 py-1">98%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=5</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">15%</td>
                    <td className="px-2 py-1">38%</td>
                    <td className="px-2 py-1">60%</td>
                    <td className="px-2 py-1">77%</td>
                    <td className="px-2 py-1">87%</td>
                    <td className="px-2 py-1">94%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=6</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">3.7%</td>
                    <td className="px-2 py-1">19%</td>
                    <td className="px-2 py-1">40%</td>
                    <td className="px-2 py-1">60%</td>
                    <td className="px-2 py-1">75%</td>
                    <td className="px-2 py-1">86%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=7</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">6.2%</td>
                    <td className="px-2 py-1">21%</td>
                    <td className="px-2 py-1">40%</td>
                    <td className="px-2 py-1">59%</td>
                    <td className="px-2 py-1">74%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=8</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">1.2%</td>
                    <td className="px-2 py-1">8.6%</td>
                    <td className="px-2 py-1">23%</td>
                    <td className="px-2 py-1">41%</td>
                    <td className="px-2 py-1">58%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=9</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">2.5%</td>
                    <td className="px-2 py-1">11%</td>
                    <td className="px-2 py-1">25%</td>
                    <td className="px-2 py-1">42%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=10</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">0.4%</td>
                    <td className="px-2 py-1">3.8%</td>
                    <td className="px-2 py-1">13%</td>
                    <td className="px-2 py-1">26%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=11</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">1%</td>
                    <td className="px-2 py-1">5.2%</td>
                    <td className="px-2 py-1">14%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=12</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">0.1%</td>
                    <td className="px-2 py-1">1.6%</td>
                    <td className="px-2 py-1">6.4%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=13</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">0.4%</td>
                    <td className="px-2 py-1">2.4%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=14</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">0.05%</td>
                    <td className="px-2 py-1">0.7%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=15</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">0.1%</td>
                </tr>
                <tr>
                    <th scope="row">{">"}=16</th>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1">0.02%</td>
                </tr>
            </table>
        </div>
    );
};

export default DiceTable;
