import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";
//Import Needed Components
import Form from "@/components/AuthComponents/Form";

const page = () => {
    return ( 
        <main className="h-screen lg:flex">
            <div className="flex h-full flex-col justify-center px-6 sm:px-8 md:px-10 lg:w-1/2 lg:px-12 xl:px-14 2xl:px-16">
                <Link href="/" className="flex gap-x-1">
                    <Image src={logo} alt="Keystone National Bank Logo" priority={true} className="size-9 sm:size-12 xl:size-14"/>
                    <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                        <p>Keystone</p>
                        <p className="-mt-[0.3rem]">National</p>
                        <p className="-mt-[0.3rem]">Bank</p>
                    </div>
                </Link>
                <div className="text-[#161618] mt-10">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Set up your account</p>
                    <p className="text-xs sm:text-sm xl:text-base font-semibold mt-4">Welcome, let&apos;s get started</p>
                </div>
                <Form />
            </div>
            <div className="createBackground hidden lg:block lg:w-1/2"></div>
        </main>
     );
}

export default page;