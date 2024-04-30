import { getUserDetails } from "@/providers/userDetails";
import { permanentRedirect } from "next/navigation";


//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import Transfer from "@/components/TransferComponents/Transfer";
import LastTransactions from "@/components/TransferComponents/LastTransactions";
import Convert from "@/components/TransferComponents/Convert";
import Balance from "@/components/TransferComponents/Balance";
import PaymentDetails from "@/components/TransferComponents/PaymentDetails";
import BalanceUpdate from "@/components/DashboardComponents/BalanceUpdate";



export const revalidate = 0
const page = async () => {
    //Needed Functions
    function sortByCustomDateOrCreatedAt(transactions : any) {
        return transactions.sort((a: { customCreatedTime: string | number | Date; createdAt: string | number | Date; }, b: { customCreatedTime: string | number | Date; createdAt: string | number | Date; }) => {
            // Parse customCreatedTime if available
            const dateA = a.customCreatedTime ? new Date(a.customCreatedTime) : null;
            const dateB = b.customCreatedTime ? new Date(b.customCreatedTime) : null;
    
            if (!dateA && !dateB) {
                // If neither transaction has customCreatedTime, sort by createdAt
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
    
            if (dateA && dateB) {
                // Sort by customCreatedTime if both available
                return dateB.getTime() - dateA.getTime();
            }
    
            // Place transactions without customCreatedTime at the top
            return dateB ? 1 : 1;
        });
    }
    const { user } = await getUserDetails();
    const allTransactions = user?.transactions
    const transactions = sortByCustomDateOrCreatedAt(allTransactions)
    const lastFiveTransactions = transactions?.slice(0, 5);
    const currentCurrency = user?.currency 

    if (user?.isSuspended){
        permanentRedirect('/suspend') 
     }
    //console.log({transactions})
    
    return ( 
        <main>
            <BalanceUpdate transactions={transactions}/>
            <Header page="Transfers" profilePicSrc={user?.profileImgSrc} name={`${user?.firstName} ${user?.lastName}`} accountNumber={user?.accountNumber}/>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] flex flex-col gap-y-10 border border-[#7676801F] rounded-lg p-4">
                    <Transfer />
                    <Convert />
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 border border-[#7676801F] rounded-lg p-4">
                    <Balance currentCurrency={currentCurrency}/>
                    <PaymentDetails userid={user?.id} userPin={user?.transactionPin} name={`${user?.firstName} ${user?.lastName}`} email={user?.email} currentCurrency={currentCurrency}/>
                    <LastTransactions transactions={lastFiveTransactions}/>
                </div>
            </div>
        </main>
     );
}
 
export default page;