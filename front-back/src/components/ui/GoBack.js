"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const showButton = segments.length > 1;

  if (!showButton) return null;

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 text-base mb-4 cursor-pointer"
    >
      <ChevronLeft size={26} /> Back
    </button>
  );
}
