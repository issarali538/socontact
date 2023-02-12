import React from "react";
import { Bar } from "react-chartjs-2";
import {Char as ChartJS} from 'chart.js/auto';
import { Data } from "./Data";

const Chart = () => {

    const [chartData, setChartData] = React.useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
          }
        ]
      });

      return (
        <>
            <Bar  chartData={chartData}/>
        </>
      );
}
 
export default Chart;