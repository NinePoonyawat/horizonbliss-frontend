"use client";

import { useEffect, useState } from "react";

export default function KitchenPageHeader() {
  const [room, setRoom] = useState("");
  const [remain, setRemain] = useState(0);

  useEffect(() => {
    const roomNo = localStorage.getItem("roomNo");
    const expiresAt = Number(localStorage.getItem("expiresAt"));

    setRoom(roomNo || "");

    const timer = setInterval(() => {
      const left = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
      setRemain(left);

      if (left <= 0) {
        localStorage.clear();
        window.location.href = "/enter";
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="room-header">
      🏨 ห้อง {room} | ⏳ เหลือเวลา {Math.floor(remain / 60)}:
      {(remain % 60).toString().padStart(2, "0")}
    </div>
  );
}
