import Image from "next/image";

export default function Exclusive() {
    return (
        <div className={`mt-12 text-white bg-primary-3 p-3 `}>
            <div className={`text-center mb-4 `}>
                <h2 className={`text-2xl mb-6`}>Exclusive Programs</h2>
                <p>Gabung di program unggulan yang kami tawakan dibawah ini,
                    setiap program tentunya memiliki keunggulan masing masing</p>
            </div>
            <div className={`gap-5 flex flex-col sm:flex-row items-center sm:justify-center sm:flex-wrap`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>

    )
}

function Card() {
    return <div
        className={`text-center flex flex-col items-center w-[20rem] sm:w-[15rem] lg:w-[20rem]  justify-center bg-[#007A3D] space-y-5 p-4 rounded-lg`}>

        <Image src={'/svg/bintang.svg'} alt={'icon'} width={50} height={50}/>

        <h3>Program bintang</h3>

        <p>
            Gabung program bintang, dengan mengikuti ini ana akan menjadi superstar di lingkungan sekolah
        </p>
    </div>
}