'use client';
import React from 'react';
import {Bar} from "react-chartjs-2";
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

const GrafikPerkelamin = ({data}: { data: ChartData<'bar'> }) => {
    return (
        <div>
            <div className={`bg-white rounded-md shadow-md p-2  w-[30rem]`}>
                <Bar options={
                    {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top' as const,
                            },
                            title: {
                                display: true,
                                text: 'Berdasarkan jenis kelamin',
                            },
                        },
                    }
                } data={data}/>

            </div>
        </div>
    );
};

export default GrafikPerkelamin;