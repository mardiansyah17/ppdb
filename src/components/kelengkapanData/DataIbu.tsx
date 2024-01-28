import React from 'react';
import {Input, Option, Select} from "@material-tailwind/react";

const DataIbu = () => {
    return (
        <>
            <h1 className={`text-xl font-semibold`}>Data Ibu Kandung Calon Siswa</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                <Input type="text" label={'Nama lengkap'}/>
                <Input type="text" label={'NIK'}/>
                <div className={`space-y-4 sm:space-y-0 sm:flex sm:space-x-2`}>
                    <Input type="text" label={'Tempat lahir'}/>
                    <Input type="text" label={'Tanggal lahir'}/>
                </div>
                <Select label={'Pendidikan'}>
                    <Option>Pilihan</Option>
                </Select>
                <Input type="text" label={'Nomor telepon'}/>
                <Select label={'Pekerjaan'}>
                    <Option>Pilihan</Option>
                </Select>
                <Select label={'Penghasilan'}>
                    <Option>Pilihan</Option>
                </Select>
            </div>
        </>
    );
};

export default DataIbu;