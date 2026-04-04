export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Спиннер */}
        <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
