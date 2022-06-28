import React from 'react'
import { SparklineType, SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);


interface SparkLineProps {
  id?: string
  currentColor?: string
};


export function SparkLine({ id, currentColor } : SparkLineProps) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: currentColor,
        backgroundColor: currentColor,
      }
    ],
  };
  return (
    <Line id={id} options={options} data={data} />
  );
}