'use client';
import React from 'react';
import RegisterLayout from "@/components/Layouts/RegisterLayout";
import DataSiswa from "@/components/kelengkapanData/DataSiswa";
import DataAyah from "@/components/kelengkapanData/DataAyah";
import DataIbu from "@/components/kelengkapanData/DataIbu";
import {LuFileUp} from "react-icons/lu";
import {Button} from "@material-tailwind/react";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    return (
        <RegisterLayout title={'Isi Formulir Data Calon Siswa'}
                        description={'Isilah formulir data calon siswa sekarang dan mulailah perjalanan pendidikan Anda dengan langkah yang mantap menuju keberhasilan! 🎓✨'}>

            <form action="" className={`space-y-4`}>
                <DataSiswa/>
                <DataAyah/>
                <DataIbu/>

                <div>
                    <h1 className={`text-xl font-semibold mb-3`}>Data calon siswa</h1>

                    <p>Upload berkas berupa surat Perjanjian dan Raport Sebelumnya</p>
                </div>
                <div className={`flex space-x-3 mt-3`}>
                    <Button
                        fullWidth
                        className={`flex items-center gap-3 justify-center text-primary-2 border border-primary-2`}
                        color={'white'}>
                        <LuFileUp size={20}/>
                        <span>Upload</span>
                    </Button>
                    <Button
                        fullWidth
                        className={`flex items-center gap-3 justify-center text-primary-2 border border-primary-2`}
                        color={'white'}>
                        <LuFileUp size={20}/>
                        <span>Upload</span>
                    </Button>
                </div>
                <Button fullWidth className={`mt-7`} color={'green'} type={'button'}
                        onClick={() => router.push('/')}>Konfirmasi</Button>
            </form>

        </RegisterLayout>
    );
};

export default Page;