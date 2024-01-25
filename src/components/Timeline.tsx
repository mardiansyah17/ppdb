export default function Timeline(props: any) {
    return (
        <div className={`flex text-lg  w-fit ${props.className}`}>
            <div className={`flex items-center`}>
                <div
                    className={`border-2 rounded-full bg-primary-2 flex justify-center items-center text-[#FEFAFB] border-primary-2 size-10  font-semibold`}>
                    <p>1</p>
                </div>
                <hr className="h-[0.3rem] my-8 bg-primary-2 border-0 w-20"/>
            </div>
            <div className={`flex items-center`}>
                <div
                    className={`border-2 rounded-full flex justify-center items-center text-primary-2 border-primary-2 size-10  font-semibold`}>
                    <p>2</p>
                </div>
                <hr className="h-[0.3rem] my-8 bg-[#D9D9D9] border-0 w-20"/>
            </div>
            <div className={`flex items-center`}>
                <div
                    className={`border-2 rounded-full flex justify-center items-center text-primary-2 border-primary-2 size-10  font-semibold`}>
                    <p>3</p>
                </div>
            </div>
        </div>

    )
}