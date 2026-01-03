"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Spin, Result } from "antd";

export default function EnterClient() {
  const params = useSearchParams();
  const router = useRouter();
  const room = params.get("room");
  const [error, setError] = useState("");

  useEffect(() => {
    // 🔥 เคลียร์ session เก่าทุกครั้ง
    localStorage.clear();

    if (!room) {
      setError("ไม่พบหมายเลขห้อง");
      return;
    }

    const login = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/enter-room`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomNo: room }),
          }
        );

        console.log(res);

        if (!res.ok) throw new Error();

        const data = await res.json();

        localStorage.setItem("token", data.token);
        localStorage.setItem("roomNo", data.roomNo);
        localStorage.setItem("expiresAt", data.expiresAt);

        router.replace("/kitchen");
      } catch {
        setError("ไม่สามารถเข้าสู่ระบบได้");
      }
    };

    login();
  }, [room, router]);

  if (error) {
    return <Result status="error" title={error} />;
  }

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Spin size="large" />
    </div>
  );
}
