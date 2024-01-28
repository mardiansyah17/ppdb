import React from 'react';
import {Input, Option, Select} from "@material-tailwind/react";

const DataSiswa = () => {
    return (
        <>
            <h1 className={`text-xl font-semibold`}>Data calon siswa</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pb-10`}>
                <Input type="text" label={'Nama lengkap'}/>
                <Select label={'Jenis kelamin'}>
                    <Option>Pilihan</Option>
                </Select>
                <Input type="text" label={'NISN'}/>
                <Input type="text" label={'NIK / NO. KITAS'}/>
                <div className={`space-y-4 sm:space-y-0 sm:flex sm:space-x-2`}>
                    <Input type="text" label={'Tempat lahir'}/>
                    <Input type="text" label={'Tanggal lahir'}/>
                </div>
                <Input type="text" label={'No Registrasi Akte Lahir'}/>
                <Select label={'Pilih Kewarganegaraan anda'}>
                    <Option>Pilihan</Option>
                </Select>
                <Select label={'Agama'}>
                    <Option>Pilihan</Option>
                </Select>

                <div className={`space-y-4 sm:space-y-0 sm:flex sm:space-x-2`}>
                    <Input type="text" label={'Tinggi badan'}/>
                    <Input type="text" label={'Berat badan'}/>
                </div>

                <Select label={'Golongan darah'}>
                    <Option>Pilihan</Option>
                </Select>

                <Select label={'Berkebutuhan Khusus'}>
                    <Option>Pilihan</Option>
                </Select>
                <Input type="text" label={'Penyakit Yang Diderita'}/>

                <Select label={'Kecamatan'}>
                    <Option>Pilihan</Option>
                </Select>

                <Select label={'Kelurahan'}>
                    <Option>Pilihan</Option>
                </Select>

                <Input type="text" label={'Alamat lengkap'}/>

                <div className={`sm:flex sm:space-x-3 max-w-full`}>
                    <Input type="text" label={'RT'}/>
                    <Input type="text" label={'RW'}/>
                    <Input type="text" label={'Kode pos'}/>

                </div>
                <Select label={'Tempat tinggal'}>
                    <Option>Pilihan</Option>
                </Select>

                <Select label={'Moda Transportasi'}>
                    <Option>Pilihan</Option>
                </Select>

                <div className={`sm:flex sm:space-x-3 max-w-full`}>
                    <Input type="text" label={'Jumlah saudara'}/>
                    <Input type="text" label={'Anak ke'}/>

                </div>
                <Input type="text" label={'Asal sekolah'}/>

            </div>

            <hr className="h-[0.1rem]  bg-[#D9D9D9] border-0 w-full "/>

        </>
    );
};

export default DataSiswa;