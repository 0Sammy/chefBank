"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//Import Needed Icons
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

//Import Needed Images
import arrow from "../../../public/Images/arrowRight.svg";

type InitialStateProps = {
  email: string;
  password: string;
  role: string;
};
const initialState: InitialStateProps = {
  email: "",
  password: "",
  role: "user"
};

const LoginForm = () => {
  const router = useRouter();
  //Loading state for the form
  const [loading, setLoading] = useState<boolean>(false);
  const [seen, setSeen] = useState<boolean>(false);
  const handleSeePassword = () => {
    setSeen((prev) => !prev);
  };
  const [state, setState] = useState(initialState);
  //Function for the State Changing
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const callback = await signIn("credentials", {
        ...state,
        redirect: false,
      });

      if (callback?.ok && !callback?.error) {
        setLoading(false);
        toast.success("Welcome");
        handleFormReset();
        router.push("/user/dashboard");
        
      } else if (callback?.error) {
        setLoading(false);
        handleFormReset();
        toast.error("Wrong Email or Password");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      handleFormReset();
      toast.error("An error occurred during sign-in");
    }
  };

  return (
    <main className="mt-12 text-xs md:text-sm xl:text-base text-[#161618]">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-1">
          <label className="cursor-pointer" htmlFor="email">
            Email
          </label>
          <input
            value={state.email}
            type="email"
            name="email"
            id="email"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="relative flex flex-col gap-y-1 mt-6">
          <label className="cursor-pointer" htmlFor="phoneNumber">
            Password
          </label>
          <input
            type={seen ? "text" : "password"}
            value={state.password}
            name="password"
            id="password"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
            placeholder="xxxxxxxxxxxxx"
            onChange={handleChange}
          />
          <div
            className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl"
            onClick={handleSeePassword}
          >
            {seen ? <BsEyeSlash /> : <BsEye />}
          </div>
        </div>
        <p className="mt-4">
          First time using Keystone National Bank?
          <span className="text-primary hover:underline duration-500">
            <Link href="/create"> Sign up</Link>
          </span>
        </p>
        <button
          type="submit"
          className="group mt-12 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-white md:py-3 lg:text-lg"
        >
          {loading ? "Signing in....." : "Continue"}{" "}
          <Image
            src={arrow}
            alt="Right Arrow"
            className="transition duration-500 group-hover:translate-x-2"
          />{" "}
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
