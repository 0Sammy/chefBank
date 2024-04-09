"use client"

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";

//Import Needed Components
import { Copy, CopySuccess } from "iconsax-react";


const AccountSummary = ({accountNumber, firstName, lastName} : string | any) => {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const [isIban, setIsIban] = useState<boolean>(false)
    //Copy function
    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(accountNumber);
          setIsCopied(true);
          toast.success("Account number copied to clipboard")
        } catch (err) {
          console.error('Unable to copy text', err);
          toast.error("Unable to copy account number, try again later.")
        }
      };
      const handleIbanClick = async () => {
        try {
          await navigator.clipboard.writeText(`3704 00448 ${accountNumber}`);
          setIsIban(true);
          toast.success("IBAN copied to clipboard")
        } catch (err) {
          console.error('Unable to copy text', err);
          toast.error("Unable to copy IBAN, try again later.")
        }
      };
    return ( 
        <main className="hidden lg:block border border-[#7676801F] rounded-xl px-3 md:px-4 xl:px-6 py-6">
            <div className="flex gap-x-3 items-center">
                <Image src={logo} alt="logo" className="size-9 sm:size-12 xl:size-14"/>
                <p className="text-sm xl:text-base text-secondary font-semibold">Keystone National bank</p>
            </div>
            <div className="flex flex-col gap-y-3 mt-10">
                <div className="flex flex-col gap-y-1">
                    <p className="text-[8px] md:text-[10px] xl:text-[12px] text-[#9EA0A3]">Account type</p>
                    <p className="text-[10px] md:text-[12px] xl:text-[14px] text-[#06121B] font-medium">Keystone Savings</p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p className="text-[8px] md:text-[10px] xl:text-[12px] text-[#9EA0A3]">Account holder</p>
                    <p className="text-[10px] md:text-[12px] xl:text-[14px] text-[#06121B] font-medium capitalize">{firstName} {lastName}</p>
                </div>
                <div className="flex items-center justify-between text-[#06121B]">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-[8px] md:text-[10px] xl:text-[12px] text-[#9EA0A3]">Account number</p>
                        <p className="text-[10px] md:text-[12px] xl:text-[14px] font-medium">{accountNumber}</p>
                    </div>
                    {isCopied ? <CopySuccess size={18} className="cursor-pointer text-opacity-50" onClick={handleCopyClick} /> : <Copy size={18} className={`cursor-pointer`} onClick={handleCopyClick}/>}
                </div>
                <div className="flex items-center justify-between text-[#06121B]">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-[8px] md:text-[10px] xl:text-[12px] text-[#9EA0A3]">Routing Number</p>
                        <p className="text-[10px] md:text-[12px] xl:text-[14px] font-medium">3704 00448</p>
                    </div>
                    {isIban ? <CopySuccess size={18} className="cursor-pointer text-opacity-50" onClick={handleIbanClick} /> : <Copy size={18} className={`cursor-pointer`} onClick={handleIbanClick}/>}
                </div>
                
            </div>
        </main>
     );
}
 
export default AccountSummary;