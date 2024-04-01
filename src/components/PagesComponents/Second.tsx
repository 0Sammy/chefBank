//Import Needed Components
import SecondCard from "./SecondCard";
const Second = () => {
    return ( 
        <main className="inter bg-[#FBF1EC] md:rounded-[3rem] rounded-[2rem] -mt-[10rem] sm:-mt-[12rem] md:-mt-[14rem] lg:-mt-[16rem] xl:-mt-[18rem] 2xl:-mt-[20rem] py-14 relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <p className="text-primary text-sm md:text-base xl:text-lg font-semibold ">Why Keystone National Bank?</p>
            <p className="text-3xl md:text-4xl xl:text-5xl font-bold mt-2 text-[#161618]">Built for Your Convenience</p>
            <p className="mt-8 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-[#56575C] text-sm sm:text-base md:text-lg xl:text-xl">Explore the unique advantages of our online services and discover how we go beyond traditional banking to meet your modern needs.</p>
            <div className="flex justify-center flex-wrap gap-5 xl:gap-10 mt-14">
                <SecondCard title="Flexible Account Options" body="Choose from a variety of savings accounts tailored to meet your specific needs and financial goals." />
                <SecondCard title="Online and Mobile Access" body="Access your savings account anytime, anywhere with our secure online and mobile banking platforms." />
                <SecondCard title="24/7 Account Access" body="Access your accounts 24/7, giving you control over your finances at any time." />
                <SecondCard title="Secure Transactions" body="Rest easy with our state-of-the-art security measures, ensuring the safety of your online transactions." />
                <SecondCard title="Dedicated Customer Service" body="Connect with our dedicated customer support team for prompt and personalized assistance." />
                <SecondCard title="Competitive Interest Rates" body="Earn competitive interest rates on your savings, helping your money grow over time." />
            </div>
        </main>
     );
}
 
export default Second;