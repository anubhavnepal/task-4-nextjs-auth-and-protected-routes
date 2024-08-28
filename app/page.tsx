export default function Home() {
  return (
    <section className="shadow-xl shadow-neutral-800 login-container h-screen flex justify-center items-center">
      <div className="signin_container bg-white/90 w-1/3 h-fit py-5 rounded-lg">
        <h1 className="text-center font-bold text-2xl text-gray-800 mb-2">
          User Login
        </h1>
        <form id="loginForm" className="py-5 px-5">
          <div className="space-y-2 mb-8">
            <label htmlFor="unique_id" className="block text-gray-700">
              Username
            </label>
            <input
              placeholder='"user" or "admin"'
              type="text"
              className="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:shadow-md focus:shadow-indigo-200 p-3 bg-[#EFEFEF] rounded-lg w-full mb-4"
              id="unique_id"
              name="unique_id"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              placeholder="Same as username"
              type="password"
              id="password"
              className="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:shadow-md focus:shadow-indigo-200 p-3 bg-[#EFEFEF] rounded-lg w-full mb-4"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-slate-800 p-3 rounded-xl text-white w-full border border-slate-800 hover:bg-slate-900 mt-10"
          >
            LOGIN
          </button>
        </form>
      </div>
    </section>
  );
}
