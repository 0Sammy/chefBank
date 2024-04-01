"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import heroImg from "../../../public/Images/heroImg.svg";
import heroUserImg from "../../../public/Images/heroUserImg.svg";
import heroUserImg1 from "../../../public/Images/heroUserImg1.svg";

//Import Needed Icons
import { Star1 } from 'iconsax-react';


const Herosection = () => {

   
    return ( 
        <main className="py-8 text-center">
            <p className="text-sm md:text-base xl:text-lg text-[#F89261] font-semibold">All-in-one banking for everyone</p>
            <p className="text-white font-bold text-4xl md:text-5xl xl:text-6xl mt-2">Banking Beyond Boundaries</p>
            <p className="mt-6 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[47%] mx-auto text-sm sm:text-base md:text-lg xl:text-xl text-[#DDDDE0] font-medium">Experience a new era of financial freedom with innovative banking solutions. Join us on a journey where every transaction is secure, every goal is achievable, and every dream is within reach.</p>
            <div className="mt-10 items-center gap-x-5 flex justify-center text-xs md:text-sm xl:text-base">
                   <Link href="/create" className="rounded-lg font-normal bg-white border border-white hover:text-white hover:bg-inherit text-[#020100] py-3 px-6 duration-500" prefetch={true}>Sign up</Link> 
                   <Link href="/schedule" className="rounded-lg font-normal border border-white text-white hover:text-[#020100] py-3 px-6 hover:bg-white duration-500"  prefetch={true}>Schedule a Demo</Link> 
            </div>
           
            <motion.div  
                initial={{ x: '-100%' }}
                animate={{ x: 0 }} 
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-[18rem] sm:w-[20rem] md:w-[24rem] bg-white rounded-lg flex gap-x-2 p-1 sm:p-2 absolute top-[57%] sm:top-[65%] md:top-[55%] left-[5%] sm:left-[10%] md:left-[15%] xl:left-[20%]"> 
                <Image src={heroUserImg} alt="User Image" className='rounded-[50%]'/>
                <div className='flex flex-col gap-y-2 text-left'>
                    <p className='text-[10px] md:text-xs text-[#161618] font-medium'>Danillo Barros</p>
                    <p className='text-[10px] md:text-xs text-[#9EA0A3]'>KNB online banking is fantastic, and their customer service is top-notch. Highly recommended!</p>
                </div>
                <div className='flex gap-x-1'>
                    <p className='text-[10px] md:text-xs text-[#161618] font-medium'>5</p>
                    <Star1 size="14" color="#FFCC00" variant="Bold"/>
                </div>
            </motion.div>
            <motion.div  
                initial={{ x: '100%' }}
                animate={{ x: 0 }} 
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-[18rem] sm:w-[20rem] md:w-[24rem] bg-white rounded-lg flex gap-x-2 p-1 sm:p-2 absolute top-[50%] md:top-[65%] xl:top-[75%] right-[3%] sm:right-[9%] md:right-[12%] xl:right-[18%]"> 
                <Image src={heroUserImg1} alt="User Image" className='rounded-[50%]'/>
                <div className='flex flex-col gap-y-2 text-left'>
                    <p className='text-[10px] md:text-xs text-[#161618] font-medium'>Marco Brewster</p>
                    <p className='text-[10px] md:text-xs text-[#9EA0A3]'>KNB online banking is a breeze! Fantastic customer service too!</p>
                </div>
                <div className='flex gap-x-1'>
                    <p className='text-[10px] md:text-xs text-[#161618] font-medium'>5</p>
                    <Star1 size="14" color="#FFCC00" variant="Bold"/>
                </div>
            </motion.div>
            <Image src={heroImg} alt="Bank Image" className="mx-auto mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20"/>
        </main>
     );
}
 
export default Herosection;