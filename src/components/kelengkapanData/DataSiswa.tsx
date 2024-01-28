import React from 'react';
import {Input, Option, Select} from "@material-tailwind/react";

const DataSiswa = () => {
    return (
        <>
            <h1 className={`text-xl font-semibold`}>Data calon siswa</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                <Input type="text" label={'Nama lengkap'}/>
                <Select label={'Jenis kelamin'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>
                <Input type="text" label={'NISN'}/>
                <Input type="text" label={'NIK / NO. KITAS'}/>
                <div className={`space-y-4 sm:space-y-0 sm:flex sm:space-x-2`}>
                    <Input type="text" label={'Tempat lahir'}/>
                    <Input type="text" label={'Tanggal lahir'}/>
                </div>
                <Input type="text" label={'No Registrasi Akte Lahir'}/>
                <Select label={'Pilih Kewarganegaraan anda'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>
                <Select label={'Agama'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>

                <div className={`space-y-4 sm:space-y-0 sm:flex sm:space-x-2`}>
                    <Input type="text" label={'Tinggi badan'}/>
                    <Input type="text" label={'Berat badan'}/>
                </div>

                <Select label={'Golongan darah'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>

                <Select label={'Berkebutuhan Khusus'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>
                <Input type="text" label={'Penyakit Yang Diderita'}/>

                <Select label={'Kecamatan'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>

                <Select label={'Kelurahan'}>
                    <Option>Laki - Laki</Option>
                    <Option>Perempuan</Option>
                </Select>

                <Input type="text" label={'Alamat lengkap'}/>

                <div className={`sm:grid-cols-3 sm:gap-4 sm:grid`}>
                    <Input type="text" label={'RT'}/>
                    <Input type="text" label={'RW'}/>
                    <Input type="text" label={'Kode pos'}/>

                </div>


            </div>
        </>
    );
};

export default DataSiswa;