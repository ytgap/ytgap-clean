type TrendCardProps = {
  term: string;
  videoCount: number;
  dailySearches: number;
};

export default function TrendCard({ term, videoCount, dailySearches }: TrendCardProps) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: 20,
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      <div style={{ fontWeight: 700, fontSize: 20 }}>{term}</div>
      <div style={{ color: '#374151', fontSize: 16 }}>
        <b>{dailySearches}</b> searches/day, <b>{videoCount}</b> videos on YouTube
      </div>
    </div>
  );
}
