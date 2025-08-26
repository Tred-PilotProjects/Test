"use client";

import { useEffect, useState } from "react";

function decodeEmailFromToken(token: string | null): string | null {
    if (!token) return null;
    try {
        const payload = token.split(".")[1];
        const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
        const data = JSON.parse(json);
        return typeof data?.email === "string" ? data.email : null;
    } catch {
        return null;
    }
}

export default function SwimmingFish() {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
        setEmail(decodeEmailFromToken(token));
    }, []);

    if (!email) return null;

    return (
        <div className="fish purple" style={{ top: "35%", animationDelay: "0s", animationDuration: "20s" }}>
            <div className="tail" />
            <div className="body" />
            <div className="eye" />
            <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/90 text-[#0e3e79] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#0e3e79]/30 whitespace-nowrap shadow"
                style={{ pointerEvents: "none" }}
            >
                {email}
            </div>
        </div>
    );
}


