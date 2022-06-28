import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, StackingColumnSeries  } from '@syncfusion/ej2-react-charts';

import {dataBudget, dataExpense} from '../../data/dummy';
import { useStateContext } from '../../contexts/Context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
interface StackedProps {
  width?: string
  height?: string
};

export function Stacked({ width, height } : StackedProps) {
  const { currentMode } = useStateContext();
  const options = {
    plugins: {
      legend: {
          labels: {
            font: {
                weight:"bold"
            },
            color: currentMode === 'Dark' ? '#fff' : '#33373E'
        },
        position: 'bottom' as const
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
      
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Budget',
        data: dataBudget,
        backgroundColor: '#404041',
      },
      {
        label: 'Expense',
        data: dataExpense,
        backgroundColor: '#00bdae',
      },
    ],
  };
  return (
    <Bar id="charts" width={width} height={height} options={options} data={data} />
  );
};