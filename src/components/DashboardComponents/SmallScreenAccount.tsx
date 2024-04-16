"use client"
import { useState } from "react";
import { smallScreenAccount } from "@/lib/types";
import { toast } from "sonner";

//Import Needed Icons
import { Copy, CopySuccess } from "iconsax-react";


const SmallScreenAccount = ({accountNumber, firstName, lastName}: smallScreenAccount) => {
    //State for the copied text
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
          await navigator.clipboard.writeText(`DE81 3704 0044 ${accountNumber}`);
          setIsIban(true);
          toast.success("IBAN copied to clipboard")
        } catch (err) {
          console.error('Unable to copy text', err);
          toast.error("Unable to copy IBAN, try again later.")
        }
      };
    return ( 
        <main className="bg-[#EBEBF52E] border border-[#7676801F] h-28 rounded-lg p-4 mt-4">
            <p className="text-secondary text-xs sm:text-sm md:text-base capitalize font-medium">{firstName} {lastName}</p>
            <div className="flex justify-between mt-2 items-center">
                <p className="text-xs md:text-sm text-[#8E8E93]">Keystone savings account</p>
                <div className="flex items-center gap-x-1">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-[#8E8E93]">{accountNumber}</p>
                    {isCopied ? <CopySuccess size={18} className="cursor-pointer text-opacity-50 text-primary" onClick={handleCopyClick} /> : <Copy size={18} className={`cursor-pointer text-primary`} onClick={handleCopyClick}/>}
                    
                </div>
            </div>
            <div className="flex justify-between mt-2 items-center">
                <p className="text-xs md:text-sm text-[#8E8E93]">Routing Number</p>
                <div className="flex items-center gap-x-1">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-[#8E8E93]">3704 00448</p>
                    {isIban ? <CopySuccess size={18} className="cursor-pointer text-opacity-50 text-primary" onClick={handleIbanClick} /> : <Copy size={18} className={`cursor-pointer text-primary`} onClick={handleIbanClick}/>}
                    
                </div>
            </div>
        </main>
     );
}
 
export default SmallScreenAccount;