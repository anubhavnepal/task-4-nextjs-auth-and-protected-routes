"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Button from "../components/ui/Button";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthaenticated = document.cookie.includes("auth=true");

    if (!isAuthaenticated) {
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = "auth=; path=/; expires=Mon, 08 Jan 2001 00:00:00 UTC;";
    router.push("/");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center min-h-screen w-full py-4">
        {/* <div className="bg-neutral-700"> */}
        <img src="/rickroll.png" alt="" className="object-cover" />
        {/* </div> */}

        <div className="sm:ml-8 max-sm:px-5 max-sm:text-left max-sm:mt-5 text-neutral-300">
          <h1 className="text-4xl font-bold mb-8">Gotcha!🎶🎶</h1>
          {/* <h1 className="text-4xl font-bold">Hello</h1> */}
          <p className="text-xl mt-2 font-semibold tracking-wider italic">
            Hello, I am{" "}
          </p>
          <p className="text-md mt-2 italic text-emerald-600">
            currently working on
          </p>

          <div className="mt-6 text-xl font-semibold flex items-center space-x-3">
            <img src="/tick.svg" alt="" className="size-5" />
            <p>Air Crash Nepal</p>
          </div>
          <p className="mt-2 px-8 text-neutral-500">
            Focused on Nepal airplane crash data.
          </p>
          <div className="mt-6 text-xl font-semibold flex items-center space-x-3">
            <img src="/tick.svg" alt="" className="size-5" />
            <p>Personal Portfolio Site</p>
          </div>
          <p className="mt-2 px-8 text-neutral-500">
            Showcases projects and skills.
          </p>
          {/* <p className="mt-2 text-neutral-500"> </p> */}
          <Button title="LOGOUT" onClick={handleLogout} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
