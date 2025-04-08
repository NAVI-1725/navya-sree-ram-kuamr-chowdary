"use client";

import dynamic from "next/dynamic";

// Disable SSR completely
const Typewriter = dynamic(
  () => import("react-simple-typewriter").then(mod => mod.Typewriter),
  { ssr: false }
);

export default Typewriter;
