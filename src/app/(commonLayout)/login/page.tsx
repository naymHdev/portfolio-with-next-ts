"use client";

import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <>
      <div className=" relative">
        <div className=" flex items-center justify-center h-[100vh]">
          <div>
            <div>
              <h2 className=" text-4xl font-semibold text-primary-text">
                Create account
              </h2>
              <p className=" text-primary-text font-medium mt-8">
                Create account with your Social account
              </p>
              <div className=" flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "http://localhost:3000/dashboard",
                    })
                  }
                  className=" flex items-center gap-3 rounded-lg px-12 py-2 font-semibold custom-bg text-title hover:scale-110 hover:transition-all"
                >
                  <FcGoogle className=" text-2xl" />
                  Google
                </button>
                <button
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "http://localhost:3000/dashboard",
                    })
                  }
                  className=" flex items-center gap-3 rounded-lg px-12 py-2 font-semibold custom-bg text-title hover:scale-110 hover:transition-all"
                >
                  <FaSquareGithub className=" text-2xl" /> GitHub
                </button>
              </div>
            </div>
            <div className="border opacity-10 my-10 border-primaryColor" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
