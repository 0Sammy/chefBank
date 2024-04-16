"use client";
import { useState } from "react";
import Link from "next/link";
import { useBalanceStore } from "@/store/BalanceDetails";

//Import Needed Icons
import { EyeSlash, Eye, WalletMoney, Send2, Import } from "iconsax-react";

const AccountDetails = ({currentCurrency}: any) => {
  //Balance State
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const { mainBalance } = useBalanceStore()
  //Balance Function
  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev);
  };
  return (
    <main className="h-52 bg-[#191C2E] rounded-xl px-3 md:px-4 xl:px-6 py-6">
      <p className="text-[#E8E9EB] text-[0.6rem] md:text-xs">Current balance</p>
      <div className="flex justify-between items-center">
        <p className="text-2xl md:text-3xl xl:text-[32px] text-[#E39F7E] font-semibold">
          {currentCurrency ?? "€"}{showBalance ? `${mainBalance.toLocaleString()}` : "*".repeat(mainBalance.toString().length)}
        </p>
        {showBalance ? (
          <EyeSlash
            size="20"
            color="#E8E9EB"
            className="cursor-pointer"
            onClick={toggleBalanceVisibility}
          />
        ) : (
          <Eye
            size="20"
            color="#E8E9EB"
            className="cursor-pointer"
            onClick={toggleBalanceVisibility}
          />
        )}
      </div>
      <div className="flex justify-between mt-12">
        <div className="flex flex-col gap-y-1">
          <div className="size-10 sm:size-11 md:size-12 rounded-[50%] flex items-center justify-center bg-[#78788052] border border-[#7878805C]">
            <Link href="/user/transfer">
              <Send2 size="20" color="#E8E9EB" className="cursor-pointer" />
            </Link>
          </div>
          <p className="text-[0.6rem] md:text-xs text-center text-[#E8E9EB]">
            <Link href="/user/transfer">Transfer</Link>
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="size-10 sm:size-11 md:size-12 rounded-[50%] flex items-center justify-center bg-[#78788052] border border-[#7878805C]">
            <Link href="/user/savings">
              <WalletMoney
                size="20"
                color="#E8E9EB"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-[0.6rem] md:text-xs text-center text-[#E8E9EB]">
            <Link href="/user/savings">Savings</Link>
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="size-10 sm:size-11 md:size-12 rounded-[50%] flex items-center justify-center bg-[#78788052] border border-[#7878805C]">
            <Link href="/user/deposit">
              <Import size="20" color="#E8E9EB" className="cursor-pointer" />
            </Link>
          </div>
          <p className="text-[0.6rem] md:text-xs text-center text-[#E8E9EB]">
            <Link href="/user/transfer">Deposit</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AccountDetails;
