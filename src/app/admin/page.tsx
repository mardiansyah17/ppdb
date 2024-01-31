import React from 'react';

import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip
} from "chart.js";
import GrafikTotal from "@/components/admin/dashboard/GrafikTotal";
import GrafikPerkelamin from "@/components/admin/dashboard/GrafikPerkelamin";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const labels = ['2017', '2018', '2019', '2020', '2021', '2022'];

const man = [800, 200, 500, 400, 400, 400];
const women = [200, 600, 400, 500, 600, 700];

// jumlahkan 2 array
const total = man.map((value, index) => value + women[index]);

const dataPertahun = {
    labels,
    datasets: [
        {
            label: 'Siswa baru pertahun',
            data: total,
            borderColor: 'rgb(99,143,255)',
            backgroundColor: 'rgba(99,195,255,0.5)',
        },

    ],
};

const dataPerkelamin = {
    labels,
    datasets: [
        {
            label: 'Laki - laki',
            data: man,
            borderColor: 'rgb(125,255,99)',
            backgroundColor: 'rgba(117,255,99,0.5)',
        },
        {
            label: 'Wanita',
            data: women,
            borderColor: 'rgb(80,216,252)',
            backgroundColor: 'rgba(255,93,128,0.5)',
        },

    ],
};

const Page = () => {
    return (
        <div className={` flex flex-col sm:flex-row gap-2 sm:w-[98%]`}>
            <GrafikTotal data={dataPertahun}/>
            <GrafikPerkelamin data={dataPerkelamin}/>
        </div>
    );
};

export default Page;