import getAdmins from "@/actions/getAllAdmins";
import getAdminTransactions from "@/actions/getAdminTransactions";
import getCurrency from "@/actions/getCurrency";

//Import Needed Components
import AllAdmins from "@/components/AdminComponents/AllAdmins";
import Header from "@/components/AdminComponents/Header";

export const revalidate = 1
const page = async () => {

    const admins = await getAdmins()
    const adminTransactions = await getAdminTransactions()
    const currency = await getCurrency()
    const currentCurrency = currency?.currentCurrency

    return ( 
        <main>
            <Header page="Administration Staff" /> 
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <AllAdmins admins={admins} transactions={adminTransactions} currentCurrency={currentCurrency}/>
            </div>
        </main>
     );
}
 
export default page;