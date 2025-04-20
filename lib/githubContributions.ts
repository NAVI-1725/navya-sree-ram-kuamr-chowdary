// lib/githubContributions.ts
export async function getContributions() {
  const res = await fetch("/api/contributions");
  if (!res.ok) {
    console.error("API error:", await res.text());
    return [];
  }
  const { weeks } = await res.json();
  return weeks as { contributionDays: { date: string; contributionCount: number; color: string }[] }[];
}
