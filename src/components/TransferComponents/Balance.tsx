"use client";
import { useState } from "react";

//Import Needed Icons
import { Eye, EyeSlash } from "iconsax-react";

const Balance = () => {
  //Balance State
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const balance = "0";
  //Balance Function
  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev);
  };
  return (
    <main className="bg-secondary border border-[#7878805C] p-4 rounded-xl">
      <p className="text-[#E8E9EB] text-[0.6rem] md:text-xs">Current balance</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg md:text-xl xl:text-2xl text-[#DD8C65] font-semibold">${showBalance ? `${balance}.00` : "*".repeat(balance.length)}</p>
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
    </main>
  );
};

export default Balance;
