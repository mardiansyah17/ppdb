import React from 'react';
import RegisterLayout from "@/components/Layouts/RegisterLayout";
import {Button, Radio} from "@/libs/materialTailwind";


const Page = () => {


    return (
        <RegisterLayout title={'Tes Potensi Akademik'}
                        description={'Silahkan Mengerjakan Soal dibawah ini dengan baik dan benar, jangan lupa baca bismillah yaa..'}>
            <h4 className="font-semibold">1. Apa fungsi utama jantung dalam tubuh
                manusia?</h4>
            <div className="flex flex-col">
                <Radio name="type" label="Pernapasan"/>
                <Radio name="type" label="Pencernaan"/>
                <Radio name="type" label="Peredaran darah"/>
                <Radio name="type" label="Pengeluaran limbah"/>
            </div>
            <div className={`flex justify-end mt-4 space-x-3`}>
                <Button variant={'outlined'}>Kembali</Button>
                <Button>Serahkan</Button>
            </div>
        </RegisterLayout>
    );
};

export default Page;