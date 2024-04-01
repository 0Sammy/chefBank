import Image from "next/image";

//Import Needed Images
import contact4 from "../../../public/Images/contact4.svg";


const WhatSetsUsApart = () => {
    return ( 
        <main className="py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-center inter">
            <div className="md:w-[49%] flex justify-center">
                <Image src={contact4} alt="Image" />
            </div>
            <div className="md:w-[49%] flex flex-col items-center gap-y-10">
                <p className="text-[#020100] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">What Sets Us Apart</p>
                <p className="text-[#48484A] text-xs md:text-sm xl:text-base w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">At KNB, we understand that each customer is unique, which is why we take a personalized approach to banking. Whether you&apos;re opening your first savings account, buying your dream home, or expanding your business, we&apos;re here to provide guidance, support, and solutions tailored to your needs.</p>
            </div>
        </main>
     );
}
 
export default WhatSetsUsApart;