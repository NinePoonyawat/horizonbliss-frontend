"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function QrLoginPage() {
  const { roomNo } = useParams();
  const router = useRouter();

  useEffect(() => {
    // 🔥 RESET SESSION ทุกครั้งที่เข้า QR
    localStorage.removeItem("token");
    localStorage.removeItem("roomNo");
    localStorage.removeItem("expiresAt");

    if (!roomNo) {
      router.replace("/");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/enter-room`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomNo }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("QR invalid");
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("roomNo", data.roomNo);
        localStorage.setItem("expiresAt", String(data.expiresAt));

        router.replace("/kitchen");
      })
      .catch(() => {
        router.replace("/");
      });
  }, [roomNo, router]);

  return <p>กำลังเข้าสู่ระบบ...</p>;
}
