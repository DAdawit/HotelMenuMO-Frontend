"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ChartOptions,
} from "chart.js";
const generateRandomColors = (count: number): string[] => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    colors.push(`rgb(${r},${g},${b})`);
  }
  return colors;
};

import { Bar } from "react-chartjs-2";
import { SatatesMenuI } from "@/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement
);

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Active Users",
    },
  },
};

type PropsType = {
  chartData: SatatesMenuI[] | undefined;
  title: string;
};
const StatesChart: React.FC<PropsType> = ({ chartData, title }) => {
  // Transform the API data to fit the chart's data structure
  const labels = chartData?.map((item) => item?.name);
  const datasetData = chartData?.map((item) =>
    parseInt(item?.menuItemsCount, 10)
  ); // Convert menuItemsCount to numbers

  const backgroundColors = datasetData
    ? generateRandomColors(datasetData.length)
    : [];

  const chartdata = {
    labels,
    datasets: [
      {
        label: title,
        data: datasetData,
        backgroundColor: backgroundColors,
      },
    ],
  };
  return <Bar data={chartdata} />;
};

export default StatesChart;
