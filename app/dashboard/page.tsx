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
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl text-red-100">Welcome to the Dashboard!</h1>
      <div className="space-x-4">
        <Button title="LOGOUT" onClick={handleLogout}/>
      </div>
    </div>
  );
};

export default Dashboard;
