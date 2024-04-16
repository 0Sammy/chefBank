import { getUserDetails } from "@/providers/userDetails";
import { permanentRedirect } from "next/navigation";


//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import AccountDetails from "@/components/DashboardComponents/AccountDetails";
import Activity from "@/components/DashboardComponents/Activity";
import TransferHistory from "@/components/DashboardComponents/TransferHistory";
import AccountSummary from "@/components/DashboardComponents/AccountSummary";
import ATM from "@/components/DashboardComponents/ATM";
import BalanceUpdate from "@/components/DashboardComponents/BalanceUpdate";



export const revalidate = 1
const page = async () => {
    //Needed Functions
    function sortByCustomDateOrCreatedAt(transactions: any) {
        // Sort transactions by custom date or createdAt
        return transactions.sort((a: { customCreatedTime: string | number | Date; createdAt: string | number | Date; }, b: { customCreatedTime: string | number | Date; createdAt: string | number | Date; }) => {
            // Check if both transactions have customCreatedTime
            if (a.customCreatedTime && b.customCreatedTime) {
                // Sort by customCreatedTime if available
                return new Date(b.customCreatedTime).getTime() - new Date(a.customCreatedTime).getTime();
            } else if (!a.customCreatedTime && !b.customCreatedTime) {
                // If both transactions don't have customCreatedTime, fall back to sorting by createdAt
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            } else {
                // If only one transaction has customCreatedTime, prioritize it
                return a.customCreatedTime ? -1 : 1;
            }
        });
    }
    
    const { user } = await getUserDetails();
    const allTransactions = user?.transactions
    const transactions = sortByCustomDateOrCreatedAt(allTransactions)
    const lastFiveTransactions = transactions?.slice(0, 5);
    const wireTransferTransactions = transactions?.filter((transaction: { type: string | string[]; }) => transaction.type.includes('Wire_Transfer'));
    const deposits = transactions?.filter((transaction: { type: string; }) => transaction.type === "Deposit");
    const currentCurrency = user?.currency

    if (user?.isSuspended){
        permanentRedirect('/suspend') 
     }

    return ( 
        <main>
            <Header page="Dashboard" profilePicSrc={user?.profileImgSrc} name={`${user?.firstName} ${user?.lastName}`} accountNumber={user?.accountNumber}/>
            <BalanceUpdate transactions={transactions}/>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] flex flex-col gap-y-10 ">
                    <AccountDetails currentCurrency={currentCurrency}/>
                    <TransferHistory transactions={lastFiveTransactions} currentCurrency={currentCurrency}/>
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 ">
                    <Activity wireTransfer={wireTransferTransactions} deposits={deposits}/>
                    <AccountSummary firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
                    <ATM email={user?.email} hasRequested={user?.atmRequest} name={`${user?.firstName} ${user?.lastName}`}/>
                </div>
            </div>
        </main>
     );
}
 
export default page;