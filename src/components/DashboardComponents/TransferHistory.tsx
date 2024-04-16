import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/dateTimeUtils";
import { formatDateTime } from "@/lib/dateTimeUtils";
import { getRandomAvatar } from "@/lib/getRandomAvatar";

//Import needed icons
import { Add, ArrowRight2, Bill, MoneyRecive, MoneySend, WalletMoney } from "iconsax-react";



const TransferHistory = ({transactions, currentCurrency}: any) => {

    return ( 
        <main className="border border-[#7676801F] rounded-xl px-3 md:px-4 xl:px-6 py-6">
            <p className="text-sm xl:text-base text-[#06121B] font-semibold">Sent money to</p>
            <div className="flex gap-x-10 bg-[#F3F6FB] border border-[#7676801F] px-8 py-6 mt-5 rounded-lg overflow-x-auto special">
                <Link href="/user/transfer">
                    <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-[#B9BAC0] flex items-center justify-center rounded-[50%] cursor-pointer hover:bg-secondary duration-500">
                        <Add size="16" color="#FFF"/>
                    </div>
                </Link>
                {transactions && transactions.map((transaction: any) => ( 
                    <div key={transaction.id} className="flex flex-col gap-y-0.5 items-center">
                       <Link href={`history/${transaction.id}`} className="relative min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 rounded-[50%] cursor-pointer">
                            {transaction.type.includes('Wire_Transfer') ? <Image src={getRandomAvatar()} alt="User Icon"  fill className="rounded-[50%]"/> : transaction.type === "Utility_Bill" ? <Bill size="45" color="#D56F3E" /> : transaction.type === "Deposit" ? <Image src={getRandomAvatar()} alt="User Icon" fill className="rounded-[50%]"/> :  <WalletMoney size="45" color="#D56F3E"/>}
                        </Link> 
                        <p className="text-[12px]">{transaction.type === "Deposit" ? "Deposit" : transaction.type === "Domestic_Wire_Transfer" ? `${transaction.targetName.slice(0, 7)}...` : transaction.type === "International_Wire_Transfer" ? `${transaction.targetName.slice(0, 7)}...` : transaction.type === "Utility_Bill" ? "Utility Bill" : "Savings"}</p>
                    </div>
                    
                ))}
                
            </div>
            <div className="mt-8 max-h-[40rem] special">
                <div className="flex justify-between items-center">
                    <p className="text-sm xl:text-base text-[#06121B] font-semibold">Transaction History</p> 
                    <p className="text-[0.65rem] md:text-xs text-primary">Last Five(5)</p>
                </div>
                <div className="flex flex-col">
                {transactions && transactions.map((transaction: any) => (
                    <Link key={transaction.id} href={`/user/history`}>
                        <div className="flex items-center justify-between py-4">
                            <div className="flex gap-x-1 items-center">
                                <div className={`${ transaction.type === "Deposit" ? "bg-[#2DE3001A]" : "bg-[#DB64641A]"}  rounded-[50%] p-2`}>
                                    {transaction.type === "Deposit" ? <MoneyRecive size="24" color="#198754"/> : transaction.type.includes('Wire_Transfer') ? <MoneySend size="24" color="#DC3545"/> : transaction.type === "Utility_Bill" ? <Bill size="24" color="#DC3545"/> : <WalletMoney size="24" color="#DC3545"/> }
                                </div>
                    
                                <div className="flex flex-col gap-y-0.5">
                                    <p className="text-[#141619] text-[12px] md:text-[14px] xl:text-[16px] font-semibold capitalize">{transaction.type === "Deposit" ? "Deposit" : transaction.type === "Domestic_Wire_Transfer" ? "Local Wire Transfer" : transaction.type === "International_Wire_Transfer" ? "International Wire Transfer" : transaction.type === "Utility_Bill" ? "Utility Bill" : "Savings"}</p>
                                    <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{transaction.doneByAdmin ? formatDateTime(transaction.customCreatedTime) : formatDate(transaction.createdAt)}.</p>
                                </div>
                            </div>
                            <p className={`${transaction.type === "Deposit" ? "text-[#198754]" : "text-[#DC3545]"} text-xs md:text-sm xl:text-base font-medium`}>{transaction.type === "Deposit" ? `+${currentCurrency ?? "€"}${transaction.amount.toLocaleString()}` : `-${currentCurrency ?? "€"}${transaction.amount.toLocaleString()}`}</p>
                        </div>
                    </Link>
                ))}
                    
                    {transactions && transactions.length === 0 && <div className="flex justify-center py-4">
                        <p className="text-sm xl:text-base text-secondary text-center">No Transaction Yet</p>
                    </div>}
                </div>
                <div className="group flex justify-end gap-x-1 text-[#1C1F33] text-xs xl:text-sm items-center cursor-pointer">
                    <Link href="/user/history">View all</Link>
                    <ArrowRight2 size="14" color="#1C1F33" className="group-hover:translate-x-1 transition  duration-500"/>
                </div>
            </div>
        </main>
     );
}
 
export default TransferHistory;