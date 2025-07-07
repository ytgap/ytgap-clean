import { useState } from "react";
// Update the import path if your service file is elsewhere
import { fetchYouTubeTrends } from "../services/youtubeTrendService";

export default function Home() {
  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Basic handler: Fetch trends (you can improve parameters later)
  const handleSearch = async () => {
    setLoading(true);
    const result = await fetchYouTubeTrends("", "AI Music", "10000", "0.01");
    setTrends(result);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontWeight: 700, fontSize: 32 }}>YTGap (Starter Preview)</h1>
      <p>Click below to see the trending gap between searches and video counts!</p>
      <button onClick={handleSearch} disabled={loading} style={{ marginTop: 20, marginBottom: 20 }}>
        {loading ? "Loading..." : "Fetch Trends"}
      </button>
      <ul>
        {trends.map((trend, idx) => (
          <li key={idx}>
            <strong>{trend.term}</strong>: {trend.dailySearches} searches, {trend.videoCount} videos
          </li>
        ))}
      </ul>
    </div>
  );
}
