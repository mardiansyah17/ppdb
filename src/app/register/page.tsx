'use client';

import LayoutAuthentication from "@/components/LayoutAuthentication";
import {Button, Checkbox, Input} from "@material-tailwind/react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    return <LayoutAuthentication>
        <form action="" className={`mt-4`}>
            <div className={`mb-4`}>

                <Input label={"NISN/NIK"}/>
            </div>

            <div className={`mb-4`}>

                <Input label={"Nama lengkap"}/>
            </div>
            <div className={`mb-4`}>

                <Input label={"Password"}/>
            </div>
            <div className={`flex justify-between items-center mb-12 text-xs`}>
                <div className={`flex items-center `}>
                    <Checkbox color={"green"} id={`remember`}/>
                    <label htmlFor={'remember'} className={`text-primary-1`}>Ingat saya</label>
                </div>
                <Link href={'/login/forgot-password'}>Lupa password</Link>
            </div>
            <Button fullWidth type={'button'} onClick={() => router.push('/pembayaran')}>Daftar</Button>
        </form>

        <p className={`text-sm mt-12 text-center`}>Tidak punya akun? <Link href="/login">Login</Link></p>
    </LayoutAuthentication>
}