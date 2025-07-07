type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  return (
    <div style={{ color: 'red', fontWeight: 'bold', margin: '12px 0' }}>
      {message}
    </div>
  );
}
