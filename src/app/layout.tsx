import type { ReactNode } from "react";
import "./globals.scss";
import "./kitchen.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
