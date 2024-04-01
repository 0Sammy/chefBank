import Link from "next/link";
import Image from "next/image";

//Import Needed Images
import ctaImg from "../../../public/Images/ctaImg.svg";
import ctaImg1 from "../../../public/Images/ctaImg1.svg";

const CTA = () => {
    return ( 
        <main className="inter relative mx-auto my-10 bg-secondary rounded-3xl w-4/5 py-[3rem] px-4 sm:py-[4rem] sm:px-6 md:py-[5rem] md:px-8 lg:py-[6rem] lg:px-10 xl:px-12 2xl:px-16">
           <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] text-[#F2F2F2] mx-auto">Join The Financial Revolution With Keystone National Bank Today.</p> 
            <div className="flex justify-center mt-10">
                <Link href="/create" className=" bg-white px-6 md:px-8 xl:px-10 py-3 text-sm md:text-base rounded-lg text-secondary border border-white hover:bg-inherit hover:text-white duration-500">Sign up</Link>
            </div>
            <Image src={ctaImg} alt="Scribble" className="absolute bottom-4 left-8 size-[15%]"/>
            <Image src={ctaImg1} alt="Scribble" className="absolute top-6 right-8"/>
        </main>
     );
}
 
export default CTA;