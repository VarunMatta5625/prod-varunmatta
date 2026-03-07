"use client";
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#f0faf7" }}>
            <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-[#e8f5f2]">
                {/* Logo */}
                <div className="flex items-center gap-2.5 mb-8 justify-center">
                    <svg width="52" height="32" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 4 L18 4 C9.163 4 2 11.163 2 20 C2 28.837 9.163 36 18 36 L40 36 L40 4Z" fill="#228573" />
                        <path d="M40 4 L62 4 C70.837 4 78 11.163 78 20 C78 28.837 70.837 36 62 36 L40 36 L40 4Z" fill="white" stroke="#9ca3af" strokeWidth="2.5" />
                        <line x1="40" y1="2" x2="40" y2="38" stroke="white" strokeWidth="2" />
                    </svg>
                    <span className="font-extrabold tracking-widest uppercase" style={{ color: "#228573", fontSize: "15px" }}>
                        AUSHADHAM
                    </span>
                </div>

                <h1 className="text-2xl font-extrabold text-center mb-1" style={{ color: "#065b4b" }}>Welcome back</h1>
                <p className="text-center text-sm mb-8" style={{ color: "rgba(6,91,75,0.6)" }}>Sign in to your Aushadham account</p>

                {/* Placeholder form */}
                <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold" style={{ color: "#065b4b" }}>Email or Phone</label>
                        <input
                            type="text"
                            placeholder="Enter your email or phone"
                            className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-sm outline-none focus:border-[#228573] focus:ring-1 focus:ring-[#228573] transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold" style={{ color: "#065b4b" }}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-sm outline-none focus:border-[#228573] focus:ring-1 focus:ring-[#228573] transition-all"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Link href="/forgot-password" className="text-sm font-semibold hover:underline" style={{ color: "#228573" }}>
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3.5 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
                        style={{ backgroundColor: "#228573" }}
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-6 text-sm" style={{ color: "rgba(6,91,75,0.6)" }}>
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-bold hover:underline" style={{ color: "#228573" }}>
                        Sign up
                    </Link>
                </p>
                <p className="text-center mt-3 text-xs" style={{ color: "rgba(6,91,75,0.4)" }}>
                    — Integration-ready placeholder page —
                </p>
            </div>
            <div className="absolute top-6 left-6">
                <Link href="/" className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: "#228573" }}>
                    ← Back to home
                </Link>
            </div>
        </div>
    );
}
