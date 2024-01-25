import Hero from "@/components/landingpage/Hero";
import Image from "next/image";
import Exclusive from "@/components/landingpage/Exclusive";
import {Accordion, AccordionBody, AccordionHeader} from "@/libs/materialTailwind";
import {FaArrowDown, FaArrowUp} from "react-icons/fa6";

export default function Home() {
    return (
        <div className={`pb-10`}>
            <Hero/>

            <div className={`grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6`}>
                <div
                    className={` h-60  relative rounded-lg overflow-hidden `}>
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

                <div className={`bg-primary-2 h-60 text-white  rounded-lg relative lg:flex lg:items-center`}>
                    <div className={`p-3  lg:basis-4/6   `}>
                        <h3 className={`lg:text-xl lg:mb-4`}>About us</h3>
                        <p className={`text-sm`}>Gabung bersama kita, mari masuk ke sekolah ini dengan berbagai program
                            program ungulan yang
                            telah kami tawarkan</p>
                    </div>
                    <Image src={'/img/org1.png'} alt={'about'} width={110} height={110}
                           className={'bottom-0 absolute right-0 lg:size-40'}/>
                </div>

            </div>

            <Exclusive/>
            <div className={`p-3 sm:px-10`}>
                <h2 className={`text-2xl font-semibold mt-10 mb-5`}>Pertanyaan yang Sering Diajukan</h2>
                <div>
                    <Accordion open={true} icon={<FaArrowDown/>}>
                        <AccordionHeader>cara mendaftar melalui PPDB?</AccordionHeader>
                        <AccordionBody>
                            Proses pendaftaran melalui PPDB biasanya dilakukan secara online. Calon siswa dan orang tua
                            dapat mengakses situs web resmi sekolah atau portal PPDB yang disediakan oleh pemerintah
                            daerah setempat untuk mengisi formulir pendaftaran.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={false} icon={<FaArrowUp/>}>
                        <AccordionHeader>cara mendaftar melalui PPDB?</AccordionHeader>
                        <AccordionBody>
                            Proses pendaftaran melalui PPDB biasanya dilakukan secara online. Calon siswa dan orang tua
                            dapat mengakses situs web resmi sekolah atau portal PPDB yang disediakan oleh pemerintah
                            daerah setempat untuk mengisi formulir pendaftaran.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={false} icon={<FaArrowUp/>}>
                        <AccordionHeader>cara mendaftar melalui PPDB?</AccordionHeader>
                        <AccordionBody>
                            Proses pendaftaran melalui PPDB biasanya dilakukan secara online. Calon siswa dan orang tua
                            dapat mengakses situs web resmi sekolah atau portal PPDB yang disediakan oleh pemerintah
                            daerah setempat untuk mengisi formulir pendaftaran.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={false} icon={<FaArrowUp/>}>
                        <AccordionHeader>cara mendaftar melalui PPDB?</AccordionHeader>
                        <AccordionBody>
                            Proses pendaftaran melalui PPDB biasanya dilakukan secara online. Calon siswa dan orang tua
                            dapat mengakses situs web resmi sekolah atau portal PPDB yang disediakan oleh pemerintah
                            daerah setempat untuk mengisi formulir pendaftaran.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>


        </div>
    );
}
