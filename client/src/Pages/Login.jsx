import React from "react";
import { Lock, Mail, User2Icon } from "lucide-react";
import api from "../config/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));


      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#030712] relative overflow-hidden">
      {/* Background elements to match the new dark theme */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-primary opacity-20 blur-[100px]"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 sm:w-[350px] w-full text-center border border-white/10 rounded-2xl px-8 py-2 bg-black/40 backdrop-blur-md shadow-2xl"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Please {state} in to continue
        </p>
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 border border-white/10 h-12 rounded-full overflow-hidden pl-5 gap-3 transition-colors focus-within:border-brand-primary/50">
            <User2Icon size={18} className="text-slate-400" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent border-none outline-none ring-0 text-white placeholder:text-slate-500 text-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white/5 border border-white/10 h-12 rounded-full overflow-hidden pl-5 gap-3 transition-colors focus-within:border-brand-primary/50">
          <Mail size={16} className="text-slate-400" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent border-none outline-none ring-0 text-white placeholder:text-slate-500 text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white/5 border border-white/10 h-12 rounded-full overflow-hidden pl-5 gap-3 transition-colors focus-within:border-brand-primary/50">
          <Lock size={18} className="text-slate-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent border-none outline-none ring-0 text-white placeholder:text-slate-500 text-sm"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4 text-left text-brand-primary">
          <button className="text-sm hover:text-brand-primary-hover transition-colors cursor-pointer" type="button">
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white font-medium bg-brand-primary hover:bg-brand-primary-hover transition-all shadow-[0_0_15px_rgba(82,69,255,0.3)] hover:shadow-[0_0_25px_rgba(82,69,255,0.5)] cursor-pointer"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>
        <p
          className="text-slate-400 text-sm mt-4 mb-11 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span 
            onClick={() => setState((prev) => (prev === "login" ? "register" : "login"))}
            className="text-brand-primary hover:text-brand-primary-hover transition-colors underline-offset-4 hover:underline"
          >
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
