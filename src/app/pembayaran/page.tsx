import {Radio} from "@/libs/materialTailwind";
import {LuFileUp} from "react-icons/lu";
import RegisterLayout from "@/components/Layouts/RegisterLayout";
import React from "react";

export default function Page() {
    return (
        <RegisterLayout title="Upload pembayaran"
                        description={"Segera unggah pembayaran Anda sekarang dan nikmati pengalaman pembayaran yang lebih cerdas, lebih cepat, dan lebih aman."}>
            <div className={`mb-5`}>
                <h3>Pilih Opsi Pembayaran</h3>
                <div className={`mt-5`}>
                    <Radio name="type" label="Lunas"/>
                    <Radio name="type" label="Pembayaran DP 50%"/>
                </div>
            </div>
            <div>
                <h3>Upload Bukti Pembayaran</h3>
                <div className={`mt-5`}>
                    <div
                        className={`flex items-center space-x-2 text-primary-2 bg-white w-44 h-11 justify-center rounded-lg`}>
                        <LuFileUp/>
                        <span>Upload disini</span>
                    </div>
                </div>
            </div>

        </RegisterLayout>
    )
}