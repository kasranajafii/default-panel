import Image from "next/image";
import { ReactNode } from "react";
type TAuthLayout = {
  children: ReactNode;
};
const AuthLayout = ({ children }: TAuthLayout) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center max-w-sm  mx-auto h-screen">
        {children}
      </div>
      <div className="hidden md:block">
        <Image
          src={"/assets/images/auth/auth_banner.png"}
          alt="authantication banner"
          height={1024}
          width={920}
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
