import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ActivityChart() {

  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { 
        label: 'Checkups',
        data: [3, 2, 3, 1, 4, 2, 1],
        backgroundColor: '#30C6FF',
        barThickness: 8,
      },
      {
        label: 'Appointments',
        data: [2, 3, 1, 3, 2, 4, 2],
        backgroundColor: '#A66DD4',
        barThickness: 8,
      },
      {
        label: 'Follow-ups',
        data: [1, 1, 2, 2, 3, 1, 3],
        backgroundColor: '#6AE0A7',
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: {
        stacked: false,
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
  };

  return (
    <div style={{ padding: "14px" }}>
      <h3 style={{ marginBottom: '3px' }}>Activity</h3>
      <Bar data={data} options={options} />

    </div >
  );
};

export default ActivityChart;
