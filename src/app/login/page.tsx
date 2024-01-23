'use client';

import LayoutAuthentication from "@/components/LayoutAuthentication";
import {Button, Checkbox, Input} from "@material-tailwind/react";

export default function Page() {
    return <LayoutAuthentication>
        <form action="" className={`mt-4`}>
            <div className={`mb-4`}>

                <Input label={"NISN/NIK"}/>
            </div>
            <div className={`mb-4`}>

                <Input label={"Password"}/>
            </div>
            <div className={`flex items-center `}>
                <Checkbox color={"green"} id={`remember`}/>
                <label for="remember">Ingat saya</label>
            </div>
            <Button fullWidth>Login</Button>
        </form>
    </LayoutAuthentication>
}