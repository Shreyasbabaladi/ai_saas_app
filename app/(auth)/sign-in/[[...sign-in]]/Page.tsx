import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  console.log("signInPage visited");

  return <SignIn />;
};

export default SignInPage;
