'use client';

import React from 'react';
import {Line} from "react-chartjs-2";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    ChartData,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title);

const GrafikTotal = ({data}: { data: ChartData<"line"> }) => {
    return (
        <div className={`bg-white rounded-md shadow-md p-2  w-[30rem]`}>
            <Line options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                    title: {
                        display: true,
                        text: 'Pendaftar pertahun',
                    },
                },
            }} data={data}/>

        </div>
    );
};

export default GrafikTotal;