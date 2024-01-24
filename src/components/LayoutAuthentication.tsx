import {ReactNode} from "react";
import Image from "next/image";

export default function LayoutAuthentication({children}: { children: ReactNode }) {
    return (
        <div className={`bg-[#F1F3F5] min-h-screen flex flex-col justify-center items-center lg:flex-row`}>
            <div className={`p-5 lg:basis-[55%] lg:px-20`}>
                <h1 className={`text-primary-2 text-xl mb-4`}>Selamat Datang di Portal SMP Islam Terpadu Harapan Mulia
                    Palembang!🌙
                    📚</h1>
                <p className={`text-sm text-[#005F2F]`}>Langkah pertama menuju pengetahuan dan kebijaksanaan dimulai di
                    sini. Mari
                    masuki dunia pendidikan
                    yang memadukan keislaman dan keunggulan akademis.</p>
                {children}
            </div>
            <div className={`relative h-screen hidden lg:block basis-[45%] overflow-hidden`}>
                <Image fill src={`/img/auth.png`} alt={'login'} className={'rounded-l-[50px]  '}/>
            </div>
        </div>
    )
}