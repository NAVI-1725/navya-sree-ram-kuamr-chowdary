// app/layout.tsx

import "../styles/globals.css";
import { ReactNode } from "react";
import SeoSchema from "@/components/SeoSchema"; // ✅ Schema markup for Google

export const metadata = {
  title: "Penumarthi Navya Sree Ram Kumar Chowdary - Portfolio",
  description:
    "Official portfolio of Penumarthi Navya Sree Ram Kumar Chowdary — Computer Science Engineering student at IIIT Raichur. Alumni of Career Point and SSVN School.",
  keywords: [
    // Full name and permutations
    "Penumarthi Navya Sree Ram Kumar Chowdary",
    "Navya Sree Ram Kumar",
    "Sree Ram Kumar Chowdary",
    "Navi Chowdary",
    "Navi Sree",
    "Navi Sriram Kumar",
    "Navi Penumarthi",
    "Navya Chowdary",
    "Navya Kumar",
    "Sriram Kumar",
    "Sree Ram",
    "Chowdary Penumarthi",
    "Penumarthi Chowdary",
    "Navi Kumar",
    "Penumarthi Navya",
    "Navya Sree Ram",
    "Sriram Chowdary",
    "Navya Sriramkumar",
    "Navya Sree",
    "Navi Sree Ram",
    "Navya Ram Kumar",
    "Sree Ramkumar",
    "Sree Ram Kumar",
    "Penumarthi N S R K Chowdary",

    // Institute/school-related
    "IIIT Raichur",
    "Indian Institute of Information Technology Raichur",
    "Career Point Kota",
    "SSVN School",
    "SSVN Eluru",
    "IIIT Raichur student portfolio",

    // Portfolio and project tags
    "best CSE portfolio",
    "top engineering student portfolio",
    "modern developer portfolio India",
    "top Indian student websites",
    "CS student portfolio website",
    "developer portfolio Next.js",
    "Tailwind portfolio",
    "full stack portfolio"
  ],
  authors: [{ name: "Penumarthi Navya Sree Ram Kumar Chowdary" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://navya-sree-ram-kumar-chowdary.vercel.app/"
  },
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Penumarthi Navya Sree Ram Kumar Chowdary - Portfolio",
    description: "CSE Student at IIIT Raichur - Explore my projects and journey.",
    url: "https://navya-sree-ram-kumar-chowdary.vercel.app/",
    siteName: "Navya Portfolio",
    images: [
      {
        url: "/navi.jpg", // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: "Penumarthi Navya Sree Ram Kumar Chowdary"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Navya Sree Ram Kumar Chowdary | Portfolio",
    description: "IIIT Raichur | Projects | CSE | Developer Portfolio",
    images: ["/navi.jpg"],
    creator: "@yourTwitterHandle" // optional: replace with your handle
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SeoSchema /> {/* Structured data for Google Search */}
        {children}
      </body>
    </html>
  );
}
