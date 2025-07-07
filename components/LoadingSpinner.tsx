export default function LoadingSpinner() {
  return (
    <div style={{ margin: '24px 0', textAlign: 'center' }}>
      <span role="img" aria-label="Loading" style={{ fontSize: 32 }}>
        ⏳
      </span>
      <div>Loading...</div>
    </div>
  );
}
