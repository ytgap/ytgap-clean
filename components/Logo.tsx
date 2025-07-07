export default function Logo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 800,
      fontSize: 28,
      color: '#FF0000',
      letterSpacing: 1,
    }}>
      <span role="img" aria-label="magnifying glass">
        🔍
      </span>
      YTGap
    </div>
  );
}
