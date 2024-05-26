import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const PatientChart = ({ patientData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    tension: 0.5,
    pointRadius: 6,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        // text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 8,
        },
      },
      x: { grid: { display: false } },
    },
  };

  const labels = [
    {
      month: "Oct,2023",
      Systolic:
        patientData?.diagnosis_history?.[5]?.blood_pressure?.systolic?.value,
      Diastolic:
        patientData?.diagnosis_history?.[5]?.blood_pressure?.diastolic?.value,
    },
    {
      month: "Nov.2023",
      Systolic:
        patientData?.diagnosis_history?.[4]?.blood_pressure?.systolic?.value,
      Diastolic:
        patientData?.diagnosis_history?.[4]?.blood_pressure?.diastolic?.value,
    },
    {
      month: "Dec.2023",
      Systolic:
        patientData?.diagnosis_history?.[3]?.blood_pressure?.systolic?.value,
      Diastolic:
        patientData?.diagnosis_history?.[3]?.blood_pressure?.diastolic?.value,
    },
    {
      month: "Jan.2024",
      Systolic:
        patientData?.diagnosis_history?.[2]?.blood_pressure?.systolic?.value,
      Diastolic:
        patientData?.diagnosis_history?.[2]?.blood_pressure?.diastolic?.value,
    },
    {
      month: "Feb.2024",
      Systolic:
        patientData?.diagnosis_history?.[1]?.blood_pressure?.systolic?.value,
      Diastolic:
        patientData?.diagnosis_history?.[1]?.blood_pressure?.diastolic?.value,
    },
    {
      month: "March.2024",
      Systolic:
        patientData?.diagnosis_history?.[0]?.blood_pressure?.systolic?.value,
      Diastolic:
        patientData?.diagnosis_history?.[0]?.blood_pressure?.diastolic?.value,
    },
  ];
  const data = {
    labels: labels.map((item) => item.month),
    datasets: [
      {
        // label: "Dataset 1",
        data: labels.map((item) => item.Diastolic),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
      },
      {
        // label: "Dataset 2",
        data: labels.map((item) => item.Systolic),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default PatientChart;
