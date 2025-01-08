import Image from "../../assets/Reading book-pana.png";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-3/4 w-3/4 border border-gray-400 shadow-lg rounded flex">
        <div
          className="w-2/3 border-r-gray-400 border flex items-center
        justify-center"
        >
          <img src={Image} alt="" className="h-full" />
        </div>
        <div className="w-1/3 flex flex-col items-center p-8">
          <div className="text-3xl mb-20">Create an account</div>
          <div
            className="border border-black p-3 mb-3 cursor-pointer w-full
          transition-all ease-in-out duration-300 hover:scale-105 flex gap-3"
          >
            <img src={Google} alt="" className="w-10" />
            <div>Continue with Google</div>
          </div>
          <div
            className="border border-black p-3 mb-3 cursor-pointer w-full
          transition-all ease-in-out duration-300 hover:scale-105 flex gap-3"
          >
            <img src={Facebook} alt="" className="w-10" />
            Continue with Facebook
          </div>
          <hr className="my-3 border border-gray-400 w-full" />
          <div>Or sign up with:</div>
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 border rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-1 border rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-orange-500 text-white rounded-md
              transition-all ease-in-out duration-300
              hover:bg-orange-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
