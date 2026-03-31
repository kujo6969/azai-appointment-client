"use client";

import { cinzel } from "@/app/layout";
import Image from "next/image";
import { usePathname } from "next/navigation";

import LoginForm from "./LoginForm";
import RegisterForm from "./SignUpForm";

const AuthComponent = () => {
  const pathname = usePathname();

  const isRegister = pathname.includes("register");

  return (
    <div className="rounded-2xl border-red w-full border h-[80vh] mx-5 my-5 md:mx-20">
      <div className="md:grid-cols-2 grid grid-cols-1 justify-between w-full h-full">
        <div
          className={`${cinzel.className} flex flex-col justify-center items-start content-center p-5 md:p-20`}
        >
          <h1 className="text-4xl font-bold">
            {isRegister ? "Create an Account" : "Hello, Welcome Back"}
          </h1>

          <p className="text-sm text-gray-400 tracking-widest">
            {isRegister
              ? "Sign up to get started with your journey"
              : "Hey, Welcome back to your special place"}
          </p>

          {isRegister ? <RegisterForm /> : <LoginForm />}
        </div>

        <div className="md:block hidden col-span-1 justify-center items-center content-center p-2">
          <Image
            alt="background image"
            src={"/images/enhance_bg.png"}
            height={400}
            width={400}
            className="object-cover h-full w-full rounded-2xl"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
