import { useState } from "react";
import { fetchYouTubeTrends } from "../services/youtubeTrendService";

export default function Home() {
  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const result = await fetchYouTubeTrends("", "AI Music", "10000", "0.01");
    setTrends(result);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontWeight: 700, fontSize: 32 }}>YTGap (Starter Preview)</h1>
      <p>Click below to see so
