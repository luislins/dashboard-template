import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/Context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
interface AreaProps {
  id:string
  currentColor:string
  borderColor: string,
  backgroundColor: string,
  data: {
    labels: string[];
    datasets: {
        fill: boolean;
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}
};

export function AreaChart({ data, currentColor} : AreaProps) {
  const { currentMode } = useStateContext();

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display:false
      },
      legend: {
        display: false
      },
      title: {
        display: false
      },
      responsive:true
    },
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    }, 
    elements: {
      line: {
        backgroundColor : currentMode === 'Dark' ? '#fff' : '#33373E',
        borderColor : currentColor
      }
  }
    
    
  };



  return (
    <Line options={options} data={data} />
  );
}