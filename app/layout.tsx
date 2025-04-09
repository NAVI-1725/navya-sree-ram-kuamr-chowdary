// app/layout.tsx

import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio",
  description: "Welcome to Navya Sree Ram Kumar Chowdary's Portfolio Website",
  icons: {
    icon: "/favicon.ico",   
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
