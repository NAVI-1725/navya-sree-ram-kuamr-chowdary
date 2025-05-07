// components/SeoSchema.tsx
export default function SeoSchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Penumarthi Navya Sree Ram Kumar Chowdary",
            url: "https://navya-sree-ram-kumar-chowdary.vercel.app/",
            jobTitle: "Computer Science Student",
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "IIIT Raichur"
            },
            alumniOf: ["Career Point, Kota", "SSVN School"],
            sameAs: [
              "https://github.com/NAVI-1725",
              "https://www.linkedin.com/in/your-profile"
            ]
          })
        }}
      />
    );
  }
  