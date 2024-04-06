import Image from "next/image";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";

const Review = () => {
    return ( 
        <main>
            <div className="flex gap-x-1">
                <Image src={logo} alt="Keystone National Bank Logo" priority={true} className="size-9 sm:size-12 xl:size-14"/>
                <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                    <p>Keystone</p>
                    <p className="-mt-[0.3rem]">National</p>
                    <p className="-mt-[0.3rem]">Bank</p>
                </div>
            </div>
            <div>
                <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">
                    Application under review
                 </p>
            </div>
            <div className="font-medium text-xs sm:text-sm xl:text-base mt-10">
                <p>We have received your application and It is being reviewed. You will receive an email after review. If your application is accepted you can proceed to log in.
               <br /><br /> This might take 1 - 3 business days.</p>
            </div>
        </main>
     );
}
 
export default Review;