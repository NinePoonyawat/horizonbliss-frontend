"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#0e0e0e",
        color: "#fff",
      }}
    >
      <h1 style={{ marginBottom: 12 }}>🙏 Thank you</h1>
      <p style={{ opacity: 0.8 }}>You can exit the page now</p>
      <p style={{ marginTop: 16, fontSize: 13, opacity: 0.5 }}>
        ระบบจะพากลับไปหน้าแรกอัตโนมัติ...
      </p>
    </div>
  );
}
