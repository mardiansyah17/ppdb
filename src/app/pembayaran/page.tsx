import Timeline from "@/components/Timeline";
import {Button, Radio} from "@/libs/materialTailwind";
import {LuFileUp} from "react-icons/lu";

export default function Page() {
    return (
        <div className={`p-3 sm:w-4/5 sm:mx-auto md:w-3/5`}>
            <Timeline className={"mx-auto"}/>

            <div className={`mt-10`}>

                <h2 className={`font-semibold text-xl mb-5`}>Upload Pembayaran</h2>
                <p>
                    Segera unggah pembayaran Anda sekarang dan nikmati pengalaman pembayaran yang lebih cerdas, lebih
                    cepat, dan lebih aman.
                </p>
                <hr className="h-[2px] my-8 bg-[#D9D9D9] border-0 w-full"/>
            </div>

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

            <Button fullWidth className={`mt-7`} color={'green'}>Konfirmasi</Button>
        </div>
    )
}