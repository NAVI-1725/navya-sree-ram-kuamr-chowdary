// app/layout.tsx

import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Penumarthi Navya Sree Ram Kumar Chowdary - Portfolio",
  description: "Official portfolio of Penumarthi Navya Sree Ram Kumar Chowdary, a Computer Science Engineer at IIIT Raichur.",
  keywords: [
    "Penumarthi Navya Sree Ram Kumar Chowdary",
    "Navya Sree Ram Kumar",
    "CSE",
    "IIIT Raichur",
    "Portfolio",
    "Developer",
    "Engineer"
  ],
  authors: [{ name: "Penumarthi Navya Sree Ram Kumar Chowdary" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://navya-sree-ram-kumar-chowdary.vercel.app/"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
