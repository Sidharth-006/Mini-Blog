import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] =
    useState(true);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  // remove old token on page load
  useEffect(() => {
    localStorage.removeItem(
      "token"
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // SIGNUP
    if (!isLogin) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password
      ) {
        setError(
          "Please fill all fields"
        );
        return;
      }

      const userData = {
        name: formData.name,
        email: formData.email,
        password:
          formData.password,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      alert(
        "Signup successful. Please login."
      );

      setIsLogin(true);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      return;
    }

    // LOGIN
    const savedUser =
      localStorage.getItem(
        "user"
      );

    if (!savedUser) {
      setError(
        "No account found. Please signup first."
      );
      return;
    }

    const parsedUser =
      JSON.parse(savedUser);

    const validUser =
      parsedUser.email ===
        formData.email &&
      parsedUser.password ===
        formData.password;

    if (!validUser) {
      setError(
        "Wrong email or password"
      );
      return;
    }

    localStorage.setItem(
      "token",
      "mock-user-token"
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-sky-50 to-pink-50">
      <Navbar />

      <div className="flex justify-center items-center px-5 py-16">

        <div className="w-full max-w-md bg-white rounded-[35px] shadow-xl border border-slate-200 p-10">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900">
              {isLogin
                ? "Welcome Back 👋"
                : "Create Account 🚀"}
            </h1>

            <p className="text-slate-600 mt-2">
              {isLogin
                ? "Login to continue"
                : "Signup to start blogging"}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-slate-100 rounded-2xl p-1 mb-8">
            <button
              type="button"
              onClick={() =>
                setIsLogin(true)
              }
              className={`flex-1 py-3 rounded-2xl font-semibold transition ${
                isLogin
                  ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() =>
                setIsLogin(false)
              }
              className={`flex-1 py-3 rounded-2xl font-semibold transition ${
                !isLogin
                  ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Signup
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-violet-400"
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-violet-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-violet-400"
            />

            {error && (
              <p className="text-red-500 text-sm font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 text-white font-semibold hover:scale-[1.02] duration-300 shadow-lg"
            >
              {isLogin
                ? "Login"
                : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;