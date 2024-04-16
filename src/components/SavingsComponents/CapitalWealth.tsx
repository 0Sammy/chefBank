"use client"
import { useSavingsStore } from "@/store/savings";
import { useBalanceStore } from "@/store/BalanceDetails";

const CapitalWealth = ({currentCurrency}: any) => {

    const { savingsType, updateSavingsType } = useSavingsStore() 
    const { capitalWealthBalance } = useBalanceStore()
    //Function
    const handleSavingsUpdate = () => {
        updateSavingsType("capital")
    }

    return ( 
        <main className={`${savingsType === "capital" ? "bg-[#FBF1EC]" : ""} min-w-[18rem] w-[49%] bg-[#EBEBF52E] border border-[#7676801F] p-4 hover:bg-[#FBF1EC] duration-500 rounded-lg cursor-pointer`} onClick={handleSavingsUpdate}>
            <div className="flex items-center justify-between">
                <p className="text-[#1C1F33] text-[12px] lg:text-[14px] font-medium">Keystone Wealth</p>
                <p className="bg-primary text-[#FEFEFE] px-4 py-1 rounded-2xl font-medium text-[10px] lg:text-[12px]">Active</p>
            </div>
            <p className="text-[10px] lg:text-[12px] text-[#B2B3BA] my-3">Lock up funds at up to 10% APY. Withdraw up to 15% of principal per year penalty-free.</p>
            <div className="flex justify-between items-center text-[#161929]">
                <p className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold">{currentCurrency ?? "€"}{capitalWealthBalance.toLocaleString()}</p>
                <p className="text-[10px] lg:text-[12px] font-semibold">{currentCurrency === "$" ? "USD" : currentCurrency === "€" ? "EUR" : currentCurrency === "¥" ? "JPY" : currentCurrency === "£" ? "GBP" : "EUR"}</p>
            </div>
        </main>
     );
}
 
export default CapitalWealth;