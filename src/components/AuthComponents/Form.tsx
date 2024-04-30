"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { generateAccountNumber } from "@/utils/AccountInfo";
import { toast } from "sonner";

//Import Needed Components
import Progress from "@/components/AuthComponents/Progress";
import CountrySelect from "./CountrySelect";
import { More } from "../Animate";
import IdSelect from "./IdSelect";
import ImageUpload from "../molecules/ImageUpload";
import Toast from "../molecules/Toast";
import { errorModalProps, successModalProps } from "@/lib/modalPropsMessages";

//Import Needed Images
import arrow from "../../../public/Images/arrowRight.svg";

//Import Needed ICons
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";


//Import Needed States
import { useCreateUserStore } from "@/store/accountCreation";




const Form = () => {
  //State for the modals
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalProps, setModalProps] = useState<object>({})
  const [message, setMessage] = useState<string>("")
  //For the router
  const router = useRouter();
  const {
    firstName,
    updateFirstName,
    lastName,
    updateLastName,
    email,
    updateEmail,
    password,
    updatePassword,
    dateOfBirth,
    updateDateOfBirth,
    profileImgSrc,
    updateProfileImgSrc,
    country,
    city,
    updateCity,
    state,
    updateState,
    address,
    updateAddress,
    mobileNumber,
    updateMobileNumber,
    idType,
    idNumber,
    updateIdNumber,
    dateOfExpiry,
    updateDateOfExpiry,
    idCardFrontImgSrc,
    updateIdCardFrontImgSrc,
    idCardBackImgSrc,
    updateIdCardBackImgSrc,
  } = useCreateUserStore();

  //For the loading state
  const [loading, setLoading] = useState<boolean>(false)
  //For the password
  const [seen, setSeen] = useState<boolean>(false);
  //Divs state
  const totalDivs = 3;
  const [activeDiv, setActiveDiv] = useState(0);

  //Functions
  const handleNext = () => {
    setActiveDiv((prev) => (prev + 1) % totalDivs);
  };
  const handlePrev = () => {
    setActiveDiv((prev) => (prev - 1 + totalDivs) % totalDivs);
  };
  const handleSeePassword = () => {
    setSeen((prev) => !prev);
  };
  const checkFilledValues = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !dateOfBirth ||
      !country ||
      !city ||
      !state ||
      !address ||
      !mobileNumber ||
      !idType ||
      !idNumber ||
      !dateOfExpiry ||
      !idCardFrontImgSrc ||
      !idCardBackImgSrc
    ) {
      return true;
    }

    return false;
  };

//Display the correct modal function
const handleSuccess = () => {
  setShowModal(true);
  setModalProps(successModalProps);
};

