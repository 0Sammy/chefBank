"use client";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";
import arrow from "../../../public/Images/arrowRight.svg";


const TransactionPin = () => {
  const [pin, setPin] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string | any>("")
  const router = useRouter();
  //For the loading state
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status } = useSession()
  //Get the email using search Params
  const searchParams = useSearchParams();

  useEffect(() => {

    if (searchParams.has("email")){
      
      const gottenUserEmail = searchParams.get('email')
      setUserEmail(gottenUserEmail)
    
    } else {
  
      if (status === "authenticated") {
        
        setUserEmail(session?.user?.email)
        
      }
  
    }
  
  }, [searchParams, session?.user?.email, status])

  //OnSubmit Function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const formData = { email: userEmail, transactionPin : pin };

    makeApiRequest("/addTransactionsPin", "post", formData, {
      onSuccess: () => {
        // Handle success
        setLoading(false);
        toast.success("Transaction pin was added successful");
        router.push(`/onboarding/review`);
      },
      onError: (error: any) => {
        // Handle error
        setLoading(false);
        toast.error("Failed to add transaction pin, please try again later.");
        router.refresh();
      },
    });
  };

  return (
    <main>
      <div className="flex gap-x-1">
        <Image src={logo} alt="Keystone National Bank Logo" priority={true} className="size-9 sm:size-12 xl:size-14"/>
        <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
          <p>Keystone</p>
          <p className="-mt-[0.3rem]">National</p>
          <p className="-mt-[0.3rem]">Bank</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">
          Transaction Pin
        </p>
        <p className="font-medium text-xs sm:text-sm xl:text-base mt-4">
          Finish setting up your account, by entering your four(4) digit pin
        </p>
      </div>
      <form onSubmit={onSubmit} className="mt-10">
        <div className="flex flex-col gap-y-1">
          <label className="cursor-pointer" htmlFor="pin">
            Pin
          </label>
          <input
            type="text"
            name="pin"
            id="pin"
            pattern="\d{4}"
            title="Please enter exactly 4 digits"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
            placeholder="XXXX"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPin(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="group mt-14 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg"
        >
          {loading ? `Adding Pin...` : "Finish"}
          <Image
            src={arrow}
            alt="Right Arrow"
            className="transition duration-500 group-hover:translate-x-2"
          />
        </button>
      </form>
    </main>
  );
};

export default TransactionPin;
