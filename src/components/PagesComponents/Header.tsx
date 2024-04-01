"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";


//Import Needed Images
import logo from "../../../public/Images/logoWhite.svg";

//Import Needed Icons
import { Menu } from "iconsax-react";

const Header = () => {
  const pathName = usePathname()
  //console.log({pathName})
  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

    return ( 
        <main>
            <div className="py-8 flex justify-between items-center text-[#F2F2F7] font-medium text-xs sm:text-sm xl:text-base">
                <div className="flex gap-x-5 lg:gap-x-10 items-center">
                    <Link href="/"><Image src={logo} alt="Keystone National Bank Logo" priority={true} className="size-8 md:size-10 xl:size-12"/></Link>

                    <Link href="/features" className={`${pathName === "/features" ? "text-primary font-bold" : ""} hidden md:block hover:text-primary duration-500`} prefetch={true}>Features</Link>
                    <Link href="/aboutus" className={`${pathName === "/aboutus" ? "text-primary font-bold" : ""} hidden md:block hover:text-primary duration-500`} prefetch={true}>About us</Link>
                    <Link href="/contactus" className={`${pathName === "/contactus" ? "text-primary font-bold" : ""} hidden md:block hover:text-primary duration-500`} prefetch={true}>Contact us</Link>
                </div>
                <div className="hidden items-center gap-x-5 md:flex">
                   <Link href="/login" className="rounded-lg font-normal border border-white text-white hover:text-[#020100] py-3 px-6 hover:bg-white duration-500" prefetch={true}>Log in</Link> 
                   <Link href="/create"  className="rounded-lg font-normal bg-white border border-white hover:text-white hover:bg-inherit text-[#020100] py-3 px-6 duration-500" prefetch={true}>Open your account</Link> 
                </div>
                <Menu size="28" color="#FF8A65" variant="Broken" className="md:hidden cursor-pointer" onClick={toggleOpen}/>
            </div>
            <div className={`${!isOpen && "hidden"} lg:hidden fixed h-screen w-full bg-black bg-opacity-70 z-[700] top-0 left-0`} onClick={toggleOpen}>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="fixed left-0 top-0 h-screen flex flex-col gap-y-5 w-[300px] bg-white lg:hidden py-20 px-6 font-medium"
                  >
                    <Link href="/" className={`${pathName === "/" ? "text-primary font-bold" : ""} hover:text-primary duration-500`} prefetch={true}>Home</Link>
                    <Link href="/features" className={`${pathName === "/features" ? "text-primary font-bold" : ""}  hover:text-primary duration-500`} prefetch={true}>Features</Link>
                    <Link href="/aboutus" className={`${pathName === "/aboutus" ? "text-primary font-bold" : ""} hover:text-primary duration-500`} prefetch={true}>About us</Link>
                    <Link href="/contactus" className={`${pathName === "/contactus" ? "text-primary font-bold" : ""} hover:text-primary duration-500`} prefetch={true}>Contact us</Link>

                    <div className="flex flex-col gap-y-5">
                        <Link href="/login" className="rounded-lg border border-secondary text-secondary hover:border-primary hover:text-primary py-3 px-6 hover:bg-white duration-500" prefetch={true}>Log in</Link> 
                        <Link href="/create"  className="rounded-lg bg-secondary border border-secondary hover:text-secondary hover:bg-primary hover:border-primary text-white py-3 px-6 duration-500" prefetch={true}>Open your account</Link> 
                    </div>
                    
                  </motion.div>
                )}
                </AnimatePresence>
            </div>
        </main>
     );
}
 
export default Header;