const handleError = () => {
  setShowModal(true);
  setModalProps(errorModalProps);
};
const handleFinal = () => {
  setShowModal(false)
}
  //On submit function
  const onSubmit = (event: FormEvent) => {
      event.preventDefault()
      setLoading(true)
      const accountNumber = generateAccountNumber().toString();
      const transactions = {}
      const formData = {accountNumber, firstName, lastName, email, password, dateOfBirth, profileImgSrc, country, city, state, address, mobileNumber, idType, transactions, idNumber, dateOfExpiry, idCardFrontImgSrc, idCardBackImgSrc}

      makeApiRequest("/create", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false)
          setMessage("Your account was created successfully")
          handleSuccess()
          router.push(`/onboarding/verification?email=${email}&name=${firstName} ${lastName}`);
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false)
          if (error.message === "Request failed with status code 409") {
            setMessage("Email already exists, kindly log in.")
            router.push("/login")
          }
          setMessage("Unable to create account currently. Please try again.")
          handleError()
          router.refresh() 
        },
      });
  }
  return (
    <>
      {showModal && <Toast {...modalProps} message= {message} hideModal={handleFinal}/>}
      <Progress activeDiv={activeDiv} />
      <main className="mt-10 text-xs md:text-sm xl:text-base text-[#161618]">
        <form onSubmit={onSubmit}>
          <div className="w-full flex overflow-x-hidden transition-transform duration-300 ease-in-out transform">
            <More isVisible={activeDiv <= 0}>
              <div className="flex justify-between">
                <div className="w-[49%] flex flex-col gap-y-1">
                  <label className="cursor-pointer" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="John"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateFirstName(e.target.value)
                    }
                  />
                </div>
                <div className="w-[49%] flex flex-col gap-y-1">
                  <label className="cursor-pointer" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="Doe"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateLastName(e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                  placeholder="example@gmail.com"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateEmail(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="date">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={dateOfBirth}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none bg-inherit w-full"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateDateOfBirth(e.target.value)
                  }
                />
              </div>
              <ImageUpload
                value={profileImgSrc}
                onChange={(value) => updateProfileImgSrc(value)}
                text="Profile Picture"
              />
            </More>
            <More isVisible={activeDiv === 1}>
              <div className="flex flex-col gap-y-1">
                <label className="cursor-pointer" htmlFor="country">
                  Country
                </label>
                <CountrySelect />
              </div>
              <div className="flex justify-between mt-6">
                <div className="w-[49%] flex flex-col gap-y-1">
                  <label className="cursor-pointer" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="City"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateCity(e.target.value)
                    }
                  />
                </div>
                <div className="w-[49%] flex flex-col gap-y-1">
                  <label className="cursor-pointer" htmlFor="state">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={state}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="State"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateState(e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                  placeholder="Address"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateAddress(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="phoneNumber">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={mobileNumber}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                  placeholder="Mobile Number"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateMobileNumber(e.target.value)
                  }
                />
              </div>
              <div className="relative flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="password">
                  Password
                </label>
                <input
                  type={seen ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                  placeholder="XXXXXXXXXX"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatePassword(e.target.value)
                  }
                />
                <div
                  className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl"
                  onClick={handleSeePassword}
                >
                  {seen ? <BsEyeSlash /> : <BsEye />}
                </div>
              </div>
            </More>

            <More isVisible={activeDiv === 2}>
              <div className="mt-6 flex flex-col gap-y-1">
                <label htmlFor="idSelect" className="cursor-pointer">
                  ID Type
                </label>
                <IdSelect />
              </div>
              <div className="flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="idNumber">
                  ID Number
                </label>
                <input
                  type="number"
                  name="idNumber"
                  id="idNumber"
                  value={idNumber}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                  placeholder="Your ID Number"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateIdNumber(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-y-1 mt-6">
                <label className="cursor-pointer" htmlFor="dateOfExpiry">
                  Date of Expiry
                </label>
                <input
                  type="date"
                  name="dateOfExpiry"
                  id="dateOfExpiry"
                  value={dateOfExpiry}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none bg-inherit w-full"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateDateOfExpiry(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-row gap-x-2 mt-4 justify-between">
                <div className="w-[49%]">
                  <ImageUpload
                    value={idCardFrontImgSrc}
                    onChange={(value) => updateIdCardFrontImgSrc(value)}
                    text="Upload ID Front"
                  />
                </div>
                <div className="w-[49%]">
                  <ImageUpload
                    value={idCardBackImgSrc}
                    onChange={(value) => updateIdCardBackImgSrc(value)}
                    text="Upload ID Back"
                  />
                </div>
              </div>
            </More>
          </div>
          <div className="my-8 flex justify-between">
            <p
              className={`cursor-pointer underline hover:-translate-x-2 duration-500 transition ${
                activeDiv > 0 ? "" : "hidden"
              }`}
              onClick={activeDiv > 0 ? handlePrev : undefined}
            >
              Prev
            </p>
            <p
              className={`cursor-pointer underline hover:translate-x-2 duration-500 transition ${
                activeDiv == totalDivs - 1 ? "hidden" : ""
              } `}
              onClick={activeDiv < totalDivs - 1 ? handleNext : undefined}
            >
              Next
            </p>
          </div>
          <p className="my-4">
            Already using Keystone National bank?
            <span className="text-primary hover:underline duration-500">
              <Link href="/login"> Sign in here</Link>
            </span>
          </p>
          <button
            onClick={() => {
              if (checkFilledValues()) {
                toast.error("Please Fill All The Fields");
              }
            }}
            type={checkFilledValues() ? "button" : "submit"}
            className={`${
              checkFilledValues()
                ? "cursor-not-allowed bg-[#D70015]"
                : "bg-secondary"
            } group mt-8 mb-4 flex w-full items-center justify-center gap-x-1.5 rounded-md py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg`}
          >
            {loading ? "Submitting" : "Continue"}
            <Image
              src={arrow}
              alt="Right Arrow"
              className="transition duration-500 group-hover:translate-x-2"
            />
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
