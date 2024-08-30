"use client";
import { useRouter } from "next/navigation";
import Form from "./components/Form";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = document.cookie.includes("auth=true");

    if (isAuthenticated) {
      router.push("/dashboard"); 
    }
  }, [router]);
  
  return (
    <section className="shadow-xl shadow-neutral-800 login-container h-screen flex justify-center items-center">
      <div className="signin_container bg-white/90 md:w-1/3 h-fit py-5 rounded-lg">
        <h1 className="text-center font-bold text-2xl text-gray-800 mb-2">
          User Login
        </h1>
        <Form />
      </div>
    </section>
  );
}
