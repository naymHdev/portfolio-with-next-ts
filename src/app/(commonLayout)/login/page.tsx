"use client";

import LoginForm from "@/components/login";

const SignInPage = () => {
  return (
    <>
      <div className=" relative">
        <div className=" flex items-center justify-center h-[100vh]">
          <div>
            <div className=" space-y-5">
              <h2 className=" text-4xl font-semibold text-primary-text">
                Welcome back,  <br /> Sign in to your account
              </h2>
              <LoginForm />
            </div>
            <div className="border opacity-10 my-10 border-primaryColor" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
