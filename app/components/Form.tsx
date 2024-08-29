"use client";
import React, { useState } from "react";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginHandler = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (username === "user" && password === "user") {
      document.cookie = "auth=true; path=/";
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <form id="loginForm" className="py-5 px-5" onSubmit={loginHandler}>
      <div className="space-y-2 mb-8">
        <Label htmlFor="unique_id" title="Username" />
        <Input
          id="unique_id"
          type="text"
          name="unique_id"
          placeholder="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" title="Password" />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Same as username"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button title="LOGIN" type="submit" />
    </form>
  );
};

export default Form;
