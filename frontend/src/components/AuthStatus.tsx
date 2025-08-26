"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface DecodedToken {
    email?: string;
    sub?: string;
    exp?: number;
}

function decodeJwt(token: string): DecodedToken | null {
    try {
        const payload = token.split(".")[1];
        const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
        return JSON.parse(json);
    } catch {
        return null;
    }
}

export default function AuthStatus() {
    const router = useRouter();
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
        if (!token) {
            setEmail(null);
            return;
        }
        const decoded = decodeJwt(token);
        setEmail(decoded?.email ?? null);
    }, []);

    if (!email) {
        return (
            <div className="absolute top-4 right-4 flex gap-3">
                <a href="/login" className="rounded-xl bg-white/80 px-4 py-2 text-[#0e3e79] font-bold border-2 border-[#0e3e79]/30 hover:bg-white">Login</a>
                <a href="/register" className="rounded-xl bg-[#ffb347] px-4 py-2 text-[#0e3e79] font-bold border-2 border-[#0e3e79]/30 hover:bg-[#ffcc33]">Register</a>
            </div>
        );
    }

    return (
        <div className="absolute top-4 right-4 flex items-center gap-3">
            <span className="rounded-xl bg-white/90 px-4 py-2 text-[#0e3e79] font-bold border-2 border-[#0e3e79]/30">{email}</span>
            <button
                onClick={() => { localStorage.removeItem("auth_token"); router.push("/login"); }}
                className="rounded-xl bg-[#ffb347] px-4 py-2 text-[#0e3e79] font-bold border-2 border-[#0e3e79]/30 hover:bg-[#ffcc33]"
            >
                Logout
            </button>
        </div>
    );
}


