"use client";

import { useState } from "react";

type Mode = "login" | "register";

interface AuthFormProps {
    mode: Mode;
}

export default function AuthForm({ mode }: AuthFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        try {
            if (mode === "register") {
                if (password !== confirm) throw new Error("Passwords do not match");
                if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
                    throw new Error("Password must be 8+ chars with letters and numbers");
                }
            }
            const res = await fetch(`${apiBase}/auth/${mode}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.message || "Request failed");
            if (data?.token) {
                localStorage.setItem("auth_token", data.token);
            }
            setMessage(mode === "login" ? "Logged in!" : "Registered!");
        } catch (err: any) {
            setMessage(err?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "linear-gradient(180deg, #6ec1ff 0%, #2a76c5 60%, #0e3e79 100%)" }}>
            <div className="relative w-full max-w-sm">
                {/* Cartoon bubble frame */}
                <div className="absolute -inset-2 rounded-3xl bg-white/20 blur-xl" />
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl border-4 border-[#3aa76d] overflow-hidden">
                    <div className="bg-[#3aa76d] text-white px-6 py-3 text-center text-xl font-bold tracking-wide">
                        {mode === "login" ? "Fish Tank Login" : "Join the Tank"}
                    </div>
                    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-[#0e3e79]">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 w-full rounded-xl border-2 border-[#0e3e79]/30 px-4 py-2 focus:outline-none focus:border-[#0e3e79] bg-white text-[#0e3e79] placeholder:text-[#0e3e79]/50 shadow-inner"
                                placeholder="you@ocean.com"
                            />
                        </div>
                        {mode === "register" && (
                            <div>
                                <label className="block text-sm font-semibold text-[#0e3e79]">Confirm Password</label>
                                <input
                                    type="password"
                                    required
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    className="mt-1 w-full rounded-xl border-2 border-[#0e3e79]/30 px-4 py-2 focus:outline-none focus:border-[#0e3e79] bg-white text-[#0e3e79] placeholder:text-[#0e3e79]/50 shadow-inner"
                                    placeholder="••••••••"
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-semibold text-[#0e3e79]">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full rounded-xl border-2 border-[#0e3e79]/30 px-4 py-2 focus:outline-none focus:border-[#0e3e79] bg-white text-[#0e3e79] placeholder:text-[#0e3e79]/50 shadow-inner"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#ffb347] hover:bg-[#ffcc33] transition-colors text-[#0e3e79] font-bold py-2.5 border-2 border-[#0e3e79]/40 shadow-md disabled:opacity-60"
                        >
                            {loading ? "Please wait..." : mode === "login" ? "Dive In" : "Make a Splash"}
                        </button>
                        {message && (
                            <p className="text-center text-sm text-[#0e3e79]">{message}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}


