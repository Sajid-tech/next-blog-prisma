"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  // console.log(data, status);

  const router = useRouter();

  if (status == "authenticated") {
    router.push("/");
  }

  if (status == "loading") {
    return <div className="text-orange-300">Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col  min-h-screen justify-center items-center max-w-4xl m-auto">
        <h1 className=" text-4xl font-bold max-w-lg text-center">
          Welcome to the admin of the Blog website
        </h1>
        <p className="font-medium my-4 text-center  ">
          An account is needed to view this page
        </p>

        <button
          onClick={() => signIn("google")}
          className="inline-block rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500"
        >
          Sign In With Google
        </button>
        <p className=" font-sm  text-sm text-orange-400 my-4 text-center  ">
          NOTE: ONLY ADMIN CAN VIEW THIS PAGE , HOWEVER IF YOU LOGIN , YOU CAN
          ONLY COMMENTS ON THE POSTS
        </p>
      </div>
    </>
  );
};

export default LoginPage;
