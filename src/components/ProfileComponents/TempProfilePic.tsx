const TempProfilePic = ({firstAlphabet}: {firstAlphabet: string}) => {
    return ( 
        <main className="bg-primary w-full h-full rounded-[50%] flex items-center justify-center">
            <p className="text-white font-bold text-[2rem] md:text-[2.2rem] uppercase manrope">{firstAlphabet}</p>
        </main>
     );
}
 
export default TempProfilePic;