"use client";
import { useEffect } from "react";
import Image from "next/image";
import { makeApiRequest } from "@/lib/apiUtils";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useOtpStore } from "@/store/verification";
import { generateOTPNumber } from "@/utils/AccountInfo";
import { useOnboardingStore } from "@/store/onboardingDetails";


//Import Needed Components
import Progress from "@/components/AuthComponents/Progress";
import SendVerificationEmail from "../molecules/SendVerificationEmail";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";
import arrow from "../../../public/Images/arrowRight.svg";

const VerificationForm = () => {

  //Zustand Email Management
  const {email} = useOnboardingStore()
  
  //Zustand OTP Management
  const { otpNumber, updateOtpNumber } = useOtpStore();

  //Generate the otp save it in a state
  useEffect(() => {
    const otp = generateOTPNumber();
    updateOtpNumber(otp);
  }, [updateOtpNumber]);

  const router = useRouter();
  //For the loading state
  const [loading, setLoading] = useState<boolean>(false);
  const [enteredOtp, setEnteredOtp] = useState<string>();

  //OnSubmit Function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    //Check if the otp entered is the same with what was sent
    if (otpNumber.toString() === enteredOtp) {
      const formData = { email: email };

      makeApiRequest("/verifyUser", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false);
          toast.success("Verification was successful");
          router.push(`/onboarding/transaction?email=${email}`);
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false);
          toast.error("Verification failed, try again later.");
          router.refresh();
        },
      });
    } else {
      toast.error("Wrong OTP");
    }
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
      <div className="text-[#161618] mt-10 mb-4">
        <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
          Set up your account
        </p>
        <p className="text-xs sm:text-sm xl:text-base font-semibold mt-4">
          Welcome, let&apos;s get started
        </p>
      </div>
      <Progress activeDiv={3} />
      <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">
        Verification
      </p>
      <p className="font-medium text-xs sm:text-sm xl:text-base mt-4">
        You will receive an e-mail OTP. Input OTP to open up your account.
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-1 mt-10 text-xs sm:text-sm xl:text-base">
          <label className="cursor-pointer" htmlFor="otp">
            OTP
          </label>
          <input
            required
            type="text"
            name="otp"
            id="otp"
            pattern="\d{4}"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
            placeholder="Enter The OTP"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEnteredOtp(e.target.value)
            }
          />
        </div>
        <SendVerificationEmail />

        <button
          type="submit"
          className="group mt-12 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg"
        >
          {loading ? "Verifying..." : "Continue"}
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

export default VerificationForm;
