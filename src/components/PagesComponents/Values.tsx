const Values = () => {
    return ( 
        <main className="bg-[#FBF1EC] py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 inter">
            <p className="text-[#020100] text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Our Values</p>
            <div className="flex justify-center flex-wrap gap-5 xl:gap-10 mt-14">
                <div className="bg-white w-[30%] min-w-[20rem] h-60 rounded-lg group flex flex-col items-center p-4 border border-[#F2D2C3]  text-center hover:bg-primary duration-500">
                    <p className="mt-6 text-base sm:text-lg md:text-xl xl:text-2xl font-bold group-hover:text-white duration-500 text-[#1C1F33]">What Sets Us Apart</p>
                    <p className="text-xs md:text-sm xl:text-base mt-10 group-hover:text-white duration-500 text-[#3A3A3C] w-[80%]">At KNB, we tailor banking to your unique needs, whether it&apos;s your first account or expanding your business.</p>
                </div>
                <div className="bg-white w-[30%] min-w-[20rem] h-60 rounded-lg group flex flex-col items-center p-4 border border-[#F2D2C3] inter text-center hover:bg-primary duration-500">
                    <p className="mt-6 text-base sm:text-lg md:text-xl xl:text-2xl font-bold group-hover:text-white duration-500 text-[#1C1F33]">Our Mission</p>
                    <p className="text-xs md:text-sm xl:text-base mt-10 group-hover:text-white duration-500 text-[#3A3A3C]">At KNB, our mission is to provide innovative banking solutions that enhance your financial well-being. We&apos;re your trusted partner, offering tailored products and exceptional service.</p>
                </div>
                <div className="bg-white w-[30%] min-w-[20rem] h-60 rounded-lg group flex flex-col items-center p-4 border border-[#F2D2C3] inter text-center hover:bg-primary duration-500">
                    <p className="mt-6 text-base sm:text-lg md:text-xl xl:text-2xl font-bold group-hover:text-white duration-500 text-[#1C1F33]">Our Commitment to You</p>
                    <p className="text-xs md:text-sm xl:text-base mt-10 group-hover:text-white duration-500 text-[#3A3A3C]">As your financial partner, we&apos;re dedicated to transparency, reliability, and excellence. With a wide range of banking services and a focus on your satisfaction, your success is our priority.</p>
                </div>
            </div>
        </main>
     );
}
 
export default Values;