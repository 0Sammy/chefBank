import getIndividualTransaction from "@/actions/getIndividualTransaction";
import getIndividualUser from "@/actions/getIndividualUser";
import Link from "next/link";
import { formatDate } from "@/lib/dateTimeUtils";
import { formatDateTime } from "@/lib/dateTimeUtils";
import getCurrency from "@/actions/getCurrency";

//Import Needed Components
import AcceptTransactionButton from "@/components/AdminComponents/AcceptTransactionButton";
import DeleteTransactionButton from "@/components/AdminComponents/DeleteTransactionButton";
import DeclineTransactionButton from "@/components/AdminComponents/DeclineTransactionButton";
import PendingTransactionButton from "@/components/AdminComponents/PendingTransactionButton";

//Import Needed Icons
import { AddCircle } from "iconsax-react";



export const revalidate = 1;
const page = async ({ params }: { params: { id: string } }) => {

    const transactionId = params.id;
    const currentTransaction = await getIndividualTransaction(transactionId)
    const userId = currentTransaction?.userId
    const currentUser = await getIndividualUser(userId ?? "")
    const currency = await getCurrency()
    const currentCurrency = currency?.currentCurrency
    //console.log({currentUser})
    //console.log({currentTransaction})

    function showCorrectTransactionType(type: string | undefined): string {
        switch (type) {
          case "Deposit":
            return "Deposit";
            break;
          case "Withdrawal":
            return "Withdrawal";
            break;
        case "Target_Saving":
            return "Target Savings";
            break;
        case "Capital_Wealth":
            return "Capital Wealth";
            break;
        case "Utility_Bill":
            return "Utility Bill";
            break;
        case "Domestic_Wire_Transfer":
            return "Domestic Wire Transfer";
            break;
        case "International_Wire_Transfer":
            return "International Wire Transfer";
            break;
        default:
            return "Unavailable";
          break;
        }
      }

    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-2 sm:p-4 md:p-6 xl:p-8 bg-white flex flex-col gap-y-3 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="tex-base md:text-xl xl:text-2xl text-[#020100] font-semibold mt-4">
            Transaction details
          </p>
          <Link href="/admin/history"><AddCircle size="32" variant="Bold" className="rotate-45 text-primary"/></Link>
        </div>

        <div className="flex justify-between items-center gap-x-5">
          <p className="text-[#9EA0A3] text-xs md:text-sm">
            Transaction Status
          </p>
          <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
            {currentTransaction?.status}
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <p className="text-[#9EA0A3] text-xs md:text-sm">Transaction Type</p>
          <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
            {showCorrectTransactionType(currentTransaction?.type)}
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                Amount 
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
              {currentCurrency ?? "$"}{currentTransaction?.amount}
            </p>
        </div> 
        <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                Done By The Client
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                {currentUser?.firstName ?? "User"} {currentUser?.lastName ?? "Deleted"}
            </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                The Client&apos;s Email 
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base text-right">
                {currentUser?.email ?? "User Deleted"}
            </p>
        </div>
        {(currentTransaction?.type === "Domestic_Wire_Transfer" || currentTransaction?.type === "International_Wire_Transfer") && 
        <>
           <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Account Name 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {currentTransaction.targetName}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Account Number 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {currentTransaction.targetAccount}
                </p>
            </div>
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Bank Name 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {currentTransaction.targetBankName}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Bank Address 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {currentTransaction.bankAddress}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Routing Number
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {currentTransaction.routingNumber}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Transaction Fee 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                    {currentCurrency ?? "$"}{currentTransaction.transferFee}
                </p>
            </div>
        </>
        }
        {currentTransaction?.isSaveBox && 
            <>
               <div className="flex justify-between items-center gap-x-5">
                    <p className="text-[#9EA0A3] text-xs md:text-sm">
                        Used Savebox Option
                    </p>
                    <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                      Yes
                    </p>
                </div>  
                <div className="flex justify-between items-center gap-x-5">
                    <p className="text-[#9EA0A3] text-xs md:text-sm">
                        Savebox Amount
                    </p>
                    <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                        €{currentTransaction.saveBoxAmount}
                    </p>
            </div>          
            </>
        }
        <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                Done By An Admin?
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                {currentTransaction?.doneByAdmin ? "Yes" : "No"}
            </p>
        </div>
        {currentTransaction?.doneByAdmin && 
           <div className="flex justify-between items-center gap-x-5">
             <p className="text-[#9EA0A3] text-xs md:text-sm">Admin Email</p>
             <p className="text-[#06121B] font-medium text-sm md:text-base text-right">
               {currentTransaction?.adminEmail}
             </p>
         </div> 
        } 
        {currentTransaction?.doneByAdmin && 
           <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">Admin Given Date</p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {formatDateTime(currentTransaction.customCreatedTime ?? "")}
                </p>
         </div> 
        }
        <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">The Real Date</p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {formatDate(currentTransaction?.createdAt ?? new Date)}
                </p>
         </div> 
        <div className="flex justify-between items-center gap-x-5 mb-4">
          <p className="text-[#9EA0A3] text-xs md:text-sm">Transaction ID</p>
          <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
            {currentTransaction?.id}
          </p>
        </div>
        <div className="flex justify-between mt-8">
            {currentTransaction?.status !== "successfull" && <AcceptTransactionButton id={currentTransaction?.id}/>} {currentTransaction?.status !== "failed" && <DeclineTransactionButton id={currentTransaction?.id}/>} {currentTransaction?.status !== "pending" && <PendingTransactionButton id={currentTransaction?.id}/> } <DeleteTransactionButton id={currentTransaction?.id}/>
        </div>
      </div>
    </main>
);
}
 
export default page;