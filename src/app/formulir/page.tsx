'use client';
import React from 'react';
import RegisterLayout from "@/components/Layouts/RegisterLayout";
import DataSiswa from "@/components/kelengkapanData/DataSiswa";

const Page = () => {
    return (
        <RegisterLayout title={'Isi Formulir Data Calon Siswa'}
                        description={'Isilah formulir data calon siswa sekarang dan mulailah perjalanan pendidikan Anda dengan langkah yang mantap menuju keberhasilan! 🎓✨'}>

            <form action="" className={``}>
                <DataSiswa/>
            </form>

        </RegisterLayout>
    );
};

export default Page;