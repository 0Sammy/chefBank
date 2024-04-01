import Image from "next/image";

//Import Needed Images
import contact1 from "../../../public/Images/contact1.svg";
import contact from "../../../public/Images/contact.svg";
import contact2 from "../../../public/Images/contact2.svg";
import contact3 from "../../../public/Images/contact3.svg";

const AboutUsHeroSection = () => {
    return ( 
        <main className="py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-center inter">
            <div className="md:w-[49%] flex gap-x-3 md:gap-x-5 justify-center">
                <div className="flex flex-col gap-y-3 md:gap-y-5 mt-8">
                    <Image src={contact1} alt="Image" />
                    <Image src={contact} alt="Image" />
                </div>
                <div className="flex flex-col gap-y-3 md:gap-y-5">
                    <Image src={contact2} alt="Image" />
                    <Image src={contact3} alt="Image" />
                </div>
            </div>
            <div className="md:w-[49%] flex flex-col items-center gap-y-10">
                <p className="text-[#020100] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">What is <span className="text-primary"> Keystone National Bank</span></p>
                    <p className="text-[#48484A] text-xs md:text-sm xl:text-base w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">At Keystone National Bank, we believe in redefining the banking experience by putting our customers first. With a commitment to innovation, integrity, and personalized service, we strive to empower individuals and businesses to achieve their financial goals.</p>
            </div>
        </main>
     );
}
 
export default AboutUsHeroSection;