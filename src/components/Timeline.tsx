export default function Timeline() {
    return (
        <div className={`flex`}>
            <div className={`flex items-center`}>
                <div
                    className={`border-2 rounded-full flex justify-center items-center text-primary-2 border-primary-2 size-10 text-2xl font-semibold`}>
                    <p>1</p>
                </div>
                <hr className="h-[0.3rem] my-8 bg-primary-2 border-0 w-20"/>
            </div>
            <div className={`flex items-center`}>
                <div
                    className={`border-2 rounded-full flex justify-center items-center text-primary-2 border-primary-2 size-10 text-2xl font-semibold`}>
                    <p>2</p>
                </div>
                <hr className="h-[0.3rem] my-8 bg-gray-200 border-0 w-20"/>
            </div>
            <div className={`flex items-center`}>
                <div
                    className={`border-2 rounded-full flex justify-center items-center text-primary-2 border-primary-2 size-10 text-2xl font-semibold`}>
                    <p>3</p>
                </div>
            </div>
        </div>
        
    )
}