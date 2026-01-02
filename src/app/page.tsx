import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>HorizonBliss</h1>
      <p>สั่งอาหารผ่านเว็บไซต์</p>

      <Link href="/kitchen">ไปที่เมนูอาหาร</Link>
    </main>
  );
}
