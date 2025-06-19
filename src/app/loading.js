export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg text-text">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 rounded-full border-primary border-t-transparent animate-spin" />
        <p className="text-sm tracking-wide text-primary animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
