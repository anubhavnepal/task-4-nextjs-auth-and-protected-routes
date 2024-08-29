"use client";
import Form from "./components/Form";
export default function Home() {
  return (
    <section className="shadow-xl shadow-neutral-800 login-container h-screen flex justify-center items-center">
      <div className="signin_container bg-white/90 w-1/3 h-fit py-5 rounded-lg">
        <h1 className="text-center font-bold text-2xl text-gray-800 mb-2">
          User Login
        </h1>
        <Form />
      </div>
    </section>
  );
}
