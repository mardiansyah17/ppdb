import {Button} from "@/libs/materialTailwind";
import Link from "next/link";

export default function Hero() {
    return <div className={`lg:px-28 min-h-screen mt-14 p-3`}>
        <h1 className={`text-[1.9rem] lg:text-[5rem] font-bold `}>MARI BERGABUNG BERSAMA KAMI</h1>
        <p className={`lg:w-[27rem]`}>Gabung di sekolah SMP IT Harapan Mulia, kami siap mendidik anak - anak generasi
            sekarang ini menjadi
            pribadi yang sholeh dan sholeha</p>

        <div className={`lg:flex lg:flex-row-reverse lg:items-center  mt-4 lg:mt-4`}>
            <div className={`flex text-center space-x-4 w-full justify-center`}>
                <div>
                    <h2 className={`text-xl text-start font-semibold`}>1000 +</h2>
                    <p>Pendaftar setiap tahunnya</p>
                </div>

                <div>
                    <h2 className={`text-xl text-start font-semibold`}>1000 +</h2>
                    <p>Siwa berprestasi</p>
                </div>
            </div>

            <div className={`mt-6 flex  space-x-3 w-full justify-center lg:justify-normal`}>
                <Link href={'/register'}>
                    <Button>Daftar Sekarang</Button>
                </Link>
                <Link href={'/login'}>

                    <Button variant={'outlined'}>Masuk</Button>
                </Link>
            </div>
        </div>
    </div>
}