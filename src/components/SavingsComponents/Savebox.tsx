"use client"
import { useSavingsStore } from "@/store/savings";
import { useBalanceStore } from "@/store/BalanceDetails";

const Savebox = ({currentCurrency}: any) => { 

    const { savingsType, updateSavingsType } = useSavingsStore() 
    const { saveboxBalance } = useBalanceStore()
    
     //Function
     const handleSavingsUpdate = () => {
        updateSavingsType("savebox")
    }
    return ( 
        <main className={`${savingsType === "savebox" ? "bg-[#FBF1EC]" : ""} min-w-[18rem] w-[49%] bg-[#EBEBF52E] border border-[#7676801F] p-4 hover:bg-[#FBF1EC] duration-500 rounded-lg cursor-pointer`} onClick={handleSavingsUpdate}>
            <p className="text-[#1C1F33] text-[12px] lg:text-[14px] font-medium">Save box</p>
            <p className="text-[10px] lg:text-[12px] text-[#B2B3BA] my-3">The total accumulated amount from all transactions designated to the savings option.</p>
            <div className="flex justify-between items-center text-[#161929]">
                <p className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold">{currentCurrency ?? "€"}{saveboxBalance.toLocaleString()}</p>
                <p className="text-[10px] lg:text-[12px] font-semibold">{currentCurrency === "$" ? "USD" : currentCurrency === "€" ? "EUR" : currentCurrency === "¥" ? "JPY" : currentCurrency === "£" ? "GBP" : "EUR"}</p>
            </div>
        </main>
     );
}
 
export default Savebox;