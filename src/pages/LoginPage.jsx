import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/apiClient";
import imageOne from "../assets/mybizsolutions-landing.svg";
import Spinner from "../components/Spinner";
import { FcGoogle } from "react-icons/fc";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const token = await loginUser(email, password);
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (err) {
      setError(err.message); // Show a clean error to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Announcement />
    <LoginHeader />

    <section className="bg-white relative min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-md z-50">
          <Spinner />
        </div>
      )}
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img alt="" src={imageOne} className="absolute inset-0 h-full w-full object-cover" />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Welcome!</h1>
            <p className="mt-4 leading-relaxed text-gray-500">
              If you’re experiencing login issues, please {" "}
              <a
                href={`mailto:webdev@bizsolutions.us?subject=Login%20Issues%2FConcerns%20-%20${encodeURIComponent(
                  new Date().toISOString()
                )}`}
                className="underline text-orange-500"
              >
                click here
              </a>
              {" "} for assistance.
            </p>

            {error && <p className="mt-4 text-red-500">{error}</p>}
            <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="w-full rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:ring-3 focus:outline-hidden"
                  disabled={loading}
                >
                  Login
                </button>
              </div>
            </form>

            <span className="flex py-5 items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-4 text-gray-900">OR</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            <div>
              <a
                className="flex items-center justify-center w-full rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                href="#"
              >
              <FcGoogle className="text-4xl" />
              </a>
            </div>

            <p className="mt-6 leading-relaxed text-center text-gray-500">
              New to BizSolutions LLC?{" "}
              <Link
                to="/sign-up"
                className="underline text-orange-500"
              >
                Sign Up
              </Link>
            </p>

          </div>
        </main>
      </div>
    </section>
    </>

  );
};

export default LoginPage;