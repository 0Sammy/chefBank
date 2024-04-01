"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

//Import Needed Images
import logo from "../../../public/Images/logoWhite.svg";
import Link from "next/link";

//Need Icons
import { LocationTick, MessageTick } from "iconsax-react";


const Footer = () => {
    const [loading, setLoading] = useState<boolean>(false)

    //Form Details
    const [enteredEmail, setEnteredEmail] = useState<string>("")

    //On Submit Function
    const onSubmit = (event: FormEvent) => {

        event.preventDefault()
        setLoading(true)

        if (enteredEmail.length >= 6) {
            setLoading(false)
            toast.success("You subscribed successfully.")
            setEnteredEmail("")
        }

        if (enteredEmail.length <= 5){
            setLoading(false)
            toast.error("Please enter a valid email address.")
            setEnteredEmail("")
        }

    }
    return ( 
        <main className="mt-20 bg-[#020100] rounded-tl-[2rem] rounded-tr-[2rem] py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row sm:items-center sm:justify-between">
                <Image src={logo} alt="Keystone National Bank Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                <form onSubmit={onSubmit} className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-3 text-xs md:text-sm xl:text-base">
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={enteredEmail}
                        className="bg-inherit border-2 border-[#3C3C434D] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none text-white"
                        placeholder="Email Address"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEnteredEmail(e.target.value)
                        }
                      />
                    <input type="submit" value={loading ? "Subscribing..." : "Subscribe to newsletter"} className="px-4 md:px-6 xl:px-8 cursor-pointer bg-white py-3 text-sm md:text-base rounded-lg text-[#111114] border border-white hover:bg-inherit hover:text-white duration-500"/>
                </form>
            </div>
            <div className="flex gap-x-5 mt-6 text-xs md:text-sm xl:text-base">
                <Link href="features" className="text-white hover:text-primary duration-500" prefetch={true}>Features</Link>
                <Link href="aboutus" className="text-white hover:text-primary duration-500" prefetch={true}>About us</Link>
                <Link href="contactus" className="text-white hover:text-primary duration-500" prefetch={true}>Contact us</Link>
            </div>
            <div className="border-t border-[#344054] my-10"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-white text-xs md:text-sm xl:text-base">
                <div className="sm:w-[49%]">
                   <p className="font-bold w-[95%] md:w-[80%] lg:w-[70%] xl:w-[75%]">Contact Information</p>
                    <p className="mt-2 w-[95%] md:w-[80%] xl:w-[75%]">Should you need assistance or have any questions.</p> 
                </div>
                
                <div className="flex flex-col gap-y-5 mt-6 sm:w-[49%]">
                    <div className="flex gap-x-1">
                        <LocationTick size="20" color="#FF8A65" className="shrink-0"/>
                       <p>3311 Azolla At Orlando, FL, 32808.</p> 
                    </div>
                    <div className="flex gap-x-1">
                        <MessageTick size="20" color="#FF8A65" className="shrink-0"/>
                       <p>Hello@Keystonenationalbank.com</p> 
                    </div>
                    
                </div>
            </div>
            <p className="text-xs md:text-sm xl:text-base text-white mt-6">Copyright &copy; 2024 Keystone National Bank. All rights reserved</p>
        </main>
     );
}
 
export default Footer;