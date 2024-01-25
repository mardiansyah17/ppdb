import {Button} from "@/libs/materialTailwind";
import Link from "next/link";

export default function Hero() {
    return <div className={`p-3 flex flex-col items-center justify-center min-h-screen`}>
        <h1 className={`text-4xl font-bold mb-6`}>MARI BERGABUNG BERSAMA KAMI</h1>
        <p>Gabung di sekolah SMP IT Harapan Mulia, kami siap mendidik anak - anak generasi sekarang ini menjadi
            pribadi yang sholeh dan sholeha</p>

        <div className={`flex text-center space-x-4 mt-4`}>
            <div>
                <h2 className={`text-lg font-semibold`}>1000 +</h2>
                <p>Pendaftar setiap tahunnya</p>
            </div>

            <div>
                <h2 className={`text-lg font-semibold`}>1000 +</h2>
                <p>Siwa berprestasi</p>
            </div>
        </div>

        <div className={`mt-6 flex justify-center space-x-3 w-full`}>
            <Link href={'/register'}>
                <Button>Daftar Sekarang</Button>
            </Link>
            <Link href={'/login'}>

                <Button variant={'outlined'}>Masuk</Button>
            </Link>
        </div>
    </div>
}