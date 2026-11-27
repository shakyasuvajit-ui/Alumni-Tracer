import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.includes("@")) next.email = "Email must be valid";
    if (form.password.length < 8) next.password = "Password must be at least 8 characters";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    
    setStatus("submitting");
    setTimeout(() => setStatus("blocked"), 900);
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md border-2 border-black border-solid rounded-lg p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18cm] text-moss-600">Alumni Skill Tracer</p>
        <h1 className="mt-2 font-display text-3xl font-semibold">Welcome</h1>
        <p className="mt-2 text-sm text-ink/55">Sign up to see</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 flex flex-col items-center" noValidate>
        <div className="w-full space-y-4">
          <Input 
            label="Name" 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={form.name} 
            onChange={handleChange} 
            error={errors.name}
          />
          <Input 
            label="Email" 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={form.email} 
            onChange={handleChange} 
            error={errors.email}
          />
          <Input 
            label="Password" 
            type="password" 
            name="password" 
            placeholder="Enter your password, minimum 8 characters" 
            value={form.password} 
            onChange={handleChange} 
            error={errors.password}
          />
          </div>
          <Button 
            type="submit" 
            variant="primary"
            size="lg" 
            className="w-auto mt-2"
            loading={status === "submitting"}
          >
            {status === "submitting" ? "Signing up..." : "Sign up"}
          </Button>
        </form>

        {status === "blocked" && (
          <div className="mt-5 rounded-lg border border-moss-100 bg-moss-50 px-4 py-3 text-sm text-moss-700">
            For now, skip ahead and <Link to="/dashboard" className="font-semibold underline">Explore the app</Link>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-ink/55">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-moss-700 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}