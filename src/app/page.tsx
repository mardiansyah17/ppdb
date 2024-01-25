import Hero from "@/components/landingpage/Hero";
import Image from "next/image";
import Exclusive from "@/components/landingpage/Exclusive";

export default function Home() {
    return (
        <div className={`pb-10`}>
            <Hero/>

            <div className={`grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10`}>
                <div
                    className={` h-60 w-72 sm:w-96 relative rounded-lg overflow-hidden `}>
                    <div
                        className={`bg-[url('/img/landing1.png')] absolute top-0 w-full h-full bg-center bg-cover`}>
                        <span className="w-full h-full absolute opacity-65 bg-black"></span>

                    </div>
                    <div className={`relative text-white p-3 h-full flex flex-col justify-between`}>
                        <h3>PPDB GELOMBANG III
                            1 Februari - 31 Maret 2024</h3>
                        <h4 className={`text-sm`}>Penerimaan Peserta Didik Baru (PPDB) SMA IT HARAPAN MULIA PALEMBANG
                            TAHUN AJARAN
                            2024/2025</h4>
                    </div>
                </div>

                <div className={`bg-primary-2 h-60 text-white w-72 sm:w-96 rounded-lg relative`}>
                    <div className={`p-3`}>
                        <h3>About us</h3>
                        <p className={`text-sm`}>Gabung bersama kita, mari masuk ke sekolah ini dengan berbagai program
                            program ungulan yang
                            telah kami tawarkan</p>
                    </div>
                    <Image src={'/img/org1.png'} alt={'about'} width={110} height={110}
                           className={'bottom-0 absolute right-0'}/>
                </div>
            </div>

            <Exclusive/>
        </div>
    );
}
