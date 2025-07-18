"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Métricas de Utilização de Recursos",
    },
  },
}

const labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"]

const data = {
  labels,
  datasets: [
    {
      label: "Utilização de Recursos Humanos (%)",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Utilização de Recursos Materiais (%)",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Eficiência de Recursos (%)",
      data: [45, 59, 72, 60, 77, 68, 79],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
}

export function ResourceMetricsChart() {
  return <Line options={options} data={data} />
}
