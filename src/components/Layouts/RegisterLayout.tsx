import React, {ReactNode} from 'react';
import Timeline from "@/components/Timeline";

const RegisterLayout = ({children, description, title}: IRegisterLayout) => {
    return (
        <div className={`p-3  sm:w-[90%] sm:mx-auto lg:w-3/5 bg-white sm:shadow-md sm:my-3 sm:rounded-md`}>
            <Timeline className={"mx-auto"}/>

            <div className={`mt-10`}>

                <h2 className={`font-semibold text-xl mb-5`}>{title}</h2>
                <p>
                    {description}
                </p>
                <hr className="h-[2px] my-8 bg-[#D9D9D9] border-0 w-full"/>
            </div>

            <div>
                {children}
            </div>
        </div>

    );
};

export default RegisterLayout;

interface IRegisterLayout {
    children: ReactNode;
    title: string;
    description: string;

}