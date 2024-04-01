import Image from "next/image"

//Import Needed Images
import logo from "../../public/Images/logo.svg";

const loading = () => {
  return (
    <main className="h-screen flex items-center justify-center">
          <Image src={logo} alt="Logo" className="animate-pulse"/>
    </main>
  );
};

export default loading;
